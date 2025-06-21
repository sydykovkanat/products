import type { Metadata } from 'next';

import { PAGES } from '@/shared/configs';

import { Products } from './products';

export const metadata: Metadata = {
	title: PAGES.PRODUCTS.title,
	description: PAGES.PRODUCTS.description,
};

export default function Page() {
	return <Products />;
}
