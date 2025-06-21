import Image from 'next/image';
import Link from 'next/link';

import { PAGES } from '@/shared/configs/pages.configs';

import { Button } from '../ui';

import { Container } from './container';
import { NavMenu } from './nav-menu';

export function Header() {
	return (
		<header className='bg-background/80 sticky top-0 z-50 border-y border-dashed backdrop-blur-lg'>
			<Container className='flex items-center justify-between border-x border-dashed py-4'>
				<section className='flex items-center gap-x-4'>
					<Link href={'/'} className='overflow-hidden'>
						<Image
							src={'/logo.svg'}
							alt='Logo'
							width={34}
							height={34}
							priority
						/>
					</Link>

					<NavMenu />
				</section>

				<Link href={PAGES.CART.path}>
					<Button icon={PAGES.CART.icon} size={'sm'}>
						Корзина
					</Button>
				</Link>
			</Container>
		</header>
	);
}
