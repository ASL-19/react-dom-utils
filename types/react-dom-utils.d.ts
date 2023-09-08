/**
 * Shared ReactDOM utility functions and types for ASL19 projects.
 *
 * @packageDocumentation
 */

/// <reference types="react" />

import { Dispatch } from 'react';
import { FunctionComponent } from 'react';
import { RefObject } from 'react';
import { SetStateAction } from 'react';

/**
 * {@link useFormStateAndFocusManagement} state
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
 */
export declare type StylableFC<P = {}> = FunctionComponent<P & {
    className?: string;
}>;

/**
 * Add "hydrated" className to <html> element once site has rendered on client.
 *
 * We use this in Playwright tests to avoid interacting with the page before
 * event handlers are ready.
 *
 * @public
 */
export declare const useAddHydratedClassName: () => void;

/**
 * Hide focus outlines when a mousedown event fires; show focus outlines when a
 * keydown event fires.
 *
 * This preserves focus outlines when a user is navigating the site with their
 * keyboard while preventing distracting focus outlines from appearing when the
 * user is navigating via mouse/touch.
 *
 * @public
 *
 */
export declare const useDynamicFocusOutlines: () => void;

/**
 * Focus a provided element after the current render.
 *
 * This is necessary to focus an element that will only become focusable after
 * the current render is complete (e.g. if the element comes into view as a
 * result of a setState an event callback).
 *
 * @public
 *
 */
export declare const useFocusElementAfterRender: () => Dispatch<SetStateAction<HTMLElement | null>>;

/**
 * Hook for storing {@link FormState} and manipulating focus management based on state.
 *
 * @remarks
 * The returned ref objects should be attached to the appropriate elements.
 *
 * @public
 *
 */
export declare const useFormStateAndFocusManagement: ({ disableFocusManagement, }?: {
    disableFocusManagement?: boolean | undefined;
}) => {
    confirmationMessageElementRef: RefObject<HTMLParagraphElement>;
    errorMessagesListRef: RefObject<HTMLUListElement>;
    formState: FormState;
    setFormState: Dispatch<SetStateAction<FormState>>;
};

/**
 * Detect clicks outside of specific component
 * This code is a slightly modified version of this: https://usehooks.com/useOnClickOutside/
 *
 * @public
 *
 */
export declare const useOnClickOutside: ({ handler, isEnabled, ref, }: {
    handler: CallableFunction;
    isEnabled: boolean;
    ref: RefObject<HTMLElement>;
}) => void;

export { }
