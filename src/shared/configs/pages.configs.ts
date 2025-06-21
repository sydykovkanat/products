import { HomeIcon, PackageIcon, ShoppingCartIcon } from 'lucide-react';

export const PAGES = {
	HOME: {
		path: '/home',
		title: 'Главная',
		description: 'Добро пожаловать на главную страницу нашего сайта',
		icon: HomeIcon,
	},
	CART: {
		path: '/cart',
		title: 'Корзина',
		description: 'Ваша корзина покупок',
		icon: ShoppingCartIcon,
	},
	PRODUCTS: {
		path: '/products',
		title: 'Товары',
		description: 'Каталог товаров',
		icon: PackageIcon,
	},
	PRODUCT: {
		path: (id: string) => `/products/${id}`,
		title: 'Товар',
		description: 'Информация о товаре',
		icon: PackageIcon,
	},
};
