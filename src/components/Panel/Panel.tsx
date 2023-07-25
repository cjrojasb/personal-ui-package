import classNames from "classnames";
import { ComponentPropsWithoutRef } from "react";

export interface PanelProps extends ComponentPropsWithoutRef<"div"> {
  className: string;
  children: React.ReactNode;
}

function Panel({ children, className, ...rest }: PanelProps) {
  const finalClassNames = classNames(
    "border rounded p-3 shadow bg-white w-full",
    className
  );

  return (
    <div {...rest} className={finalClassNames}>
      {children}
    </div>
  );
}

export default Panel;
