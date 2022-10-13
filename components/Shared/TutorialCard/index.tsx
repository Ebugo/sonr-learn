/** @format */

import React from "react";
import styles from "./styles.module.css";
import { Image } from "../Image";
import { useRouter } from "next/router";
import { Tag } from "../Tag";
import { getAuthorInitials, getAuthors } from "../../Tutorials";

interface Props {
  title: string;
  authors: string;
  duration: string;
  image: any;
  date: string;
  slug: string;
  tags: string[];
}

const TutorialCard: React.FC<Props> = ({ title, authors, duration, image, tags, date, slug }) => {
  const { push } = useRouter();
  const colors = ["primary", "secondary", "tertiary", "green"];


  return (
    <div
      className={`${styles["container"]} flex flex-col mx-auto`}
      onClick={() => push(`/tutorials/${slug}`)}
    >
      <div className={styles["thumbnail"]}>
        <Image alt="thumbnail" src={image || '/assets/lessons/thumbnail.png'} width={397} height={282.53} />
      </div>
      <div className="flex-grow flex flex-col p-5 xl:px-8 md:py-6">
        {Array.isArray(tags) && tags.length > 0 && (
          <div className="flex flex-wrap gap-3 w-full mb-2">
            {tags?.map((tag: string, i: number) => (
              <Tag key={i} text={tag} color={colors[Math.floor(Math.random() * 3)]} />
            ))}
          </div>
        )}
        <h4>{title}</h4>
        <span className="mt-5">{duration || "5 mins"} Read</span>
        <div className={`${styles["description"]} mt-auto flex flex-wrap items-center gap-2`}>
          <span className="flex items-center mr-auto">
            <span className={`${styles["avatar"]} mr-1`}>
              {getAuthorInitials(authors)}
            </span>
            {getAuthors(authors)}
          </span>
          <span className="">{date}</span>
        </div>
      </div>
    </div>
  );
};

export { TutorialCard };
