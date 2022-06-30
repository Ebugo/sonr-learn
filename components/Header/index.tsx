import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { Close, Hamburger } from "../../assets";
import { Button } from "../Shared/Button";

import styles from "./styles.module.css";

const Header = () => {
	const [showMobileList, setshowMobileList] = useState(false);

	const { push, pathname } = useRouter();

	// handlers
	const isActiveClass = (path: string): string => pathname === path ? "active" : "";

	return (
		<>
			<header
				className={` ${styles.bigNav} fixed top-0 py-5`}
			>
				<div className="container">
					<div className="flex justify-between">
						<div className="flex items-center">
							<div className={`${styles["logo-container"]}`}>
								Logo
							</div>
						</div>
						<nav className={`${styles.bigNavLinks} ml-auto py-2 hidden md:block`}>
							<ul>
								<li className={styles[isActiveClass("/")] + " flex flex-col"}>
									<Link href="/">Home</Link>
									<hr />
								</li>
							</ul>
						</nav>
						<div className="flex items-center hidden md:block">
							<Button
								buttonStyle="rounded"
								variant="outlined"
								className="px-10"
								onClick={() => push("/")}
							>
								Home
							</Button>
						</div>

						<div className="container md:hidden flex-grow flex items-center">
							<div className="flex justify-center items-center ml-auto">
								<Hamburger onClick={() => setshowMobileList(true)} />
							</div>
							<div
								className={`fixed inset-0 bg-blue-100 ${styles.mobileList
									} ${showMobileList ? `flex` : `hidden`}`}
							>
								<Close
									onClick={() => setshowMobileList(false)}
									className={`${styles.close}`}
								/>
								<nav className={`${styles.smallNavLinks} py-10 md:hidden block`}>
									<ul className="flex flex-col items-center justify-center">
										<li className={styles[isActiveClass("/")] + " flex flex-col items-center"}>
											<Link href="/">Home</Link>
											<hr />
										</li>
									</ul>
								</nav>
							</div>
						</div>
					</div>
				</div>
			</header>
		</>
	);
};

export { Header };
