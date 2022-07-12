import type { NextPage } from 'next';
import Head from 'next/head';
import styles from './index.module.css';
import {AppLayout, Button, Image, Input, Tag, TechCard} from "../components";
import {ArrowCircleRight, Banner, Community, Identity, P2p, Screenshot, Screenshot2, Zkp} from "../assets";
import {tutorials, events} from "../data";
import React, {useEffect, useState} from "react";
import {useRouter} from "next/router";
import {UpcomingEvents} from "../components/UpcomingEvents";
import {SuggestedTutorials} from "../components/SuggestedTutorials";


const Home: NextPage = () => {
	//state management
	const [activeTechCard, setActiveTechCard] = useState(0);

	const { push } = useRouter();

	let toggle: any = null;

	//constants
	const technologies = [
		{
			title: "Peer-to-Peer technology",
			icon: <P2p />,
			desc: "Learn about the tool of the art of, \n" +
				"This is a junk content and will be replaced",
			image: Screenshot
		},
		{
			title: "Decentralized Identity",
			icon: <Identity />,
			desc: "Learn about the tool of the art of, \n" +
				"This is a junk content and will be replaced",
			image: Screenshot2
		},
		{
			title: "Zero-knowledge proof",
			icon: <Zkp />,
			desc: "Learn about the tool of the art of, \n" +
				"This is a junk content and will be replaced",
			image: Screenshot
		},
	]

	//Handler
	function handleTechsToggle () {
		// clearInterval(toggle);
		let nextCard = activeTechCard + 1;
		if(nextCard > technologies.length - 1) {
			nextCard = 0;
		}
		toggle = setTimeout(()=>setActiveTechCard(nextCard), 2000)
		;
	}
	
	const handleToggle = (cardIndex: number) => {
		setActiveTechCard(cardIndex);
		clearTimeout(toggle);
	}

	useEffect(()=>{
		handleTechsToggle();
	}, [activeTechCard])


	return (
		<AppLayout>
			<div className={styles["container"]}>
				<Head>
					<title>Sonr Learn | Home</title>
				</Head>
				<section className={`${styles["banner"]} container md:px-16 lg:px-28 flex flex-col md:flex-row justify-center`}>
					<div className="md:mt-28">
						<div className="flex flex-wrap gap-3 w-full">
							<Tag text="Learn" color="primary" />
							<Tag text="Build" color="tertiary" />
							<Tag text="Share" color="secondary" />
							<Tag text="Earn" color="secondary" />
						</div>
						<h1 className="my-5">Learn how to build in
							a true Decentralized
							Web</h1>
						<p>Learn to build for many use cases in the user controlled internet in one place.</p>

						<div className={styles["subscribe"]}>
							<form className="flex flex-col md:flex-row mt-auto md:mt-8">
								<div className={styles["subscribe-input"]}>
									<Input
										name="email"
										placeholder="Email Address"
										className={`md:mr-3 mb-5 md:mb-0`}
									/>
								</div>
								<Button
									type="submit"
									text="Subscribe"
								/>
							</form>
							<p className="mt-5">Subscribe to get our certification course emailed to you daily</p>
						</div>
					</div>
					<div className="">
						<Image
							height={545.28}
							width={629.82}
							src={Banner}
							alt="banner"
							className={styles.banner}
							priority={true}
						/>
					</div>
				</section>

				<section className="my-10 md:my-20 py-10 md:py-20 md:pb-5 bg-blue-100">
					<div className={`${styles["tutorials-sample-container"]} container pb-12`}>
						<div className={`${styles["tutorials-sample"]} container pl-0 pr-0 flex flex-col xl:flex-row`}>
							<div>
								<h3 className="mb-10">Learn about the different tools and technologies in the Sonr Ecosystem</h3>

								<div className={`${styles["tutorials-sample-control"]} flex flex-wrap xl:flex-col mb-10 xl:mb-0`}>
									{technologies.map(({ title, desc, icon}, i) => (
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

				{/*<section className={`container my-10 md:my-20 ${styles["programs-container"]}`}>*/}
				{/*	<h3 className="mb-10 text-center">Featured Programs</h3>*/}
				{/*</section>*/}

				<SuggestedTutorials header="All things Decentralization, Building in an IBC enabled chain, and the future of the web." />

				<section className={`container ${styles["community-container"]}`}>
					<h3 className="my-8 md:my-10">Participate in our community bounty programs</h3>
					<div className={`${styles["community-container-scroll"]} flex gap-10 bg-blue-700 p-5 md:p-10`}>
						{
							[1,2,3,4,5,6,7,8,9].map((community, i)=>(
								<div
									key={i}
									className={styles["image-container"]}
								>
									<Image
										height={290}
										width={408}
										src={Community}
										alt="community"
										className={""}
										priority={true}
									/>
								</div>
							))
						}
					</div>
					<div className="flex justify-end pt-10">
						<span className={styles["arrow-container"]}>
							<ArrowCircleRight />
						</span>
						<span className={`ml-20 ${styles["arrow-container"]}`}>
							<ArrowCircleRight />
						</span>
					</div>
				</section>

				<hr className="container md:px-16 lg:px-28 my-10 md:my-20" />

				<UpcomingEvents />
			</div >
		</AppLayout>
	);
};

export default Home;
