/** @format */

import React from "react";
import styles from "./styles.module.css";


const Tag: React.FC<{ text: string, color: "primary" | "secondary" | "tertiary" | "green", size?: "small" | "medium" }> = ({ text, color = "primary", size = "small" }) => {
  return (
      <div
          className={`${styles["container"]} ${styles[color]} ${styles[size]}`}
      >
          {text}
    </div>
  );
};

export { Tag };
