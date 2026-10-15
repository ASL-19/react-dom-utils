import { RefObject, useEffect } from "react";

/**
 * Detect clicks outside of specific component
 * This code is a slightly modified version of this: https://usehooks.com/useOnClickOutside/
 *
 * @param options - Hook options
 * @param options.handler - Function called with `{ event }` on mousedown outside
 * the element
 * @param options.isEnabled - Whether to call `handler`
 * @param options.ref - Ref attached to the element
 *
 * @public
 *
 */

const useOnClickOutside = ({
  handler,
  isEnabled,
  ref,
}: {
  handler: (options: { event: MouseEvent }) => void;
  isEnabled: boolean;
  ref: RefObject<HTMLElement | null>;
}) => {
  useEffect(() => {
    const listener = (event: MouseEvent) => {
      if (!isEnabled) {
        return;
      }

      // Do nothing if clicking ref's element or descendent elements
      if (
        !ref.current ||
        !(event.target instanceof Node) ||
        ref.current.contains(event.target)
      ) {
        return;
      }

      // Otherwise call handler
      handler({ event });
    };

    document.addEventListener("mousedown", listener);

    return () => {
      document.removeEventListener("mousedown", listener);
    };
  }, [handler, isEnabled, ref]);
};

export default useOnClickOutside;
