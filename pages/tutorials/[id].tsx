import type { NextPage } from 'next';
import Head from 'next/head';
import { AppLayout } from '../../components';
import styles from '../index.module.css';
import React from "react";
import {TutorialsDetail} from "../../components/Tutorials";


const Home: NextPage = () => {
	return (
		<AppLayout>
			<div className={styles["container"]}>
				<Head>
					<title>Sonr Learn | Tutorials</title>
				</Head>

				<TutorialsDetail />
			</div >
		</AppLayout>
	);
};

export default Home;
