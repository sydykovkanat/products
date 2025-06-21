import { PropsWithChildren } from 'react';

import { cn } from '@/shared/utils/clsx.utils';

interface Props extends PropsWithChildren {
	className?: string;
	borderX?: boolean;
}

export function Container({ className, borderX = false, children }: Props) {
	return (
		<div
			className={cn(
				'mx-auto w-full max-w-7xl px-4',
				{
					'border-x border-dashed': borderX,
				},
				className,
			)}
		>
			{children}
		</div>
	);
}
