import { focusElement } from "@asl-19/js-dom-utils";
import { useEffect, useRef, useState } from "react";

import FormState from "./FormState";

/**
 * Hook for storing {@link FormState} and manipulating focus management based on state.
 *
 * @remarks
 * The returned ref objects should be attached to the appropriate elements.
 */
const useFormStateAndFocusManagement = ({
  disableFocusManagement,
}: {
  disableFocusManagement?: boolean;
} = {}) => {
  const confirmationMessageElementRef = useRef<HTMLParagraphElement>(null);
  const errorMessagesListRef = useRef<HTMLUListElement>(null);

  const [formState, setFormState] = useState<FormState>({
    type: "isNotSubmitted",
  });

  useEffect(() => {
    if (disableFocusManagement) {
      return;
    }

    if (formState.type === "hasErrorMessages") {
      focusElement(errorMessagesListRef.current);
    } else if (formState.type === "isSubmitted") {
      focusElement(confirmationMessageElementRef.current);
    }
  }, [disableFocusManagement, formState]);

  return {
    confirmationMessageElementRef,
    errorMessagesListRef,
    formState,
    setFormState,
  };
};

export default useFormStateAndFocusManagement;
