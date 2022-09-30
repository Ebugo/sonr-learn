import styles from './styles.module.css';
import { tutorials } from "../../data";
import { Button, TutorialCard } from "../Shared";
import React from "react";
import { useRouter } from "next/router";
import { Lesson } from '../../types';


const SuggestedTutorials = ({ header, tutorials: tracks }: { header: string, tutorials: [string, Lesson[]][] }) => {
	const { push } = useRouter();


	return (
		<section className={`container ${styles["tutorials-container"]}`}>
			<h3 className="mb-10">{header}</h3>
			<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
				{tracks.map((track, idx: number) => {
					const trackName = track[0].toUpperCase()
					const lessons = track[1];
					return (
						<div>
							{trackName}

							{tutorials.map(({ title, author, duration, image, tags, date }, i) => (
								<TutorialCard key={i} title={title} author={author} duration={duration} image={image} date={date} tags={tags} slug={"wallets"} />
							))}
						</div>
					)
				}
				)}
			</div>
			<div className="py-12">
				<Button
					className="px-10 mx-auto md:mt-8"
					onClick={() => push("/tutorials")}
				>
					<span>Browse all tutorials</span>
				</Button>
			</div>
		</section>
	);
};

export { SuggestedTutorials };
