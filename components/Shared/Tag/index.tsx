/** @format */

import React from "react";
import styles from "./styles.module.css";


const Tag: React.FC<{ text: string, color: "primary" | "secondary" | "tertiary" }> = ({ text, color = "primary" }) => {
  return (
      <div
          className={`${styles["container"]} ${styles[color]} py-2 px-3`}
      >
          {text}
    </div>
  );
};

export { Tag };
