import SectionHeader from '@/components/molecules/SectionHeader'
import { cn } from '@/lib/utils'
import { FC } from 'react'

interface OurTeamSectionProps {
	className?: string
}

const OurTeamSection: FC<OurTeamSectionProps> = ({ className }) => {
	return (
		<section className={cn('flex flex-col gap-6 pb-16', className)}>
			<SectionHeader
				title="Meet Our Team"
				subTitle="The talented professionals behind our success"
			/>
		</section>
	)
}

export default OurTeamSection
