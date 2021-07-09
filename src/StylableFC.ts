import { FunctionComponent } from "react";

/**
 * React FunctionComponent that takes an optional className prop.
 *
 * @remarks
 * The className prop is used for styling the component instance’s top-level
 * element (which should have `className={className}`) from the outside.
 *
 * @public
 */
type StylableFC<P = {}> = FunctionComponent<P & { className?: string }>;

export default StylableFC;
