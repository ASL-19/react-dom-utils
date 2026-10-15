import { fireEvent, renderHook } from "@testing-library/react";
import { afterEach, expect, test } from "vitest";

import useDynamicFocusOutlines from "./useDynamicFocusOutlines.js";

const focusOutlinesHidden = () =>
  document.documentElement.classList.contains("focusOutlinesHidden");

afterEach(() => {
  document.documentElement.className = "";
  document.body.innerHTML = "";
});

test("hides focus outlines on mousedown and shows them on keydown", () => {
  renderHook(() => useDynamicFocusOutlines());

  fireEvent.mouseDown(window);

  expect(focusOutlinesHidden()).toBe(true);

  fireEvent.keyDown(window);

  expect(focusOutlinesHidden()).toBe(false);
});

test("only adds the class once", () => {
  renderHook(() => useDynamicFocusOutlines());

  fireEvent.mouseDown(window);
  fireEvent.mouseDown(window);

  expect(document.documentElement.className).toBe(" focusOutlinesHidden");
});

test("keeps focus outlines hidden on keydown while a text input is focused", () => {
  document.body.innerHTML = "<input>";
  document.querySelector("input")?.focus();

  renderHook(() => useDynamicFocusOutlines());

  fireEvent.mouseDown(window);
  fireEvent.keyDown(window);

  expect(focusOutlinesHidden()).toBe(true);
});

test("removes its listeners on unmount", () => {
  const { unmount } = renderHook(() => useDynamicFocusOutlines());

  unmount();
  fireEvent.mouseDown(window);

  expect(focusOutlinesHidden()).toBe(false);
});
