import type { NextPage } from 'next';
import Head from 'next/head';
import { AppLayout } from '../components';
import styles from './index.module.css';
import {Button, Image, TutorialCard} from "../components/Shared";
import {ArrowCircleRight, Banner, Consensus, Star} from "../assets";
import {tutorials, events} from "../data";
import {EventCard} from "../components/Shared/EventCard";
import React from "react";
import {useRouter} from "next/router";
import {Tag} from "../components/Shared/Tag";


const Home: NextPage = () => {
	const { push } = useRouter();


	return (
		<AppLayout>
			<div className={styles["container"]}>
				<Head>
					<title>Sonr Learn | Home</title>
				</Head>
				<section className={`${styles["banner"]} flex relative p-5 md:p-10 xl:p-16 overflow-hidden`}>
					<div className="md:w-4/6">
						<h1>Welcome to a community oriented educational content for
							Developers in the Sonr Ecosystem</h1>
						<Button className="mt-10">
							<span className="flex items-center">
								<Star />
								<span className="ml-2">Introduction to Decentralization</span>
							</span>
						</Button>
					</div>
					<div className="absolute">
						<Banner />
					</div>
				</section>
				<section className="">
					<h3 className="py-8">Latest Tutorial</h3>
					<div className={`${styles["latest-tutorial"]} flex flex-col md:flex-row`}>
						<div>
							<Image src={Consensus} width={555} height={417} />
						</div>
						<div className="flex-grow flex flex-col md:flex-row p-5 xl:p-16">
							<div className="xl:pr-16 md:w-3/4 flex flex-col">
								<div className="flex flex-wrap gap-3 w-full mb-2">
									<Tag text="Consensus Mechanism" color="primary" />
									<Tag text="Blockchain" color="secondary" />
									<Tag text="Tutorial" color="tertiary" />
								</div>
								<h3>Building a consensus algorithm on Sonr blockchain</h3>
                                <span className={`mt-5 ${styles["sub-text"]}`}>5mins Read</span>
								<div className={`${styles["description"]} mt-auto flex items-center`}>
									<span className="flex items-center">
										<span className={`${styles["avatar"]} mr-3`}>IP</span>
										Ian Perez
									</span>
									<span className="ml-auto">28th June, 2022</span>
								</div>
							</div>
							<div className="flex flex-col items-center justify-center ml-auto">
								<span className={styles["arrow-container"]}>
									<ArrowCircleRight />
								</span>
                                <strong className="text-blue-500 font-thicccboi-bold cursor-pointer">Read</strong>
							</div>
						</div>
					</div>
				</section>
				<hr className="my-10 md:my-20" />
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
				<section className={styles["events-container"]}>
					<h3 className="my-8 md:my-10">Upcoming events</h3>
					<div className="grid md:grid-cols-3 gap-10 items-center">
						{events.map(({ title, desc, image, time, date}, i) => (
							<EventCard key={i} title={title} desc={desc} time={time} image={image} date={date} />
						))}
					</div>
				</section>
			</div >
		</AppLayout>
	);
};

export default Home;
