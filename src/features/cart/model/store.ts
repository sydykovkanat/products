import { create } from 'zustand';
import { persist } from 'zustand/middleware';

import type { IProduct } from '@/features/products/types';

export interface ICartItem extends IProduct {
	quantity: number;
}

interface CartState {
	items: ICartItem[];
	hasHydrated: boolean;
}

interface CartActions {
	addItem: (product: IProduct, quantity?: number) => void;
	removeItem: (productId: string | number) => void;
	updateQuantity: (productId: string | number, quantity: number) => void;
	clearCart: () => void;
	getItem: (productId: string | number) => ICartItem | undefined;
	isInCart: (productId: string | number) => boolean;
	getTotalItems: () => number;
	getTotalPrice: () => number;
	setHasHydrated: (state: boolean) => void;
}

type CartStore = CartState & CartActions;

export const useCartStore = create<CartStore>()(
	persist(
		(set, get) => ({
			items: [],
			hasHydrated: false,

			addItem: (product, quantity = 1) => {
				const state = get();
				const existingItem = state.items.find((item) => item.id === product.id);

				if (existingItem) {
					set({
						items: state.items.map((item) =>
							item.id === product.id
								? { ...item, quantity: item.quantity + quantity }
								: item,
						),
					});
				} else {
					set({
						items: [...state.items, { ...product, quantity }],
					});
				}
			},

			removeItem: (productId) => {
				const state = get();
				set({
					items: state.items.filter((item) => item.id !== productId),
				});
			},

			updateQuantity: (productId, quantity) => {
				if (quantity <= 0) {
					get().removeItem(productId);
					return;
				}

				const state = get();
				set({
					items: state.items.map((item) =>
						item.id === productId ? { ...item, quantity } : item,
					),
				});
			},

			clearCart: () => {
				set({ items: [] });
			},

			getItem: (productId) => {
				const state = get();
				return state.items.find((item) => item.id === productId);
			},

			isInCart: (productId) => {
				const state = get();
				return state.items.some((item) => item.id === productId);
			},

			getTotalItems: () => {
				const state = get();
				return state.items.reduce((total, item) => total + item.quantity, 0);
			},

			getTotalPrice: () => {
				const state = get();
				return state.items.reduce(
					(total, item) => total + item.price * item.quantity,
					0,
				);
			},

			setHasHydrated: (hasHydrated) => {
				set({ hasHydrated });
			},
		}),
		{
			name: 'cart-storage',
			onRehydrateStorage: () => (state) => {
				state?.setHasHydrated(true);
			},
		},
	),
);

export const selectCartItems = (state: CartStore) => state.items;
export const selectTotalItems = (state: CartStore) => state.getTotalItems();
export const selectTotalPrice = (state: CartStore) => state.getTotalPrice();
export const selectHasHydrated = (state: CartStore) => state.hasHydrated;
export const selectIsInCart =
	(productId: string | number) => (state: CartStore) =>
		state.hasHydrated && state.isInCart(productId);
export const selectCartItem =
	(productId: string | number) => (state: CartStore) =>
		state.hasHydrated ? state.getItem(productId) : undefined;
