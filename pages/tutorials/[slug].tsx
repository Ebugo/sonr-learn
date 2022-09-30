import type { NextPage } from 'next';
import Head from 'next/head';
import { AppLayout } from '../../components';
import React from "react";
import { TutorialsDetail } from "../../components/Tutorials";
import { serialize } from 'next-mdx-remote/serialize'
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { LessonProps } from '../../types';


const TutorialDetail: NextPage<LessonProps> = ({ mdxSource, slug }) => {
	return (
		<AppLayout>
			<div className="container md:px-16 lg:px-28">
				<Head>
					<title>Sonr Learn | Tutorials</title>
				</Head>

				<TutorialsDetail mdxSource={mdxSource} />
			</div >
		</AppLayout>
	);
};

export default TutorialDetail;

export const getStaticPaths = async () => {
	const trackDir = path.join('lessons')

	const topicDirectories = fs.readdirSync(trackDir)

	const allPaths: {
		params: {
			lesson: string
			slug: string
		}
	}[] = []

	topicDirectories.forEach((topic: string) => {
		const topicDirectory = path.join(trackDir, topic)
		const files = fs.readdirSync(topicDirectory)

		files.forEach((fileName: string) => {
			const path = {
				params: {
					lesson: topic,
					slug: fileName.replace('.mdx', ''),
				},
			}

			allPaths.push(path)
		})
	})

	return {
		paths: allPaths,
		fallback: false, // if access path/slug that doesn't exist -> 404 page
	}
}

export const getStaticProps = async ({ params: { lesson, slug } }: any) => {
	const learn = fs.readFileSync(path.join('lessons', lesson, slug + '.mdx'))
	const { data: metaData, content } = matter(learn)
	const mdxSource = await serialize(content, { scope: metaData })
	return { props: { mdxSource: mdxSource, lesson, slug } }
}
