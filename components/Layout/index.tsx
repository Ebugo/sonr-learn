import Head from 'next/head';
import { ReactComponentElement } from 'react';
import { Footer, Header } from '..';


const AppLayout = ({ children }: { children: ReactComponentElement<any> }) => {
	return (
		<div>
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
			{/*<Header />*/}
			<main className={`mb-8 container pt-24 md:pt-0 md:px-16 lg:px-28 xl:px-32 min-h-screen`}>
				{children}
			</main>
			{/*<Footer />*/}
		</div >
	);
};

export { AppLayout };
