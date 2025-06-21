'use client';

import { ProductsList } from '@/features/products/components';
import { useGetProducts } from '@/features/products/hooks';

import { Container } from '@/shared/components/shared';

export function Products() {
	const { products, isProductsLoading } = useGetProducts();

	return (
		<Container borderX className='h-full grow py-4'>
			<ProductsList products={products || []} isLoading={isProductsLoading} />
		</Container>
	);
}
