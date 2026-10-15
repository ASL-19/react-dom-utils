import { act, renderHook } from "@testing-library/react";
import { afterEach, expect, test } from "vitest";

import useFocusElementAfterRender from "./useFocusElementAfterRender.js";

afterEach(() => {
  document.body.innerHTML = "";
});

test("focuses the element passed to the returned function", () => {
  const div = document.createElement("div");

  document.body.append(div);

  const { result } = renderHook(() => useFocusElementAfterRender());

  act(() => {
    result.current(div);
  });

  expect(document.activeElement).toBe(div);
});
