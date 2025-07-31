import { useFloatingCursor } from '@/hooks/guard/ContextGuard'
import type { FC } from 'react'

interface SectionHeaderProps {
	title: string
	subTitle: string
}

const SectionHeader: FC<SectionHeaderProps> = ({ title, subTitle }) => {
	const { setCursorVariant } = useFloatingCursor()
	return (
		<div className="text-center tracking-normal space-y-3 flex flex-col items-center">
			<h2
				onMouseEnter={() => setCursorVariant('text')}
				onMouseLeave={() => setCursorVariant('default')}
				className="font-seravek_bold text-on-surface text-4xl sm:text-5xl"
			>
				{title}
			</h2>
			<h3 className="text-lg sm:text-xl text-[#44474A] max-w-[1000px]">{subTitle}</h3>
		</div>
	)
}

export default SectionHeader
