import { IProduct } from '@/features/products/types';

import { CartProductCard } from './cart-product-card';

interface Props {
	products: IProduct[];
}

export function CartProductsList({ products }: Props) {
	return (
		<div className='flex flex-col gap-4'>
			{products.map((product) => (
				<CartProductCard key={product.id} product={product} />
			))}
		</div>
	);
}
