import styles from './styles.module.css';
import {tutorials} from "../../data";
import {Button, TutorialCard} from "../Shared";
import React from "react";
import {useRouter} from "next/router";


const SuggestedTutorials = ({ header }: { header: string }) => {
	const { push } = useRouter();


	return (
		<section className={`container ${styles["tutorials-container"]}`}>
			<h3 className="mb-10">{header}</h3>
			<div className="grid md:grid-cols-3 gap-10">
				{tutorials.map(({ title, author, duration, image, tags, date}, i) => (
					<TutorialCard key={i} title={title} author={author} duration={duration} image={image} date={date} tags={tags} />
				))}
			</div>
			<div className="py-12">
				<Button
					className="px-10 mx-auto md:mt-8"
					onClick={() => push("#")}
				>
					<span>Browse all tutorials</span>
				</Button>
			</div>
		</section>
	);
};

export { SuggestedTutorials };
