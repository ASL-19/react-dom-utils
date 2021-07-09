/**
 * Shared ReactDOM utility functions and types for ASL19 projects.
 *
 * @packageDocumentation
 */

/// <reference types="react" />

import { Dispatch } from 'react';
import { FunctionComponent } from 'react';
import { MutableRefObject } from 'react';
import { SetStateAction } from 'react';

/**
 * {@link useFormStateAndFocusManagement} state
 *
 * @public
 */
export declare type FormState = {
    errorMessages: Array<string>;
    type: "hasErrorMessages";
} | {
    type: "isNotSubmitted";
} | {
    type: "isSubmitted";
} | {
    type: "isSubmitting";
};

/**
 * React FunctionComponent that takes an optional className prop.
 *
 * @remarks
 * The className prop is used for styling the component instance’s top-level
 * element (which should have `className={className}`) from the outside.
 *
 * @public
 */
export declare type StylableFC<P = {}> = FunctionComponent<P & {
    className?: string;
}>;

/**
 * Hook for storing {@link FormState} and manipulating focus management based on state.
 *
 * @remarks
 * The returned ref objects should be attached to the appropriate elements.
 *
 * @public
 */
export declare const useFormStateAndFocusManagement: ({ disableFocusManagement, }?: {
    disableFocusManagement?: boolean;
}) => {
    confirmationMessageElementRef: MutableRefObject<HTMLParagraphElement>;
    errorMessagesListRef: MutableRefObject<HTMLUListElement>;
    formState: FormState;
    setFormState: Dispatch<SetStateAction<FormState>>;
};

export { }
