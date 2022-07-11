/** @format */

import React from "react";
import styles from "./styles.module.css";
import {Image} from "../Image";
import {Button} from "../Button";
import {useRouter} from "next/router";

interface Props {
  title: string;
  desc: string;
  time: string;
  image: any;
  date: string;
  url?: string;
}


const EventCard: React.FC<Props> = ({ title, desc, time, image, date, url = "#" }) => {
    const { push } = useRouter();


  return (
      <div className={`${styles["container"]} flex flex-col mx-auto`}>
        <div>
          <Image src={image} width={357} height={268.78} />
        </div>
        <div className="flex-grow flex flex-col p-5 md:px-10 md:py-6">
          <h4>{title}</h4>
          <span className="mt-1">{desc}</span>
          <div className={`${styles["description"]} mt-5 flex items-center`}>
            <span className="flex items-center">
                {date}
            </span>
              <span className="ml-auto">{time}</span>
          </div>
            <Button
                className="px-10 mx-auto mt-auto ma:mt-8"
                onClick={() => push(url)}
            >
                <span>Register for this event</span>
            </Button>
      </div>
    </div>
  );
};

export { EventCard };
