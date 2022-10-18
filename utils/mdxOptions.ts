import rehypeSlug from 'rehype-slug';

export const mdxOptions: any = {
    rehypePlugins: [
        rehypeSlug, // this adds IDs to any h1-h6 tag that doesn't have one, using a slug made from its text
    ],
};