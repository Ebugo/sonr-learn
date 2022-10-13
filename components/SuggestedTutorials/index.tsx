import styles from './styles.module.css';
import { TutorialCard } from "../Shared";
import React from "react";
import { Lesson } from '../../types';


const SuggestedTutorials = ({ header, lessons }: { header: string, lessons: Lesson[] }) => {
	return (
		<section className={`container ${styles["tutorials-container"]}`}>
			<h3 className="mb-10">{header}</h3>
			<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
				{lessons.map(({ frontMatter: { title, authors, duration, icons, thumb, tags, date }, path, slug }, i: number) => (
					<TutorialCard key={i} title={title} authors={authors} duration={duration} image={thumb} date={date} tags={tags} slug={slug} />
				))}
			</div>
		</section>
	);
};

export { SuggestedTutorials };
