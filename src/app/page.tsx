import type { Metadata } from 'next';

import { PAGES } from '@/shared/configs';

import { Home } from './home';

export const metadata: Metadata = {
	title: PAGES.HOME.title,
	description: PAGES.HOME.description,
};

export default function Page() {
	return <Home />;
}
