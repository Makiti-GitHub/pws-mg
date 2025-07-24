import TimelineCard from '@/components/molecules/cards/TimelineCard'
import SectionHeader from '@/components/molecules/SectionHeader'
import { journeyListMock } from '@/data/mock'
import { cn } from '@/lib/utils'
import { FC } from 'react'

interface OurJourneySectionProps {
	className?: string
}

const OurJourneySection: FC<OurJourneySectionProps> = ({ className }) => {
	return (
		<section className={cn('flex flex-col gap-6 pb-16', className)}>
			<SectionHeader title="Our Journey" subTitle="Key milestones in our company evolution" />

			<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
				{journeyListMock.map((journey, index) => (
					<TimelineCard key={`journey-${index}`} timeline={journey} />
				))}
			</div>
		</section>
	)
}

export default OurJourneySection
