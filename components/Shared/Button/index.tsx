/** @format */

import React from "react";
import styles from "./styles.module.css";

interface Props {
  children?: React.ReactNode;
  onClick?: () => void;
  className?: string | "";
  type?: "button" | "submit" | "reset";
  text?: string | "";
  variant?: "contained" | "outlined" | "light";
  buttonStyle?: "rounded" | "curved";
  disabled?: boolean;
}

const Button: React.FC<Props> = ({
  children,
  onClick,
  className,
  type,
  text,
  variant = "contained",
  buttonStyle = "curved",
  disabled = false,
  ...rest
}) => {
  let containerClass = styles.container;
  if (className) containerClass += ` ${className}`;
  containerClass += ` py-3 px-6 ${styles[buttonStyle]} ${styles[variant]}`;


  return (
    <button type={type} onClick={onClick} className={containerClass} disabled={disabled} {...rest}>
      <span>{text || children}</span>
    </button>
  );
};

export { Button };
