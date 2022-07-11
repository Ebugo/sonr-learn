import React from "react";
import styles from "./styles.module.css";

type InputType = {
  type?: string;
  onClick?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  label?: string;
  className?: string;
  id?: string;
  name: string;
  value: string;
  checked?: boolean;
  defaultChecked?: boolean;
  placeholder?: string | "";
};

function Radio({
  type,
  onClick,
  onChange,
  label,
  className,
  id,
  name,
  value,
  checked,
  defaultChecked,
  ...rest
}: InputType) {

  return (
    <label className={styles["container"]}>
      <input
        type="radio"
        name={name}
        id={id}
        value={value}
        checked={checked}
        onChange={onChange}
        {...rest}
      />
      <span className={styles["checkmark"]}></span>
      {label}
    </label>
  );
}

export { Radio };
