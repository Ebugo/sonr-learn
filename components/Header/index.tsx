import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { ArrowDown, Close, Logo, Hamburger } from "../../assets";
import { Button } from "../Shared/Button";

import styles from "./styles.module.css";

const Header = () => {
	const [showMobileList, setshowMobileList] = useState(false);

	const { push } = useRouter();

	return (
		<>
			<header
				className={`container ${styles.container} ${styles.bigNav} py-5 hidden xl:block sticky top-0 z-10`}
			>
				<div className="">
					<div className="flex justify-between">
						<div className="flex items-center flex-grow">
							<div className="cursor-pointer">
								<Link href="/"><Logo /></Link>
							</div>
							<nav className={`${styles.bigNavLinks} ml-auto`}>
								<ul>
									<li>
										<Link href="/tutorials">Tutorials</Link>
									</li>
									<li>
										<Link href="/programs">
											<div className="flex items-center">
												Programs <ArrowDown className="inline ml-2" />
											</div>
										</Link>
									</li>
									<li>
										<Link href="/community">
											<div className="flex items-center">
												Community <ArrowDown className="inline ml-2" />
											</div>
										</Link>
									</li>
									<li>
										<Link href="/developers">Developers</Link>
									</li>
									<li>
										<Link href="/sign-in">Quick Sign in</Link>
									</li>
								</ul>
							</nav>
						</div>
						<div className="flex items-center">
							<Button
								className="px-10"
								onClick={() => push("/tutorials")}
							>
								<span>Start Learning</span>
							</Button>
						</div>
					</div>
				</div>
			</header>
			<header
				className={`${styles.container} ${styles.smallNav} py-5 xl:hidden container sticky top-0 z-10`}
			>
				<div className={``}>
					<div className="flex justify-between items-center">
						<Logo />
						<Hamburger onClick={() => setshowMobileList(true)} />
					</div>
					<div
						className={`fixed inset-0 bg-blue-500 ${
							styles.mobileList
						} ${showMobileList ? `block` : `hidden`}`}
					>
						<Close
							onClick={() => setshowMobileList(false)}
							className={`${styles.close}`}
						/>
					</div>
				</div>
			</header>
		</>
	);
};

export { Header };
