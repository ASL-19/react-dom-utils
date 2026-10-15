import { act, renderHook } from "@testing-library/react";
import { afterEach, expect, test } from "vitest";

import useFormStateAndFocusManagement from "./useFormStateAndFocusManagement.js";

const setUp = (options?: { disableFocusManagement?: boolean }) => {
  document.body.innerHTML = "<p>Submitted</p><ul><li>Error</li></ul>";

  const hook = renderHook(() => useFormStateAndFocusManagement(options));

  hook.result.current.confirmationMessageElementRef.current =
    document.querySelector("p");
  hook.result.current.errorMessagesListRef.current =
    document.querySelector("ul");

  return hook;
};

afterEach(() => {
  document.body.innerHTML = "";
});

test("starts as isNotSubmitted", () => {
  const { result } = setUp();

  expect(result.current.formState).toEqual({ type: "isNotSubmitted" });
});

test("focuses the error messages list when there are error messages", () => {
  const { result } = setUp();

  act(() => {
    result.current.setFormState({
      errorMessages: ["Error"],
      type: "hasErrorMessages",
    });
  });

  expect(document.activeElement).toBe(document.querySelector("ul"));
});

test("focuses the confirmation message when submitted", () => {
  const { result } = setUp();

  act(() => {
    result.current.setFormState({ type: "isSubmitted" });
  });

  expect(document.activeElement).toBe(document.querySelector("p"));
});

test("doesn’t move focus if focus management is disabled", () => {
  const { result } = setUp({ disableFocusManagement: true });

  act(() => {
    result.current.setFormState({ type: "isSubmitted" });
  });

  expect(document.activeElement).toBe(document.body);
});
