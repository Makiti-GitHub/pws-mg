import type { FC } from 'react'

interface SectionHeaderProps {
	title: string
	subTitle: string
}

const SectionHeader: FC<SectionHeaderProps> = ({ title, subTitle }) => {
	return (
		<div className="text-center tracking-normal">
			<h2 className="font-bold text-[#020304] text-5xl">{title}</h2>
			<p className="text-xl font-normal text-[#44474A]">{subTitle}</p>
		</div>
	)
}

export default SectionHeader
