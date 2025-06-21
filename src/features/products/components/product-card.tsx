import { MinusIcon, PlusIcon, ShoppingBasket, StarIcon } from 'lucide-react';

import {
	selectCartItem,
	selectHasHydrated,
	selectIsInCart,
	useCartStore,
} from '@/features/cart/model';

import { Badge, Button, Card, CardContent } from '@/shared/components/ui';

import { IProduct } from '../types';

interface Props {
	product: IProduct;
}

export function ProductCard({ product }: Props) {
	const addItemToCart = useCartStore((state) => state.addItem);
	const removeItemFromCart = useCartStore((state) => state.removeItem);
	const updateItemQuantity = useCartStore((state) => state.updateQuantity);
	const hasHydrated = useCartStore(selectHasHydrated);
	const isProductInCart = useCartStore(selectIsInCart(product.id));
	const cartItem = useCartStore(selectCartItem(product.id));

	const handleAddToCart = () => {
		if (isProductInCart) {
			removeItemFromCart(product.id);
		} else {
			addItemToCart(product);
		}
	};

	const incrementQuantity = () => {
		if (cartItem) {
			updateItemQuantity(product.id, cartItem.quantity + 1);
		} else {
			addItemToCart(product, 1);
		}
	};

	const decrementQuantity = () => {
		if (cartItem && cartItem.quantity > 1) {
			updateItemQuantity(product.id, cartItem.quantity - 1);
		} else {
			removeItemFromCart(product.id);
		}
	};

	return (
		<Card className='shadow-none'>
			<CardContent className='flex flex-col gap-4'>
				<img
					src={product.image}
					alt={product.title}
					loading='lazy'
					className='aspect-square size-full object-contain'
				/>

				<Badge
					variant={'secondary'}
					className='bg-secondary/40 absolute top-2 left-2 capitalize backdrop-blur-xl'
				>
					{product.category}
				</Badge>

				<h4 className='line-clamp-1 font-medium'>{product.title}</h4>

				<div className='flex items-end justify-between'>
					<div className='flex items-center gap-x-4'>
						<div className='flex flex-col gap-1'>
							<p className='text-muted-foreground text-sm'>Цена</p>
							<p>
								{product.price} <span className='text-xs'>сом</span>
							</p>
						</div>

						<div className='flex flex-col gap-1'>
							<p className='text-muted-foreground text-sm'>Рейтинг</p>
							<p className='flex items-center'>
								<StarIcon className='size-4.5 fill-yellow-500 stroke-transparent' />
								{product.rating.rate}
							</p>
						</div>
					</div>

					{isProductInCart ? (
						<div className='flex items-center justify-between gap-x-1'>
							<Button
								size={'icon-sm'}
								variant={'outline'}
								icon={MinusIcon}
								onClick={decrementQuantity}
								disabled={!hasHydrated || !cartItem || cartItem.quantity <= 1}
							/>

							<p className='w-4 text-center text-lg'>
								{cartItem?.quantity || 0}
							</p>

							<Button
								size={'icon-sm'}
								icon={PlusIcon}
								onClick={incrementQuantity}
								disabled={!hasHydrated || !cartItem}
							/>
						</div>
					) : (
						<Button
							size={'icon-sm'}
							icon={ShoppingBasket}
							onClick={handleAddToCart}
							disabled={!hasHydrated}
						/>
					)}
				</div>
			</CardContent>
		</Card>
	);
}
