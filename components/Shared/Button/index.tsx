/** @format */

import React from "react";
import styles from "./styles.module.css";

interface Props {
  children?: React.ReactNode;
  onClick?: () => void;
  className?: string | "";
  type?: "button" | "submit" | "reset";
  text?: string | "";
  variant?: "contained" | "outlined";
  buttonStyle?: "rounded" | "curved";
}

const Button: React.FC<Props> = ({
  children,
  onClick,
  className,
  type,
  text,
  variant = "contained",
  buttonStyle = "curved",
  ...rest
}) => {
  let containerClass = styles.container;
  containerClass += ` py-3 px-6 ${styles[buttonStyle]} ${styles[variant]}`;
  if (className) containerClass += ` ${className}`;


  return (
    <button type={type} onClick={onClick} className={containerClass} {...rest}>
      <span>{text || children}</span>
    </button>
  );
};

export { Button };
