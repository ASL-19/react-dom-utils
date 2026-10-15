import { fireEvent, renderHook } from "@testing-library/react";
import { useRef } from "react";
import { afterEach, expect, test, vi } from "vitest";

import useOnClickOutside from "./useOnClickOutside.js";

const setUp = ({ isEnabled }: { isEnabled: boolean }) => {
  const inside = document.createElement("div");
  const insideButton = document.createElement("button");
  const outside = document.createElement("div");

  inside.append(insideButton);
  document.body.append(inside, outside);

  const handler = vi.fn();

  renderHook(() => {
    const ref = useRef<HTMLDivElement>(null);

    ref.current = inside;

    useOnClickOutside({ handler, isEnabled, ref });
  });

  return { handler, insideButton, outside };
};

afterEach(() => {
  document.body.innerHTML = "";
});

test("calls handler on mousedown outside the element", () => {
  const { handler, outside } = setUp({ isEnabled: true });

  fireEvent.mouseDown(outside);

  expect(handler).toHaveBeenCalledOnce();
});

test("doesn’t call handler on mousedown inside the element", () => {
  const { handler, insideButton } = setUp({ isEnabled: true });

  fireEvent.mouseDown(insideButton);

  expect(handler).not.toHaveBeenCalled();
});

test("doesn’t call handler if not enabled", () => {
  const { handler, outside } = setUp({ isEnabled: false });

  fireEvent.mouseDown(outside);

  expect(handler).not.toHaveBeenCalled();
});
