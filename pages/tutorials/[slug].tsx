import type { NextPage } from 'next';
import Head from 'next/head';
import { AppLayout } from '../../components';
import React from "react";
import { TutorialsDetail } from "../../components/Tutorials";
import { LessonDetailProps } from '../../types';
import { getLessonPathData } from '../../utils/getLessonPathData';
import { getLessonData } from '../../utils/getLessonData';


const TutorialDetail: NextPage<LessonDetailProps> = ({ mdxSource, slug, headings }) => {
	return (
		<AppLayout>
			<div className="container md:px-16 lg:px-28">
				<Head>
					<title>Sonr Learn | Tutorials</title>
				</Head>

				<TutorialsDetail mdxSource={mdxSource} headings={headings} />
			</div >
		</AppLayout>
	);
};

export default TutorialDetail;

export const getStaticPaths = async () => {
	return {
		paths: await getLessonPathData('tutorials'),
		fallback: false, // if access path/slug that doesn't exist -> 404 page
	}
}

// export const getStaticProps = async ({ params }: any) => {
// export const getStaticProps = async ({ params: { lesson, slug } }: any) => {
export const getStaticProps = async ({ params: { slug } }: any) => {
	const lesson = 'tutorials';
	const {mdxSource, headings} = await getLessonData(lesson, slug);
	return { props: { mdxSource, lesson, slug, headings } }
}
