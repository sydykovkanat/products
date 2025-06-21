import { PropsWithChildren } from 'react';

import { Toaster } from '../components/ui';

import { TanstackQueryProvider } from './tanstack-query-provider';

export function Providers({ children }: PropsWithChildren) {
	return (
		<>
			<Toaster />
			<TanstackQueryProvider>{children}</TanstackQueryProvider>
		</>
	);
}
