import type { NextPage } from 'next';
import Head from 'next/head';
import { AppLayout } from '../components';
import styles from './index.module.css';


const Home: NextPage = () => {
	// constants

	return (
		<AppLayout>
			<div className={styles["container"]}>
				<Head>
					<title>Sonr Learn | Home</title>
				</Head>
				<section className={`${styles["banner"]} relative`}>

				</section>
				<section className="min-h-screen flex items-center justify-center flex-col">
					<h2>Welcome to Sonr Learn 👋</h2>
					<p>Care to know more? 👉 visit <a className="text-blue-400" href="https://sonr.io" target="_blank" rel="noreferrer">Sonr.io</a></p>
				</section>
			</div >
		</AppLayout>
	);
};

export default Home;
