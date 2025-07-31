import SectionHeader from '@/components/molecules/SectionHeader'
import { cn } from '@/lib/utils'
import { FC } from 'react'
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from '@/components/ui/carousel'
import { teamMemberMock } from '@/data/mock'
import TeamMemberCard from '@/components/molecules/cards/TeamMemberCard'
import { useTranslation } from 'react-i18next'

interface OurTeamSectionProps {
	className?: string
}

const OurTeamSection: FC<OurTeamSectionProps> = ({ className }) => {
	const { t } = useTranslation()
	return (
		<section
			id="teams"
			className={cn('flex scroll-mt-[150px] flex-col gap-6 pb-16', className)}
		>
			<SectionHeader
				title={t('pages.about.sections.meetOurTeam.title')}
				subTitle={t('pages.about.sections.meetOurTeam.subtitle')}
			/>

			<div className="relative mt-20 md:mt-10">
				<Carousel
					className="w-full relative"
					opts={{
						align: 'start',
						loop: true,
					}}
				>
					<CarouselContent>
						{teamMemberMock.map((member, index) => (
							<CarouselItem
								className="basis-full sm:basis-1/2 xl:basis-1/3 2xl:basis-1/4"
								key={index}
							>
								<TeamMemberCard member={member} />
							</CarouselItem>
						))}
					</CarouselContent>
					<div className="absolute -top-10 right-8">
						<CarouselPrevious className="hover:cursor-pointer bg-white dark:bg-white hover:bg-white/80 dark:hover:bg-white/80 hover:text-black/90 dark:border-transparent glassy_navbar2" />
					</div>

					<div className="absolute -top-10 right-12">
						<CarouselNext
							size={'icon'}
							className="hover:cursor-pointer bg-white dark:bg-white hover:bg-white/80 dark:hover:bg-white/80 hover:text-black/90 dark:border-transparent glassy_navbar2"
						/>
					</div>
				</Carousel>
			</div>
		</section>
	)
}

export default OurTeamSection
