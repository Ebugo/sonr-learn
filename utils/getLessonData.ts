import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { serialize } from "next-mdx-remote/serialize";
import { mdxOptions } from './mdxOptions';
import getHeadings from './getHeadings';

export const getLessonData = async(topic: 'tutorials' | 'programs' = 'tutorials', slug: string) => {
	const learn = fs.readFileSync(path.join('lessons', topic, slug + '.mdx'))
	const { data: metaData, content } = matter(learn)
	const headings = getHeadings(content);
	const mdxSource = await serialize(content, { scope: metaData, mdxOptions })

	return {mdxSource, headings};
}