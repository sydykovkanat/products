import type { Metadata } from 'next';
import { Geist } from 'next/font/google';
import { PropsWithChildren } from 'react';

import {
	SITE_DESCRIPTION,
	SITE_KEYWORDS,
	SITE_NAME,
} from '@/shared/constants/seo.constants';

import '../shared/styles/globals.css';

const geistSans = Geist({
	variable: '--font-geist-sans',
	subsets: ['latin'],
});

export const metadata: Metadata = {
	title: {
		absolute: SITE_NAME,
		template: `${SITE_NAME} • %s`,
	},
	description: SITE_DESCRIPTION,
	keywords: SITE_KEYWORDS,
};

export default function RootLayout({ children }: PropsWithChildren) {
	return (
		<html lang={'ru'}>
			<body className={geistSans.variable}>{children}</body>
		</html>
	);
}
