import React from "react";
import {
	FacebookIcon,
	Logo,
	InstagramIcon,
	TwitterIcon, BannerIcon,
} from "../../assets";

import styles from "./styles.module.css";
import {Button, Input} from "../Shared";

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
							<Logo />
						</div>
						<div className="col-span-1">
							<h6>Learning</h6>
							<ul>
								<li>Tutorials</li>
								<li>Missions (Certification courses)</li>
								<li>Demo</li>
								<li>Challenge Projects</li>
							</ul>
						</div>
						<div className="col-span-1">
							<h6>Programs</h6>
							<ul>
								<li>Hackathons</li>
								<li>Community events</li>
								<li>Developer ranking</li>
								<li>Outreach programs</li>
							</ul>
						</div>
						<div className="col-span-1">
							<h6>Community</h6>
							<ul>
								<li>Discord</li>
								<li>Twitter</li>
								<li>Instagram</li>
								<li>YouTube</li>
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
