import classNames from "classnames";
import { ComponentPropsWithoutRef } from "react";

const BUTTON_VARIATIONS = {
  primary: "bg-blue-600 border-blue-600",
  secondary: "bg-gray-600 border-gray-600",
  info: "bg-sky-600 border-sky-600",
  success: "bg-green-600 border-green-600",
  warning: "bg-yellow-600 border-yellow-600",
  danger: "bg-red-600 border-red-600",
};

export interface IconButtonProps extends ComponentPropsWithoutRef<"button"> {
  outlined?: boolean;
  variation: VariationType;
  children: React.ReactNode;
}

export type VariationType =
  | "primary"
  | "secondary"
  | "info"
  | "success"
  | "warning"
  | "danger";

function IconButton({
  outlined,
  variation,
  children,
  ...rest
}: IconButtonProps) {
  const customClass = classNames(rest.className, "rounded-full bg-transparent");

  return (
    <button {...rest} className={customClass}>
      {children}
    </button>
  );
}

export default IconButton;
