/** @format */

import React, {useState} from "react";
import styles from "./styles.module.css";
import {Image} from "../Image";
import {Button} from "../Button";
import {useRouter} from "next/router";

interface Props {
  title: string;
  desc: string;
  icon: any;
  id: number;
  activeTechCard: number;
  handleClick: (cardIndex: number) => void;
}


const TechCard: React.FC<Props> = ({ title, desc, icon, id, activeTechCard,  handleClick }) => {
    return (
      <div className="my-2">
        <div
            className={`${styles["container"]} ${activeTechCard === id ? styles["active"] : ""} flex`}
            onClick={()=>handleClick(id)}
        >
          <div></div>
          <div className="pt-5 pr-0 md:pl-5">
            {icon}
          </div>
          <div className="flex-grow flex flex-col p-5">
            <h4>{title}</h4>
            <span className="mt-1">{desc}</span>
          </div>
        </div>
      </div>
  );
};

export { TechCard };
