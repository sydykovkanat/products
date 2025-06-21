import { HomeIcon, ShoppingCartIcon } from 'lucide-react';

export const PAGES = {
	HOME: {
		path: '/',
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
};
