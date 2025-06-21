import { useQuery } from '@tanstack/react-query';

import { productService } from '../services';

export function useGetProducts() {
	const { data: products, isLoading: isProductsLoading } = useQuery({
		queryKey: ['products'],
		queryFn: () => productService.getProducts(),
	});

	return { products, isProductsLoading };
}
