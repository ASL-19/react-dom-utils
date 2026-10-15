import { renderHook } from "@testing-library/react";
import { afterEach, expect, test } from "vitest";

import useAddHydratedClassName from "./useAddHydratedClassName.js";

afterEach(() => {
  document.documentElement.className = "";
});

test("adds the hydrated class to the html element", () => {
  renderHook(() => useAddHydratedClassName());

  expect(document.documentElement.classList.contains("hydrated")).toBe(true);
});
