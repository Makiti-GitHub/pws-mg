import OurCoreValuesSection from '@/components/organisms/about/OurCoreValuesSection'
import OurJourneySection from '@/components/organisms/about/OurJourneySection'
import OurTeamSection from '@/components/organisms/about/OurTeamSection'
import Statistics from '@/components/organisms/Statistics'
import { Button } from '@/components/ui/button'
import { ArrowLeftIcon } from 'lucide-react'
import circleIcon from '@/assets/images/Find the talent you need/Vector.svg'
import bulbIcon from '@/assets/images/Find the talent you need/famicons_bulb-outline.svg'

import { PageComponent, useNavigate } from 'rasengan'
import { useTranslation } from 'react-i18next'
import { useFloatingCursor } from '@/hooks/guard/ContextGuard'

const About: PageComponent = () => {
	const navigate = useNavigate()
	const { t, i18n } = useTranslation()
	const { setCursorVariant } = useFloatingCursor()

	return (
		<main className="flex flex-col gap-4 sm:gap-8 pt-[150px] relative px-4 sm:px-8 md:px-[80px] lg:px-[120px]">
			<div className="space-y-8 relative">
				<Button
					variant={'ghost'}
					onClick={() => navigate(`/${i18n.language}/en/`)}
					onMouseEnter={() => setCursorVariant('button')}
					onMouseLeave={() => setCursorVariant('default')}
					className="xl:absolute xl:left-0 xl:top-0 text-secondary py-2 sm:!py-3 px-3 sm:!px-5!h-max hover:cursor-pointer bg-white box_shadow_products_card !font-seravek_medium !text-base"
				>
					<ArrowLeftIcon className="size-6" />
					<span className="sr-only">Back to home</span>
					<span>{t('common.backToHomeCta')}</span>
				</Button>

				<h1 className="text-on-surface text-4xl sm:text-5xl font-seravek_bold text-center">
					{t('pages.about.title')}
				</h1>

				<div className="text-on-surface-variant text-center space-y-6">
					<p className="text-lg sm:text-xl">{t('pages.about.subtitle')}</p>
					<div className="space-y-3">
						<h2 className="text-2xl sm:text-[28px] font-seravek_medium text-center">
							{t('pages.about.sections.theStoryOfMakiti.title')}
						</h2>
						<div className="text-lg sm:text-xl">
							<p>{t('pages.about.sections.theStoryOfMakiti.p1')}</p>
							<p>{t('pages.about.sections.theStoryOfMakiti.p2')}</p>
						</div>
					</div>
					<div className="space-y-3">
						<h2 className="text-2xl sm:text-[28px] font-seravek_medium text-center">
							{t('pages.about.sections.growthAndAchievements.title')}
						</h2>

						<div className="text-lg sm:text-xl">
							<p>{t('pages.about.sections.growthAndAchievements.p1')}</p>

							<p>
								{t('pages.about.sections.growthAndAchievements.p2')}{' '}
								<a
									href="https://agency.matoa.io"
									target="_blank"
									rel="noopener noreferrer"
									className="underline text-primary"
								>
									<span>MATOA</span>
								</a>{' '}
								{t('and')}{' '}
								<a
									href="https://lyssafi.com"
									target="_blank"
									rel="noopener noreferrer"
									className="underline text-primary"
								>
									<span>LYSSAFI</span>
								</a>
								.
							</p>

							<p>{t('pages.about.sections.growthAndAchievements.p3')}</p>

							<p>{t('pages.about.sections.growthAndAchievements.p4')}</p>
						</div>
					</div>
				</div>

				<div className="grid grid-cols-1 lg:grid-cols-2 gap-3 sm:gap-6 pt-2.5 pb-2 sm:pb-8">
					<div className="px-4 py-5 rounded-xl bg-white box_shadow_products_card">
						<div className="">
							<div className="flex items-center gap-2">
								<div className="size-8 sm:size-9 rounded-[6px] bg-surface-variant flex items-center justify-center">
									<div className="size-5 sm:size-6">
										<img
											src={circleIcon}
											alt="circle icon"
											className="size-full object-contain aspect-auto"
										/>
									</div>
								</div>
								<span className="text-2xl sm:text-[28px] font-seravek_medium text-on-surface">
									{t('pages.about.sections.ourMission.title')}
								</span>
							</div>
							<div>
								<p className="text-on-surface-variant text-base sm:text-lg">
									{t('pages.about.sections.ourMission.body')}
								</p>
							</div>
						</div>
					</div>
					<div className="px-4 py-5 rounded-xl bg-white box_shadow_products_card">
						<div className="">
							<div className="flex items-center gap-2">
								<div className="size-8 sm:size-9 rounded-[6px] bg-surface-variant flex items-center justify-center">
									<div className="size-5 sm:size-6">
										<img
											src={bulbIcon}
											alt="buld icon"
											className="size-full object-contain aspect-auto"
										/>
									</div>
								</div>
								<span className="text-2xl sm:text-[28px] font-seravek_medium text-on-surface">
									{t('pages.about.sections.ourVision.title')}
								</span>
							</div>
							<div>
								<p className="text-on-surface-variant text-base sm:text-lg">
									{t('pages.about.sections.ourVision.body')}
								</p>
							</div>
						</div>
					</div>
				</div>

				<div className="pb-8">
					<Statistics />
				</div>

				{/** == Our Team == */}
				<OurTeamSection className="pb-8" />

				{/* == Our Journey == */}
				<OurJourneySection className="pb-8" />

				{/* == Our Course == */}
				<OurCoreValuesSection className="pb-8" />
			</div>
		</main>
	)
}

About.path = '/:locale?/about'
About.metadata = {
	title: 'About',
	description: 'About page',
}

export default About
