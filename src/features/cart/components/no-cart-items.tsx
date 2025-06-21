import { ArrowLeft } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

import { Button } from '@/shared/components/ui';

export function NoCartItems() {
	return (
		<div className='absolute top-1/2 left-1/2 flex h-full w-full -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center gap-2'>
			<Image
				src={'/no-cart-items.png'}
				alt='Корзина пуста'
				width={200}
				height={200}
				className='h-32 w-32 object-contain'
			/>

			<h2 className='text-lg font-medium'>Корзина пуста</h2>

			<div className='text-center'>
				<p className='text-muted-foreground'>
					Добавьте товары в корзину, чтобы продолжить покупки.
				</p>
				<p className='text-muted-foreground'>
					Вы можете вернуться на главную страницу и выбрать товары.
				</p>
			</div>

			<Link href={'/'}>
				<Button variant='outline' icon={ArrowLeft}>
					Перейти на главную
				</Button>
			</Link>
		</div>
	);
}
