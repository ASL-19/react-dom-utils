/**
 * {@link useFormStateAndFocusManagement} state
 */
type FormState =
  | { errorMessages: Array<string>; type: "hasErrorMessages" }
  | { type: "isNotSubmitted" }
  | { type: "isSubmitted" }
  | {
      type: "isSubmitting";
    };

export default FormState;
