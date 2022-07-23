import {Disclosure, Menu, Transition } from "@headlessui/react";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import {
	ArrowDown,
	Close,
	Logo,
	Hamburger,
	DiscordNav,
	TwitterNav,
	InstagramNav,
	YoutubeNav,
	GithubNav, LogoImg
} from "../../assets";
import { Button } from "../Shared/Button";

import styles from "./styles.module.css";
import {Image} from "../Shared";

const Header = () => {
	const [showMobileList, setshowMobileList] = useState(false);

	const { push } = useRouter();

	// constants
	const communityNavItems = [
		{title: "Discord", icon: <DiscordNav/>, url: "https://discord.gg/5hhXnNaV"},
		{title: "Twitter", icon: <TwitterNav/>, url: "https://twitter.com/sonr_io"},
		{title: "Instagram", icon: <InstagramNav/>, url: "https://www.instagram.com/sonr.snr/"},
		{title: "YouTube", icon: <YoutubeNav/>, url: "https://www.youtube.com/channel/UCLlBW-dsTGSS8vRlb66fh4g"},
		{title: "GitHub", icon: <GithubNav/>, url: "https://github.com/sonr-io"},
	];

	const programNavItems = [
		{title: "Certification", url: "/programs"},
		{title: "Hackathons", url: "#"},
		{title: "Events", url: "/#upcoming-events"},
		{title: "Grants/Bounties", url: "#"},
		{title: "Fellowship", url: "/programs"},
	];

	const classNames = (...classes: string[]) => {
		return classes.filter(Boolean).join(' ')
	}


	return (
		<div className={`${styles["wrapper"]} sticky top-0 z-10`}>
			<header
				className={`container ${styles.container} ${styles.bigNav} py-5 hidden xl:block`}
			>
				<div className="">
					<div className="flex justify-between">
						<div className="flex items-center flex-grow">
							<div className="cursor-pointer">
								<Link href="/">
									<Image src={LogoImg} width={231} height={60} alt="Sonr" />
								</Link>
							</div>
							<nav className={`${styles.bigNavLinks} ml-auto`}>
								<ul>
									<li>
										<Link href="/tutorials">Tutorials</Link>
									</li>
									<li>
										<Link href="/programs">
											<div className="flex items-center">
												<Menu as="div" className={`${styles["dropdown"]} relative inline-block text-left`}>
													<div>
														<Menu.Button className="inline-flex items-center justify-center w-full">
															Programs <ArrowDown className="inline ml-2" />
														</Menu.Button>
													</div>

													<Transition
														as={React.Fragment}
														enter="transition ease-out duration-100"
														enterFrom="transform opacity-0 scale-95"
														enterTo="transform opacity-100 scale-100"
														leave="transition ease-in duration-75"
														leaveFrom="transform opacity-100 scale-100"
														leaveTo="transform opacity-0 scale-95"
													>
														<Menu.Items className={`${styles["dropdown-content"]} bg-white dark:bg-black-100 origin-top-left absolute left-0 mt-3 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none px-3 py-4`}>
															<div className="py-1">
																{programNavItems.map(({title, url}, i) => (
																	<Menu.Item key={title}>
																		{({active}) => (
																			<a href={url}
																			   className={classNames(
																				   active ? 'bg-grey-100 text-gray-900' : 'text-gray-700',
																				   `${styles["dropdown-item"]} px-1 py-2 text-sm flex`
																			   )}
																			>
																				<span className="px-3 py-1">{title}</span>
																			</a>
																		)}
																	</Menu.Item>
																))}
															</div>
														</Menu.Items>
													</Transition>
												</Menu>
											</div>
										</Link>
									</li>
									<li>
										<div className="flex items-center">
											<Menu as="div" className={`${styles["dropdown"]} relative inline-block text-left`}>
												<div>
													<Menu.Button className="inline-flex items-center justify-center w-full">
														Community <ArrowDown className="inline ml-2" />
													</Menu.Button>
												</div>

												<Transition
													as={React.Fragment}
													enter="transition ease-out duration-100"
													enterFrom="transform opacity-0 scale-95"
													enterTo="transform opacity-100 scale-100"
													leave="transition ease-in duration-75"
													leaveFrom="transform opacity-100 scale-100"
													leaveTo="transform opacity-0 scale-95"
												>
													<Menu.Items className={`${styles["dropdown-content"]} bg-white dark:bg-black-100 origin-top-left absolute left-0 mt-3 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none px-3 py-4`}>
														<div className="py-1">
															{communityNavItems.map(({title, icon, url}, i) => (
																<Menu.Item key={title}>
																	{({active}) => (
																		<a target="_blank" rel="noreferrer" href={url}
																			className={classNames(
																				active ? 'bg-grey-100 text-gray-900' : 'text-gray-700',
																				`${styles["dropdown-item"]} px-1 py-2 text-sm flex`
																			)}
																		>
																			{icon} <span className="ml-3">{title}</span>
																		</a>
																	)}
																</Menu.Item>
															))}
														</div>
													</Menu.Items>
												</Transition>
											</Menu>
										</div>
									</li>
									<li>
										<a target="_blank" rel="noreferrer" href="https://docs.sonr.io/">Developers</a>
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
						<Image src={LogoImg} width={165} height={40} alt="Sonr" />
						<Hamburger onClick={() => setshowMobileList(true)} />
					</div>
					<div
						className={`fixed inset-0 bg-blue-100 ${
							styles.mobileList
						} ${showMobileList ? `block` : `hidden`}`}
					>
						<Close
							onClick={() => setshowMobileList(false)}
							className={`${styles.close}`}
						/>

						<div className={`${styles["nav-content"]} flex flex-col gap-5`}>
								<div className="cursor-pointer m-5 mb-10">
									<Link href="/">
										<Image src={LogoImg} width={165} height={40} alt="Sonr" />
									</Link>
								</div>
								<nav className={`${styles.mobileNavLinks}`}>
									<ul>
										<li>
											<Link href="/tutorials">Tutorials</Link>
										</li>
										<li>
											<div className="">
												<Disclosure>
													{({ open }) => (
														<>
															<Disclosure.Button className="">
																Programs <ArrowDown className="inline ml-2" />
															</Disclosure.Button>
															{open && (
																<Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
																	<div>
																		{programNavItems.map(({title, url}, i) => (
																			<div key={title}>
																				<a href={url}
																				   className={classNames(
																					   'hover:bg-grey-100 hover:text-gray-900 text-gray-700',
																					   `${styles["dropdown-item"]} px-1 py-2 text-sm flex`
																				   )}
																				>
																					<span className="px-3 py-1">{title}</span>
																				</a>
																			</div>
																		))}
																	</div>
																</Disclosure.Panel>
															)}
														</>
													)}
												</Disclosure>
											</div>
										</li>
										<li>
											<div className="">
												<Disclosure>
													{({ open }) => (
														<>
															<Disclosure.Button className="">
																Community <ArrowDown className="inline ml-2" />
															</Disclosure.Button>
															{open && (
																<Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
																	<div>
																		{communityNavItems.map(({title, icon, url}, i) => (
																			<div key={title}>
																				<a  target="_blank" rel="noreferrer" href={url}
																				   className={classNames(
																					   'hover:bg-grey-100 hover:text-gray-900 text-gray-700',
																					   `${styles["dropdown-item"]} px-1 py-2 text-sm flex`
																				   )}
																				>
																					{icon} <span className="px-3 py-1">{title}</span>
																				</a>
																			</div>
																		))}
																	</div>
																</Disclosure.Panel>
															)}
														</>
													)}
												</Disclosure>
											</div>
										</li>
										<li>
											<a target="_blank" rel="noreferrer" href="https://docs.sonr.io/">Developers</a>
										</li>
										<li>
											<Link href="/sign-in">Quick Sign in</Link>
										</li>
									</ul>
								</nav>

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
		</div>
	);
};

export { Header };
