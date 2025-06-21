import { OneProduct } from './one-product';

interface Props {
	params: Promise<{
		id: string;
	}>;
}

export default async function Page({ params }: Props) {
	const { id } = await params;
	const productId = parseFloat(id);

	return <OneProduct id={productId} />;
}
