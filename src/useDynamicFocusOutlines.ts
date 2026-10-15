import { useEffect } from "react";

/**
 * Hide focus outlines when a mousedown event fires; show focus outlines when a
 * keydown event fires.
 *
 * This preserves focus outlines when a user is navigating the site with their
 * keyboard while preventing distracting focus outlines from appearing when the
 * user is navigating via mouse/touch.
 *
 * Keydown events in a focused text field (`input`, `textarea` or
 * `contenteditable` element) don’t show focus outlines unless the key is Tab.
 *
 * @public
 *
 */
const useDynamicFocusOutlines = () => {
  useEffect(() => {
    const { classList } = document.documentElement;

    const hideFocusOutlines = () => {
      classList.add("focusOutlinesHidden");
    };

    const showFocusOutlines = (event: KeyboardEvent) => {
      const { activeElement } = document;

      // Keep focus outlines hidden while typing in a text field the user
      // clicked into, but always show them on Tab, which fires before focus
      // leaves the field
      if (
        event.key !== "Tab" &&
        activeElement instanceof HTMLElement &&
        (activeElement.tagName === "INPUT" ||
          activeElement.tagName === "TEXTAREA" ||
          activeElement.isContentEditable)
      ) {
        return;
      }

      classList.remove("focusOutlinesHidden");
    };

    window.addEventListener("mousedown", hideFocusOutlines);
    window.addEventListener("keydown", showFocusOutlines);

    return () => {
      window.removeEventListener("mousedown", hideFocusOutlines);
      window.removeEventListener("keydown", showFocusOutlines);
    };
  }, []);
};

export default useDynamicFocusOutlines;
