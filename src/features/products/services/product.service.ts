import { instance } from '@/shared/api';
import { API } from '@/shared/configs';

import { IProduct } from '../types';

class ProductService {
	async getProducts() {
		return (
			await instance<IProduct[]>({
				method: 'GET',
				url: API.products(),
			})
		).data;
	}
}

export const productService = new ProductService();
