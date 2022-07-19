import type { NextPage } from 'next';
import Head from 'next/head';
import styles from './index.module.css';
import React, {useEffect} from "react";
import {SignIn} from "../components/SignIn";
import {AppLayout} from "../components";


const Auth: NextPage = () => {
	//state management

	useEffect(()=>{
	}, [])


	return (
		<AppLayout showFooter={false}>
			<div className={`h-full ${styles["container"]}`}>
				<Head>
					<title>Sonr Learn | Sign in</title>
				</Head>
				<SignIn/>
			</div >
		</AppLayout>
	);
};

export default Auth;
