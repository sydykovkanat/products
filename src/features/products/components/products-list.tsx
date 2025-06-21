import { IProduct } from '../types';

import { ProductCard } from './product-card';

interface Props {
	products: IProduct[];
	isLoading: boolean;
}

export function ProductsList({ products, isLoading }: Props) {
	return (
		<div className='grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
			{products.map((product) => (
				<ProductCard key={product.id} product={product} />
			))}
		</div>
	);
}
