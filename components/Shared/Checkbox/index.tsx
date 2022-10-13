import React from "react";
import styles from "./styles.module.css";
import { FormikProps } from "formik";

type InputType = {
  checked?: boolean;
  type?: string;
  onClick?: () => void;
  onChange?: () => void;
  label?: string;
  className?: string;
  id?: string;
  name: string;
  formik?: FormikProps<any>;
  placeholder?: string | "";
};

function Checkbox({
  type,
  onClick,
  onChange,
  label,
  className,
  id,
  name,
  formik,
  checked,
  ...rest
}: InputType) {

  return (
    <label className={styles["container"]}>
      <input type="checkbox" checked={checked} onClick={onClick} onChange={onChange} {...rest} />
      <span className={styles["checkmark"]}></span>
      {label}
    </label>
  );
}

export { Checkbox };
