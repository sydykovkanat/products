import type { Metadata } from 'next';

import { Container } from '@/shared/components/shared';
import { PAGES } from '@/shared/configs';

export const metadata: Metadata = {
	title: PAGES.HOME.title,
	description: PAGES.HOME.description,
};

export default function Page() {
	return (
		<Container borderX className='h-full grow py-4'>
			<p>
				Далеко-далеко, за словесными горами в стране гласных и согласных живут
				рыбные тексты. Моей реторический предупредила которой грустный раз
				вопрос использовало своих диких домах дороге безорфографичный великий
				страну послушавшись заголовок, вершину от всех свою.
			</p>
		</Container>
	);
}
