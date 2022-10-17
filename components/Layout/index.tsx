import Head from 'next/head';
import { ReactComponentElement } from 'react';
import { Footer, Header } from '..';
import styles from './styles.module.css';


const AppLayout = ({ children, showFooter = true }: { children: ReactComponentElement<any>, showFooter?: boolean }) => {
	return (
		<div className={styles["wrapper"]}>
			<Head>
				<link rel="icon" href="/favicon/favicon.ico" />
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1"
				/>
				<meta name="theme-color" content="#000000" />
				<meta name="description" content="Sonr Learn" />
				<meta name="keywords" content="Sonr Learn"></meta>
			</Head>
			<Header />
			<main className={`${styles["container"]} pt-10 md:pt-14`}>
				{children}
			</main>
			{showFooter && <Footer/>}
		</div >
	);
};

export { AppLayout };
