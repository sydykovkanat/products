'use client';

import { ShoppingBasket } from 'lucide-react';

import { CartProductsList, NoCartItems } from '@/features/cart/components';
import { selectCartItems, useCartStore } from '@/features/cart/model';

import { Container } from '@/shared/components/shared';
import { Button } from '@/shared/components/ui';

export function Cart() {
	const cartItems = useCartStore(selectCartItems);

	return (
		<Container borderX className='relative h-full grow py-4'>
			{cartItems.length > 0 ? (
				<div className='flex gap-8'>
					<div className='w-2/3'>
						<CartProductsList products={cartItems} />
					</div>

					<div className='sticky top-21 h-max w-1/3'>
						<h2 className='mb-2 text-lg font-medium'>Информация о корзине</h2>

						<div className='bg-secondary rounded-xl p-4'>
							<div className='mb-4 flex items-center justify-between border-b'>
								<span className='text-muted-foreground text-sm'>
									Товары в корзине
								</span>
								<span className='text-lg font-medium'>
									{cartItems.length} шт.
								</span>
							</div>

							{cartItems.map((item) => (
								<div
									key={item.id}
									className='mb-2 flex items-center justify-between border-b pb-2'
								>
									<span className='text-muted-foreground line-clamp-1 text-sm'>
										{item.title}
									</span>
									<span className='text-sm text-nowrap'>
										{item.price.toFixed(2)} сом
									</span>
								</div>
							))}
							<div className='mb-4 flex items-center justify-between border-b'>
								<span className='text-muted-foreground text-sm'>Итого</span>
								<span className='text-lg font-medium'>
									{cartItems
										.reduce((total, item) => total + item.price, 0)
										.toFixed(2)}{' '}
									сом
								</span>
							</div>
							<Button size={'lg'} icon={ShoppingBasket} className='h-12 w-full'>
								Оформить заказ
							</Button>
						</div>
					</div>
				</div>
			) : (
				<NoCartItems />
			)}
		</Container>
	);
}
