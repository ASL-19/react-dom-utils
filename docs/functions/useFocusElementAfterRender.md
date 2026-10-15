[**@asl-19/react-dom-utils**](../README.md)

***

[@asl-19/react-dom-utils](../README.md) / useFocusElementAfterRender

# Function: useFocusElementAfterRender()

> **useFocusElementAfterRender**(): `Dispatch`\<`SetStateAction`\<`HTMLElement` \| `null`\>\>

Focus a provided element after the current render.

This is necessary to focus an element that will only become focusable after
the current render is complete (e.g. if the element comes into view as a
result of a setState an event callback).

## Returns

`Dispatch`\<`SetStateAction`\<`HTMLElement` \| `null`\>\>
