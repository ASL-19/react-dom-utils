import { fireEvent, renderHook } from "@testing-library/react";
import { afterEach, expect, test } from "vitest";

import useDynamicFocusOutlines from "./useDynamicFocusOutlines.js";

const focusOutlinesHidden = () =>
  document.documentElement.classList.contains("focusOutlinesHidden");

const focusTextInput = () => {
  const input = document.createElement("input");

  document.body.append(input);
  input.focus();
};

afterEach(() => {
  document.documentElement.className = "";
  document.body.innerHTML = "";
});

test("hides focus outlines on mousedown and shows them on keydown", () => {
  renderHook(() => useDynamicFocusOutlines());

  fireEvent.mouseDown(window);

  expect(focusOutlinesHidden()).toBe(true);

  fireEvent.keyDown(window, { key: "ArrowDown" });

  expect(focusOutlinesHidden()).toBe(false);
});

test("preserves other classes on the html element", () => {
  document.documentElement.className = "hydrated";

  renderHook(() => useDynamicFocusOutlines());

  fireEvent.mouseDown(window);

  expect(document.documentElement.className).toBe(
    "hydrated focusOutlinesHidden",
  );

  fireEvent.keyDown(window, { key: "ArrowDown" });

  expect(document.documentElement.className).toBe("hydrated");
});

test("keeps focus outlines hidden when typing in a text field", () => {
  focusTextInput();

  renderHook(() => useDynamicFocusOutlines());

  fireEvent.mouseDown(window);
  fireEvent.keyDown(window, { key: "a" });

  expect(focusOutlinesHidden()).toBe(true);
});

test("shows focus outlines when tabbing out of a text field", () => {
  focusTextInput();

  renderHook(() => useDynamicFocusOutlines());

  fireEvent.mouseDown(window);
  fireEvent.keyDown(window, { key: "Tab" });

  expect(focusOutlinesHidden()).toBe(false);
});

test("removes its listeners on unmount", () => {
  const { unmount } = renderHook(() => useDynamicFocusOutlines());

  unmount();
  fireEvent.mouseDown(window);

  expect(focusOutlinesHidden()).toBe(false);
});
