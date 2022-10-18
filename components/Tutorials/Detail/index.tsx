{/* eslint-disable @next/next/no-html-link-for-pages */ }

import styles from './styles.module.css';
// import { Image } from "../../Shared";
import { CodeBlock, LinkIcon, Rating, TutorialAccess } from "../../../assets";
import React from "react";
import { Tag } from "../../Shared/Tag";
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote'
import { Code, Box, Heading, Image, Text, Link } from '@chakra-ui/react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import dracula from 'react-syntax-highlighter/dist/cjs/styles/prism/dracula'
import { CopyToClipboard } from '../../Shared';
import { getAuthorInitials, getAuthors } from '../List';
import NextLink from 'next/link';


const CustomHeading = ({ as, id, ...props }: any) => {
	if (id) {
		return (
			<Link href={`#${id}`} className={styles["header"]}>
				<NextLink href={`#${id}`}>
					<Heading
						as={as}
						display="inline"
						id={id}
						lineHeight={'1em'}
						{...props}
						_hover={{
							_before: {
								content: '"#"',
								position: 'relative',
								marginLeft: '-1.2ch',
								paddingRight: '0.2ch',
							},
						}}
					/>
				</NextLink>
			</Link>
		);
	}
	return <Heading as={as} {...props} />;
};

const components: any = {
	code: (props: any) => {
		const [, language] =
			(props.className as string)?.match(/language-(\w+)/) ?? []

		if (language) {
			return (
				<Box position="relative">
					<SyntaxHighlighter language={language} {...props} style={dracula} />
					<CopyToClipboard {...props} />
				</Box>
			)
		}

		return <Code fontSize="md" wordBreak="break-all" {...props} />
	},
	h1: (props: any) => <CustomHeading as="h1" apply="mdx.h1" fontSize="4xl" {...props} />,
	h2: (props: any) => <CustomHeading as="h2" apply="mdx.h2" fontSize="3xl" {...props} />,
	h3: (props: any) => <CustomHeading as="h3" apply="mdx.h3" fontSize="2xl" {...props} />,
	h4: (props: any) => <CustomHeading as="h4" apply="mdx.h4" fontSize="xl" {...props} />,
	h5: (props: any) => <CustomHeading as="h5" apply="mdx.h5" fontSize="xl" {...props} />,
	h6: (props: any) => <CustomHeading as="h6" apply="mdx.h6" fontSize="xl" {...props} />,
	p: (props: any) => <Text as="p" apply="mdx.p" fontSize="xl" {...props} />,
	a: (props: any) => <Text as="a" apply="mdx.a" {...props} />,
	ul: (props: any) => <Text as="ul" apply="mdx.ul" fontSize="xl" {...props} />,
	img: (props: any) => (
		<Image as="img" apply="mdx.image" m="0 auto" alt="" {...props} />
	),
	// ContentSideDrawer,
	// ContentCallout,
}


const TutorialsDetail: React.FC<{ mdxSource: MDXRemoteSerializeResult | any, headings: any[] }> = ({ mdxSource, headings }) => {
	const colors = ["primary", "secondary", "tertiary", "green"];

	return (
		<div className={`${styles["container"]} flex flex-col md:flex-row`}>
			<section className="pt-14 md:pt-4 md:order-1 order-2">
				{Array.isArray(mdxSource?.scope?.tags) && mdxSource?.scope?.tags.length > 0 && (
					<div className="flex flex-wrap gap-3 w-full mb-2">
						{mdxSource?.scope?.tags?.map((tag: string, i: number) => (
							<Tag key={i} text={tag} color={colors[Math.floor(Math.random() * 3)]} />
						))}
					</div>
				)}
				<h1 className="pb-4">{mdxSource?.scope?.title || "- -"}</h1>
				<span className={`${styles["sub-text"]}`}>5mins Read</span>
				<div className={`${styles["description"]} mt-6 mb-3 flex items-center`}>
					{Array.isArray(mdxSource?.scope?.authors) && mdxSource?.scope?.authors.length > 0 && (
						<span className="flex items-center">
							{/* <span className={`${styles["avatar"]} mr-3`}>{getAuthorInitials(mdxSource?.scope?.authors)}</span> */}
							{getAuthors(mdxSource?.scope?.authors)}
						</span>
					)
					}
					{mdxSource?.scope?.date && <span className="ml-5 pl-5">{mdxSource?.scope?.date || ''}</span>}
				</div>
				<div className="">
					<MDXRemote {...mdxSource} components={components} />
				</div>
			</section>

			<section className="flex-grow md:pl-5 order-1 md:order-2">
				<div className={`${styles["reference"]} p-5 md:p-10 sticky top-28`}>
					<h5>SECTION REFERENCE</h5>
					<hr className="mt-2 mb-5 md:mb-8" />

					<div className="flex flex-col">
						{
							Array.isArray(headings) && headings.length > 0
								? headings.map((heading: any, i: number) => {
									if (heading?.level <= 2) {
										return (
											<NextLink href={heading?.link || "#"} key={i}>
												<a className={`${styles["top-header"]} mt-2 my-1 flex`}>
													<LinkIcon />
													<span className="ml-2">{heading?.text || ""}</span>
												</a>
											</NextLink>
										)
									} else {
										return (
											<NextLink href={heading?.link || "#"} key={i}>
												<a href={heading?.link || "#"} className="my-1 ml-8">{heading?.text || ""}</a>
											</NextLink>
										)
									}
								})
								: <a className="my-1 ml-8">No reference.</a>
						}
					</div>
				</div>
			</section>
		</div>
	);
};

export { TutorialsDetail };
