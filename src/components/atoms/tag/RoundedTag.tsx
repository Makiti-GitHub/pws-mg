import { cn } from '@/lib/utils'
import { FC } from 'react'

interface RoundedTagProps {
	className?: string
	label: string
}
const RoundedTag: FC<RoundedTagProps> = ({ label, className }) => {
	return (
		<span
			className={cn(
				'border-[0.5px] border-outline-variant px-3 py-1 rounded-[4px]',
				className,
			)}
		>
			{label}
		</span>
	)
}

export default RoundedTag
