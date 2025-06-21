import { LucideIcon } from 'lucide-react';
import Link from 'next/link';

import { NavigationMenuItem, NavigationMenuLink } from '../ui';

interface Props {
	path: string;
	title: string;
	icon?: LucideIcon;
}

export function NavMenuItem({ path, title, icon: Icon }: Props) {
	return (
		<NavigationMenuItem>
			<NavigationMenuLink asChild>
				<Link href={path} className='flex flex-row items-center leading-none'>
					{Icon && <Icon />}
					{title}
				</Link>
			</NavigationMenuLink>
		</NavigationMenuItem>
	);
}
