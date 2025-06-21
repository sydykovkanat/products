import type { Metadata } from 'next';

import { Button } from '@/shared/components/ui';

export const metadata: Metadata = {
	title: 'Главная',
	description: 'Главная страница приложения',
};

export default function Page() {
	return (
		<div>
			<Button>Кнопка</Button>
		</div>
	);
}
