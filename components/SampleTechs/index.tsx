import styles from './styles.module.css';
import { Button, Image, TechCard } from "../Shared";
import React, { useEffect, useState } from "react";
import { technologies } from '../../pages';
import { Screenshot } from '../../assets';
import { useRouter } from 'next/router';


const SampleTechs = () => {
	//state management
	const [activeTechCard, setActiveTechCard] = useState(0);

	const { push } = useRouter();

	let toggle: any = null;

	//Handler
	function handleTechsToggle() {
		// clearInterval(toggle);
		let nextCard = activeTechCard + 1;
		if (nextCard > technologies.length - 1) {
			nextCard = 0;
		}
		toggle = setTimeout(() => setActiveTechCard(nextCard), 2000)
			;
	}

	const handleToggle = (cardIndex: number) => {
		setActiveTechCard(cardIndex);
		clearTimeout(toggle);
	}

	useEffect(() => {
		handleTechsToggle();
	}, [activeTechCard])


	return (
		<section className="my-10 md:my-20 py-10 md:py-20 md:pb-5 bg-blue-100">
			<div className={`${styles["tutorials-sample-container"]} container pb-12`}>
				<div className={`${styles["tutorials-sample"]} container pl-0 pr-0 flex flex-col xl:flex-row`}>
					<div>
						<h3 className="mb-10">Learn about the different tools and technologies in the Sonr Ecosystem</h3>

						<div className={`${styles["tutorials-sample-control"]} flex flex-wrap xl:flex-col mb-10 xl:mb-0`}>
							{technologies.map(({ title, desc, icon }, i) => (
								<TechCard
									id={i}
									key={i}
									title={title}
									desc={desc}
									icon={icon}
									activeTechCard={activeTechCard}
									handleClick={handleToggle}
								/>
							))}
						</div>
					</div>
					<div className="hidden md:block">
						<Image
							height={651}
							width={978}
							src={technologies[activeTechCard]?.image || Screenshot}
							alt="tutorials"
							className={""}
							priority={true}
						/>
					</div>
				</div>
			</div>
			<div className="pb-12">
				<Button
					className="px-5 mx-auto"
					onClick={() => push("#")}
				>
					<span>Start tutorials</span>
				</Button>
			</div>
		</section>
	);
};

export { SampleTechs };
