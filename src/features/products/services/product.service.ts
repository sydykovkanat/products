import { toast } from 'sonner';

import { instance } from '@/shared/api';
import { API } from '@/shared/configs';

import { IProduct } from '../types';

class ProductService {
	async getProducts() {
		return (
			await instance<IProduct[]>({
				method: 'GET',
				url: API.products(),
			}).catch((error) => {
				toast.error('Произошла ошибка при получении продуктов', {
					description: error.response?.data?.message || 'Неизвестная ошибка',
					descriptionClassName: 'text-muted-foreground!',
				});
				throw error;
			})
		).data;
	}
}

export const productService = new ProductService();
