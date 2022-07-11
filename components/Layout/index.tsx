import Head from 'next/head';
import { ReactComponentElement } from 'react';
import { Footer, Header } from '..';
import styles from './styles.module.css';


const AppLayout = ({ children }: { children: ReactComponentElement<any> }) => {
	return (
		<div className={styles["wrapper"]}>
			<Head>
				<link rel="icon" href="./favicon.svg" />
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1"
				/>
				<meta name="theme-color" content="#000000" />
				<meta name="description" content="Sonr Learn" />
				<meta name="keywords" content="Sonr Learn"></meta>
			</Head>
			<Header />
			<main className={`${styles["container"]} container pt-10 md:pt-14 md:px-16 lg:px-28`}>
				{children}
			</main>
			<Footer />
		</div >
	);
};

export { AppLayout };
