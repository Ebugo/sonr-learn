{/* eslint-disable @next/next/no-html-link-for-pages */}

import styles from './styles.module.css';
import {Image} from "../../Shared";
import {CodeBlock, Link, Rating, TutorialAccess} from "../../../assets";
import React from "react";
import {Tag} from "../../Shared/Tag";


const ProgramsDetail = () => {
	return (
		<div className={styles["container"]}>
			<section className="flex-grow md:pr-10">
				<div className={` p-5 md:p-10 sticky top-20`}>

				</div>
			</section>

			<section className="">
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
					<p>Hope you found this tutorial valuable? Drop a rating of a scale of 1 - 10 on how likely you are to recommend our learning resources to your colleagues and pals. Continue Learning <Link href="#">here</Link>.</p>

				</div>
			</section>
		</div>
	);
};

export {ProgramsDetail};
