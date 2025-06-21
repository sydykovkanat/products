import { Skeleton } from '@/shared/components/ui';

import { IProduct } from '../types';

import { ProductCard } from './product-card';

interface Props {
	products: IProduct[];
	isLoading: boolean;
}

export function ProductsList({ products, isLoading }: Props) {
	if (isLoading) {
		return <ProductsListSkeleton />;
	}

	return (
		<div className='grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
			{products.map((product) => (
				<ProductCard key={product.id} product={product} />
			))}
		</div>
	);
}

function ProductsListSkeleton() {
	return (
		<div className='grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
			{Array.from({ length: 16 }).map((_, index) => (
				<Skeleton key={index} className='h-[395px]' />
			))}
		</div>
	);
}
