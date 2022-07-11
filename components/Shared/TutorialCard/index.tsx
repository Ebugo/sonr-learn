/** @format */

import React from "react";
import styles from "./styles.module.css";
import {Image} from "../Image";
import {useRouter} from "next/router";

interface Props {
  title: string;
  author: string;
  duration: string;
  image: any;
  date: string;
  tags: string[];
}


const TutorialCard: React.FC<Props> = ({ title, author, duration, image, tags, date }) => {
    const { push } = useRouter();


  return (
      <div
          className={`${styles["container"]} flex flex-col mx-auto`}
        onClick={()=>push("/tutorials/1")}
      >
        <div>
          <Image src={image} width={397} height={282.53} />
        </div>
        <div className="flex-grow flex flex-col p-5 lg:px-8 xl:px-10 md:py-6">
          <h4>{title}</h4>
          <span className="mt-5">{duration} Read</span>
          <div className={`${styles["description"]} mt-auto flex items-center`}>
            <span className="flex items-center">
                <span className={`${styles["avatar"]} mr-3`}>
                    {author && typeof author === "string" ? author.split(" ").map(a=>a[0]).join("") : ""}
                </span>
                {author}
            </span>
              <span className="ml-auto">{date}</span>
          </div>
      </div>
    </div>
  );
};

export { TutorialCard };
