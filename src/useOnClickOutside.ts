import { RefObject, useEffect } from "react";

/**
 * Detect clicks outside of specific component
 * This code is a slightly modified version of this: https://usehooks.com/useOnClickOutside/
 *
 * @public
 *
 */

const useOnClickOutside = ({
  handler,
  isEnabled,
  ref,
}: {
  handler: CallableFunction;
  isEnabled: boolean;
  ref: RefObject<HTMLElement>;
}) => {
  useEffect(() => {
    const listener = (event: MouseEvent | TouchEvent) => {
      if (!isEnabled) {
        return;
      }

      // Do nothing if clicking ref's element or descendent elements
      if (
        !ref.current ||
        !(event.target instanceof Node) ||
        ref.current?.contains(event.target)
      ) {
        return;
      }

      // Otherwise close the modal
      handler({ event });
    };

    document.addEventListener("mousedown", listener);

    return () => {
      document.removeEventListener("mousedown", listener);
    };
  }, [handler, isEnabled, ref]);
};

export default useOnClickOutside;
