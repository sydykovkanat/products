import { Container } from '@/shared/components/shared';

interface Props {
	id: number;
}

export function OneProduct({ id }: Props) {
	return (
		<Container borderX className='h-full grow py-4'>
			one-product {id}
		</Container>
	);
}
