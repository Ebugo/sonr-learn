import type { NextPage } from 'next';
import Head from 'next/head';
import { AppLayout } from '../../components';
import React from "react";
import {TutorialsDetail} from "../../components/Tutorials";


const Home: NextPage = () => {
	return (
		<AppLayout>
			<div className="container md:px-16 lg:px-28">
				<Head>
					<title>Sonr Learn | Tutorials</title>
				</Head>

				<TutorialsDetail />
			</div >
		</AppLayout>
	);
};

export default Home;
