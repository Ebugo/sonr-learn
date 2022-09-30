import type { NextPage } from 'next';
import Head from 'next/head';
import { AppLayout } from '../../components';
import React from "react";
import {TutorialsList} from "../../components/Tutorials";
import { Lesson, LessonProps } from '../../types';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter'


const Tutorials: NextPage<LessonProps> = ({ lessons }: { lessons: Lesson[] }) => {
	return (
		<AppLayout>
			<div className="container md:px-16 lg:px-28">
				<Head>
					<title>Sonr Learn | Tutorials</title>
				</Head>

				<TutorialsList lessons={lessons} />
			</div >
		</AppLayout>
	);
};

export default Tutorials;

export const getStaticProps = async () => {
	const directories = fs.readdirSync(path.join('lessons'))
	const lessons: Lesson[] = []
	directories.reverse().map((filename) => {
		fs.readdirSync(path.join('lessons', filename)).map((file) => {
			const markdownWithMeta = fs.readFileSync(
				path.join('lessons', filename, file),
				'utf-8',
			)

			const { data: frontMatter } = matter(markdownWithMeta)
			lessons.push({
				path: filename,
				frontMatter,
				slug: `${file.replace('.mdx', '')}`,
			})
		})
	})
	return {
		props: {
			lessons,
		},
	}
}
