export const API = {
	products: (id: string = '') => `/products${id ? `/${id}` : ''}`,
};
