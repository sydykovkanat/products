import type { Metadata } from 'next';
import { Geist } from 'next/font/google';
import { PropsWithChildren } from 'react';

import { Container, Header } from '@/shared/components/shared';
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
	const currentYear = new Date().getFullYear();

	return (
		<html lang={'ru'}>
			<body className={geistSans.variable}>
				<div className='flex min-h-screen flex-col justify-between'>
					<Header />

					{children}

					<footer className='border-y border-dashed'>
						<Container borderX className='py-4 text-center'>
							<p className='text-muted-foreground text-sm'>
								&copy; {currentYear} {SITE_NAME}. Все права защищены.
							</p>
						</Container>
					</footer>
				</div>
			</body>
		</html>
	);
}
