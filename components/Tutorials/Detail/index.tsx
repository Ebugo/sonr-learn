{/* eslint-disable @next/next/no-html-link-for-pages */}

import styles from './styles.module.css';
import {Image} from "../../Shared";
import {CodeBlock, LinkIcon, Rating, TutorialAccess} from "../../../assets";
import React from "react";
import {Tag} from "../../Shared/Tag";


const TutorialsDetail = () => {
	return (
		<div className={styles["container"]}>
			<section className="pt-4">
				<div className="flex flex-wrap gap-3 w-full mb-2">
					<Tag text="Consensus Mechanism" color="primary" />
					<Tag text="Blockchain" color="secondary" />
					<Tag text="Tutorial" color="tertiary" />
				</div>
				<h1 className="pb-4">Access and Authentication</h1>
				<span className={`${styles["sub-text"]}`}>5mins Read</span>
				<div className={`${styles["description"]} mt-6 mb-3 flex items-center`}>
					<span className="flex items-center pr-5">
						<span className={`${styles["avatar"]} mr-3`}>IP</span>
						Ian Perez
					</span>
					<span className="ml-5">28th June, 2022</span>
				</div>
				<div className="">
					<div className={styles["image-container"]}>
						<Image src={TutorialAccess} width={912} height={413} />
					</div>

					<h2 id="initial" className="mt-10 mb-5">Initial Setup</h2>
					<h6>Sign up to sonr beam</h6>
					<p>We think authentication should be simple, yet secure. The Sonr network uses Webauthn a key-based authentication system utilizing credential systems found on the user operating system to perform key exchanges with our Highway Nodes which then grants you access to the network. The following is a diagram outlining our authentication and registration flows.</p>
					<p>Currently, our implementations of Webauthn use the &lsquo;platform-specific&rsquo; credential options meaning our servers will request your operating system to use whichever authentication method is most native to it. For information on what authentication mechanisims are supported</p>

					{/* Code block	*/}
					<div className={styles["image-container"]}>
						<Image src={CodeBlock} width={954} height={1020} />
					</div>

					<h2 id="run" className="mt-10 mb-5">Running a Hello World testnet</h2>
					<h6>Sign up to sonr beam</h6>
					<p>We think authentication should be simple, yet secure. The Sonr network uses Webauthn a key-based authentication system utilizing credential systems found on the user operating system to perform key exchanges with our Highway Nodes which then grants you access to the network. The following is a diagram outlining our authentication and registration flows.</p>
					<p>Currently, our implementations of Webauthn use the &lsquo;platform-specific&rsquo; credential options meaning our servers will request your operating system to use whichever authentication method is most native to it. For information on what authentication mechanisims are supported</p>

					<div className={`${styles["highlight-text"]} p-5 md:p-8 my-5`}>
						When a user registers their domain will be prompted to supply your user credentials for relating to our generated DID which is then paired with provided PublicKeyCredentials
					</div>

					{/* Code block	*/}
					<div className={styles["image-container"]}>
						<Image src={CodeBlock} width={954} height={1020} />
					</div>


					<p>You can go ahead and verify your project contract address. Your local testnet should be running on 0001:0.0019200.</p>
					<p>Hope you found this tutorial valuable? Drop a rating of a scale of 1 - 10 on how likely you are to recommend our learning resources to your colleagues and pals. Continue Learning <LinkIcon href="#">here</LinkIcon>.</p>

					{/*	Ratings*/}
					<div className="my-10">
						<Image src={Rating} width={672} height={68} />
					</div>

				</div>
			</section>

			<section className="flex-grow md:pl-5">
				<div className={`${styles["reference"]} p-5 md:p-10 sticky top-20`}>
					<h5>SECTION REFERENCE</h5>
					<hr className="mt-2 mb-5 md:mb-8"/>

					<div className="flex flex-col mb-5">
						<a href="/tutorials/1#initial" className="my-1 flex">
							<LinkIcon />
							<span className="ml-2">Initial Setup</span>
						</a>
						<a href="#" className="my-1 ml-8">Sign up to sonr beam</a>
						<a href="#" className="my-1 ml-8">Download packages</a>
					</div>
					<div className="flex flex-col mb-5">
						<a href="/tutorials/1#run" className="my-1 flex">
							<LinkIcon />
							<span className="ml-2">Running a Hello World Testnet</span>
						</a>
						<a href="#" className="my-1 ml-8">Sign up to sonr beam</a>
						<a href="#" className="my-1 ml-8">Download packages</a>
					</div>
				</div>
			</section>
		</div>
	);
};

export {TutorialsDetail};
