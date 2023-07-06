import { BUTTON_VARIATIONS } from "constants/buttons";
import classNames from "classnames";

import { ComponentPropsWithoutRef } from "react";

export interface ButtonProps extends ComponentPropsWithoutRef<"button"> {
  rounded?: boolean;
  outlined?: boolean;
  variation: VariationType;
  fullWidth?: boolean;
  children: React.ReactNode;
}

export type VariationType =
  | "primary"
  | "secondary"
  | "info"
  | "success"
  | "warning"
  | "danger";

function Button({
  rounded,
  outlined,
  variation,
  fullWidth,
  children,
  ...rest
}: ButtonProps) {
  const customClass = classNames(
    rest.className,
    "px-3 py-1.5 border flex items-center",
    BUTTON_VARIATIONS[variation],
    {
      "w-full": fullWidth,
      "rounded-full": rounded,
      "bg-white": outlined,
      "text-white": !outlined,
      "text-blue-500": outlined && variation === "primary",
      "text-gray-500": outlined && variation === "secondary",
      "text-sky-500": outlined && variation === "info",
      "text-green-500": outlined && variation === "success",
      "text-yellow-500": outlined && variation === "warning",
      "text-red-500": outlined && variation === "danger",
    }
  );

  return (
    <button {...rest} className={customClass}>
      {children}
    </button>
  );
}

export default Button;
