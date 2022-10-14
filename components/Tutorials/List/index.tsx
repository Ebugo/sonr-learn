import React from "react";
import { useRouter } from "next/router";
import Head from 'next/head';
import styles from './styles.module.css';
import { Button, Image, TutorialCard, EventCard, Tag } from "../../";
import { ArrowCircleRight, BannerIcon, Star } from "../../../assets";
import { UpcomingEvents } from "../../UpcomingEvents";
import { SuggestedTutorials } from "../../SuggestedTutorials";
import { Lesson, LessonProps, LessonTrackMap } from "../../../types";


// Handler functions
export const getAuthors = (authors: string[] | string): string => {
	let authorsList = "";

	if (Array.isArray(authors)) {
		authorsList = authors.reduce((a, b) => a + ", " + b);
	} else {
		authorsList = authors;
	}

	return authorsList;
};

export const getAuthorInitials = (authors: string[] | string) => {
	const authorsList = getAuthors(authors);
	return authorsList && typeof authorsList === "string" ? authorsList.split(",").map(a => a[0]).join("") : "";
};


const TutorialsList: React.FC<LessonProps> = ({ lessons }) => {
	const { push } = useRouter();
	const latestTutorial: Lesson = lessons[0];
	const colors = ["primary", "secondary", "tertiary", "green"];


	return (
		<div className={styles["container"]}>
			<Head>
				<title>Sonr Learn | Home</title>
			</Head>
			<section className={`${styles["banner"]} flex relative p-5 md:p-10 xl:p-16 overflow-hidden`}>
				<div className="md:w-4/6">
					<h1>Welcome to a community oriented educational content for
						Developers in the Sonr Ecosystem</h1>
					<Button className="mt-20 md:mt-10">
						<span className="flex items-center">
							<Star />
							<span className="ml-2">Introduction to Decentralization</span>
						</span>
					</Button>
				</div>
				<div className="absolute">
					<BannerIcon />
				</div>
			</section>
			<section className="">
				<h3 className="py-8">Latest Tutorial</h3>
				<div className={`${styles["latest-tutorial"]} flex flex-col md:flex-row`}>
					<div className={styles["thumbnail"]}>
						<Image alt="thumbnail" src={latestTutorial?.frontMatter?.thumb || '/assets/lessons/thumbnail.png'} width={555} height={417} />
					</div>
					<div className="flex-grow flex flex-col md:flex-row p-5 xl:p-16">
						<div className="xl:pr-16 md:w-3/4 flex flex-col">
							{Array.isArray(latestTutorial?.frontMatter?.tags) && latestTutorial?.frontMatter?.tags.length > 0 && (
								<div className="flex flex-wrap gap-3 w-full mb-2">
									{latestTutorial?.frontMatter?.tags?.map((tag: string, i: number) => (
										<Tag key={i} text={tag} color={colors[Math.floor(Math.random() * 3)]} />
									))}
								</div>
							)}

							<h3>{latestTutorial?.frontMatter?.title}</h3>
							<span className={`mt-5 ${styles["sub-text"]}`}>5mins Read</span>
							<div className={`${styles["description"]} mt-auto flex items-center`}>
								<span className="flex items-center">
									{/* <span className={`${styles["avatar"]} mr-3`}>{getAuthorInitials(latestTutorial?.frontMatter?.authors)}</span> */}
									{getAuthors(latestTutorial?.frontMatter?.authors)}
								</span>
								{latestTutorial?.frontMatter?.date && <span className="ml-auto">{latestTutorial?.frontMatter?.date || ''}</span>}
							</div>
						</div>
						<div onClick={() => push('/tutorials/' + latestTutorial?.slug)} className="flex flex-col items-center justify-center ml-auto cursor-pointer">
							<span className={styles["arrow-container"]}>
								<ArrowCircleRight />
							</span>
							<strong className="text-blue-500 font-thicccboi-bold cursor-pointer">Read</strong>
						</div>
					</div>
				</div>
			</section>
			<hr className="my-10 md:my-20" />

			<SuggestedTutorials
				header="Best contents curated for you, dive in to learning about the decentralized web today."
				lessons={lessons}
			/>

			<div className="py-6"></div>

			<UpcomingEvents />
		</div >
	);
};

export { TutorialsList };
