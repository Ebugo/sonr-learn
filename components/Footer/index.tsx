import React from "react";
import {Logo, LogoImg} from "../../assets";

import styles from "./styles.module.css";
import {Button, Image, Input} from "../Shared";
import Link from "next/dist/client/link";

const Footer = () => {
	return (
		<div className={`container ${styles.container}`}>
			<section className="md:container mt-10 md:mt-24 ">
				<div className={`${styles["subscribe"]} flex relative p-5 py-10 xl:p-16`}>
					<div className="md:w-4/6 flex flex-col">
						<h4>Subscribe to our newsletter to get updates from the Sonr Learn Ecosystem</h4>
						<form className="flex flex-col md:flex-row items-center mt-auto md:mt-8">
							<Input
								name="email"
								placeholder="Email Address"
								className={`md:mr-8 mb-5 md:mb-0 ${styles["subscribe-input"]}`}
							/>
							<Button
								type="submit"
								text="Subscribe"
							/>
						</form>
					</div>
				</div>
			</section>
			<hr className="my-10 md:my-16" />
			<footer className={`pb-3`}>
				<div className="">
					<div className="grid grid-cols-2 md:grid-cols-4 gap-10">
						<div className={`${styles["logo-container"]} col-span-2 md:col-span-1`}>
							<Image src={LogoImg} width={165} height={40} alt="Sonr" />
						</div>
						<div className="col-span-1">
							<h6>Learning</h6>
							<ul>
								<li><Link href="/tutorials">Tutorials</Link></li>
								<li><Link href="/programs">
									<span className="cursor-pointer">Missions <small>(Certification courses)</small></span>
								</Link></li>
								<li><Link href="/#">Demo</Link></li>
								<li><Link href="/programs">Challenge Projects</Link></li>
							</ul>
						</div>
						<div className="col-span-1">
							<h6>Programs</h6>
							<ul>
								<li><Link href="/programs">Hackathons</Link></li>
								<li><Link scroll={true} href="/#upcoming-events">Community events</Link></li>
								<li className="text-grey-100 flex items-center">
									<span className="mr-2">Developer ranking</span>
									<small className="coming-soon">Coming soon</small>
								</li>
								<li><Link href="/programs">Outreach programs</Link></li>
							</ul>
						</div>
						<div className="col-span-1">
							<h6>Community</h6>
							<ul>
								<li><a href="https://discord.gg/5hhXnNaV" target="_blank" rel="noreferrer">
									Discord
								</a></li>
								<li><a href="https://twitter.com/sonr_io" target="_blank" rel="noreferrer">
									Twitter
								</a></li>
								<li><a href="https://www.instagram.com/sonr.snr/" target="_blank" rel="noreferrer">
									Instagram
								</a></li>
								<li><a href="https://www.youtube.com/channel/UCLlBW-dsTGSS8vRlb66fh4g" target="_blank" rel="noreferrer">
									YouTube
								</a></li>
							</ul>
						</div>
					</div>
				</div>
				<div className="text-center py-10 md:pt-28">
					© {new Date().getUTCFullYear()} Sonr Learn, All rights reserved.
				</div>
			</footer>
		</div>
	);
};

export { Footer };
