import type { MetaTagsProps } from 'svelte-meta-tags';
import type { LayoutLoad } from './$types';

export const load = (async ({ url }) => {
	const baseMetaTags = Object.freeze({
		title: 'Word Sort',
		titleTemplate: '%s - Alphabetical Text Sorter',
		url: new URL(url.pathname, url.origin).href,
		canonical: new URL(url.pathname, url.origin).href,
		description:
			'Sort the letters of each word in your text! Paste your text, and let us do the magic.',
		author: 'Manohar Maharshi',
		robots: 'index, follow',
		twitter: {
			cardType: 'summary',
			site: '@mmmmaharshi',
			creator: '@mmmmaharshi',
			title: 'Word Sort - Alphabetical Text Sorter',
			description:
				'Sort the letters of each word in your text! Paste your text, and let us do the magic.'
		},
		openGraph: {
			title: 'Word Sort - Alphabetical Text Sorter',
			description:
				'Sort the letters of each word in your text! Paste your text, and let us do the magic.',
			url: 'https://wordsort.vercel.app/',
			type: 'website',
			siteName: 'Word Sort'
		}
	}) as MetaTagsProps;

	return {
		baseMetaTags
	};
}) satisfies LayoutLoad;
