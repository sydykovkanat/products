import { MinusIcon, PlusIcon, StarIcon, X } from 'lucide-react';

import { IProduct } from '@/features/products/types';

import {
	AlertDialog,
	AlertDialogAction,
	AlertDialogCancel,
	AlertDialogContent,
	AlertDialogDescription,
	AlertDialogFooter,
	AlertDialogHeader,
	AlertDialogTitle,
	AlertDialogTrigger,
	Badge,
	Button,
	Card,
	CardContent,
} from '@/shared/components/ui';

import { selectCartItem, selectHasHydrated, useCartStore } from '../model';

interface Props {
	product: IProduct;
}

export function CartProductCard({ product }: Props) {
	const addItemToCart = useCartStore((state) => state.addItem);
	const removeItemFromCart = useCartStore((state) => state.removeItem);
	const updateItemQuantity = useCartStore((state) => state.updateQuantity);
	const hasHydrated = useCartStore(selectHasHydrated);
	const cartItem = useCartStore(selectCartItem(product.id));
	if (!cartItem) return;
	const totalPrice = (cartItem.quantity * product.price).toFixed(2);

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
			<CardContent className='flex flex-col gap-4 sm:flex-row xl:items-center'>
				<img
					src={product.image}
					alt={product.title}
					loading='lazy'
					className='aspect-square size-32 object-contain'
				/>

				<div className='flex w-full flex-col justify-between'>
					<div className='space-y-1'>
						<div className='flex items-center justify-between gap-x-4'>
							<h3 className='text-lg leading-none font-semibold'>
								{product.title}
							</h3>

							<AlertDialog>
								<AlertDialogTrigger asChild>
									<Button icon={X} size={'icon-sm'} variant={'ghost'} />
								</AlertDialogTrigger>

								<AlertDialogContent>
									<AlertDialogHeader>
										<AlertDialogTitle>Вы уверены?</AlertDialogTitle>

										<AlertDialogDescription className='text-foreground'>
											Вы собираетесь удалить {product.title} из корзины.
											<span className='text-muted-foreground block'>
												Это действие нельзя будет отменить.
											</span>
										</AlertDialogDescription>
									</AlertDialogHeader>

									<AlertDialogFooter>
										<AlertDialogCancel>Отмена</AlertDialogCancel>
										<AlertDialogAction asChild>
											<Button
												onClick={() => removeItemFromCart(product.id)}
												variant={'destructive'}
												className='bg-destructive/10 hover:bg-destructive/20 text-destructive/80 hover:text-destructive'
											>
												Удалить
											</Button>
										</AlertDialogAction>
									</AlertDialogFooter>
								</AlertDialogContent>
							</AlertDialog>
						</div>

						<div className='flex items-center gap-2'>
							<Badge variant={'secondary'} className='capitalize'>
								{cartItem.category}
							</Badge>

							<Badge variant={'outline'}>
								<StarIcon className='fill-yellow-500 stroke-transparent' />
								{cartItem.rating.rate}
							</Badge>
						</div>

						<p className='text-muted-foreground first-letter:uppercase'>
							{product.description}
						</p>
					</div>

					<div className='flex items-end justify-between'>
						<span className='text-lg font-semibold'>
							{totalPrice}{' '}
							<span className='text-muted-foreground text-sm font-normal'>
								сом
							</span>
						</span>

						<div className='flex items-center justify-end gap-x-2'>
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
					</div>
				</div>
			</CardContent>
		</Card>
	);
}
