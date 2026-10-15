[**@asl-19/react-dom-utils**](../README.md)

***

[@asl-19/react-dom-utils](../README.md) / useFormStateAndFocusManagement

# Function: useFormStateAndFocusManagement()

> **useFormStateAndFocusManagement**(`options?`): `object`

Hook for storing [FormState](../type-aliases/FormState.md) and manipulating focus management based on state.

## Parameters

### options?

Hook options

#### disableFocusManagement?

`boolean`

Don’t move focus when the form state
changes

## Returns

`object`

### confirmationMessageElementRef

> **confirmationMessageElementRef**: `RefObject`\<`HTMLParagraphElement` \| `null`\>

### errorMessagesListRef

> **errorMessagesListRef**: `RefObject`\<`HTMLUListElement` \| `null`\>

### formState

> **formState**: [`FormState`](../type-aliases/FormState.md)

### setFormState

> **setFormState**: `Dispatch`\<`SetStateAction`\<[`FormState`](../type-aliases/FormState.md)\>\>

## Remarks

The returned ref objects should be attached to the appropriate elements.
