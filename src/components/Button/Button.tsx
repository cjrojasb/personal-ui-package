import React from "react";

interface ButtonProps {
  children: React.ReactNode;
}

function Button({ children }: ButtonProps) {
  return <button className="bg-sky-400 text-lg w-full">{children}</button>;
}

export default Button;
