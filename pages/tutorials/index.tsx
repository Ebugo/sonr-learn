import type { NextPage } from 'next';
import Head from 'next/head';
import { AppLayout } from '../../components';
import React from "react";
import {TutorialsList} from "../../components/Tutorials";


const Home: NextPage = () => {
	return (
		<AppLayout>
			<div>
				<Head>
					<title>Sonr Learn | Tutorials</title>
				</Head>

				<TutorialsList />
			</div >
		</AppLayout>
	);
};

export default Home;
