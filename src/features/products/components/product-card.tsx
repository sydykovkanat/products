import { ShoppingBasket, StarIcon } from 'lucide-react';
import Link from 'next/link';

import {
	Badge,
	Button,
	Card,
	CardContent,
	CardTitle,
} from '@/shared/components/ui';
import { PAGES } from '@/shared/configs';

import { IProduct } from '../types';

interface Props {
	product: IProduct;
}

export function ProductCard({ product }: Props) {
	return (
		<Card className='shadow-none'>
			<CardContent className='flex flex-col gap-4'>
				<Link href={PAGES.PRODUCT.path(product.id)} className='relative'>
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
				</Link>

				<CardTitle className='line-clamp-1'>{product.title}</CardTitle>

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

					<Button size={'icon'} icon={ShoppingBasket} />
				</div>
			</CardContent>
		</Card>
	);
}
