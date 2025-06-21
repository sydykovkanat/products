import { Metadata } from 'next';

import { PAGES } from '@/shared/configs';

import { Cart } from './cart';

export const metadata: Metadata = {
	title: PAGES.CART.title,
	description: PAGES.CART.description,
};

export default function Page() {
	return <Cart />;
}
