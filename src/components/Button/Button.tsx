import React from "react";

interface ButtonProps {
  children: React.ReactNode;
}

function Button({ children }: ButtonProps) {
  return <button style={{ background: "blue" }}>{children}</button>;
}

export default Button;
