import { NavigationMenu, NavigationMenuList } from '@/shared/components/ui';
import { PAGES } from '@/shared/configs/pages.configs';

import { NavMenuItem } from './nav-menu-item';

export function NavMenu() {
	return (
		<NavigationMenu>
			<NavigationMenuList>
				<NavMenuItem
					path={PAGES.HOME.path}
					title={PAGES.HOME.title}
					icon={PAGES.HOME.icon}
				/>

				<NavMenuItem
					path={PAGES.PRODUCTS.path}
					title={PAGES.PRODUCTS.title}
					icon={PAGES.PRODUCTS.icon}
				/>
			</NavigationMenuList>
		</NavigationMenu>
	);
}
