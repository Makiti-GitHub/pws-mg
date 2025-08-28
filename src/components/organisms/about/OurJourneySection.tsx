import TimelineCard from '@/components/molecules/cards/TimelineCard'
import SectionHeader from '@/components/molecules/SectionHeader'
import { journeyListMock } from '@/data/mock'
import { cn } from '@/lib/utils'
import { FC } from 'react'
import { useTranslation } from 'react-i18next'

interface OurJourneySectionProps {
	className?: string
}

const OurJourneySection: FC<OurJourneySectionProps> = ({ className }) => {
	const { t } = useTranslation()
	return (
		<section className={cn('flex flex-col gap-6 pb-16', className)}>
			<SectionHeader
				title={t('pages.about.sections.ourJourney.title')}
				subTitle={t('pages.about.sections.ourJourney.subtitle')}
			/>

			<div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8">
				{journeyListMock.map((journey, index) => (
					<TimelineCard
						key={`journey-${index}`}
						timeline={journey}
						translation={t(
							`pages.about.sections.ourJourney.timeline.checkpoint${index + 1}`,
						)}
					/>
				))}
			</div>
		</section>
	)
}

export default OurJourneySection
