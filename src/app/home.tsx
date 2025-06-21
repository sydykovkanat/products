'use client';

import { BanIcon } from 'lucide-react';

import { ProductsList } from '@/features/products/components';
import { useGetProducts } from '@/features/products/hooks';

import { Container } from '@/shared/components/shared';

export function Home() {
	const { products, isProductsLoading, isProductsError } = useGetProducts();

	return (
		<Container borderX className='h-full grow py-4'>
			{!isProductsError ? (
				<ProductsList products={products || []} isLoading={isProductsLoading} />
			) : (
				<div className='absolute top-1/2 left-1/2 flex h-full w-full -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center gap-4'>
					<BanIcon className='text-muted-foreground h-16 w-16' />
					<div className='text-muted-foreground text-center'>
						<p>Произошла ошибка при загрузке продуктов.</p>
						<p>Пожалуйста, попробуйте позже.</p>
					</div>
				</div>
			)}
		</Container>
	);
}
