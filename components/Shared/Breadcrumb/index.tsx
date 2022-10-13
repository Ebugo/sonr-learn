/** @format */

import React from "react";
import styles from "./styles.module.css";
import {ArrowDown} from "../../../assets";


const Breadcrumb: React.FC<{ previous: string, current: string }> = ({ previous, current }) => {
  return (
      <div className={`${styles["container"]} mr-auto flex items-center`}>
          <span className="text-grey-100">{previous}</span>
          <span className="mx-2"><ArrowDown/></span>
          <span className="text-blue-500">{current}</span>
      </div>
  );
};

export { Breadcrumb };
