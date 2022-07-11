import styles from './styles.module.css';
import {Button, TutorialCard} from "../../Shared";
import React from "react";
import {tutorials} from "../../../data";
import {useRouter} from "next/router";


const TutorialsList = () => {
	const { push } = useRouter();


	return (
		<div className={styles["container"]}>
			<section className={styles["tutorials-container"]}>
				<h3 className="mb-10 md:mb-20">Best contents curated for you, dive in to learning about the decentralized web today.</h3>
				<div className="grid md:grid-cols-3 gap-10">
					{tutorials.map(({ title, author, duration, image, tags, date}, i) => (
						<TutorialCard key={i} title={title} author={author} duration={duration} image={image} date={date} tags={tags} />
					))}
				</div>
				<div className="py-12">
					<Button
						className="px-10 mx-auto mt-8"
						onClick={() => push("#")}
					>
						<span>Show more tutorials</span>
					</Button>
				</div>
			</section>
		</div>
	);
};

export {TutorialsList};
