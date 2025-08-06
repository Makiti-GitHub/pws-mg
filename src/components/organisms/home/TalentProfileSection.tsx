import SectionHeader from '@/components/molecules/SectionHeader'
import { Button } from '@/components/ui/button'
import { talentProfilesMock } from '@/data/mock'
import { ArrowRightIcon } from 'lucide-react'

import clockIcon from '@/assets/images/Find the talent you need/iconsax-clock.svg'
import locationIcon from '@/assets/images/Find the talent you need/iconsax-location.svg'
import { useState } from 'react'
import { Link } from 'rasengan'
import Image from '@rasenganjs/image'
import { useTranslation } from 'react-i18next'
import { useFloatingCursor } from '@/hooks/guard/ContextGuard'

const TalentProfileSection = () => {
	const { t } = useTranslation()
	const { setCursorVariant } = useFloatingCursor()

	const [selectedTalent, setSelectedTalent] = useState<(typeof talentProfilesMock)[number]>(
		talentProfilesMock[0],
	)

	return (
		<section className="px-4 sm:px-8 md:px-[80px] lg:px-[120px] w-screen pb-16">
			<div className="flex flex-col gap-8">
				<SectionHeader
					title={t('pages.home.sections.findTheTalentYouNeed.title')}
					subTitle={t('pages.home.sections.findTheTalentYouNeed.subtitle')}
				/>

				<div className="grid grid-cols-6 lg:grid-cols-12 gap-5 sm:gap-8">
					<aside className="space-y-5 sm:space-y-[26px] col-span-6 lg:col-span-4">
						{talentProfilesMock.map((profile, index) => (
							<Link
								to={`#talent`}
								key={`talent-profile-${index}`}
								onClick={() => setSelectedTalent(profile)}
								onMouseEnter={() => setCursorVariant('button')}
								onMouseLeave={() => setCursorVariant('default')}
								className={`${
									profile.title === selectedTalent.title
										? 'bg-surface-container border-[#44474A]'
										: 'border-[#C4C7CA]'
								} px-3 sm:px-6 hover:cursor-pointer hover:bg-surface-container py-4 border-[0.75px] rounded-xl flex gap-2.5`}
							>
								<Image
									src={profile.icon}
									alt={profile.title}
									width={32}
									height={32}
									className="size-8 object-contain aspect-auto"
								/>

								<div className="flex flex-col gap-2 sm:text-xl">
									<p className="text-on-surface">
										{t(
											`pages.home.sections.findTheTalentYouNeed.talents.${profile.category}.title`,
										)}
									</p>
									<p className="text-[#73777C] font-seravek_mediuml">
										{t(
											'pages.home.sections.findTheTalentYouNeed.requestQuote.pricePerHour',
											{ price: profile.hourCost },
										)}
									</p>
								</div>
							</Link>
						))}
					</aside>

					<div
						id="talent"
						className="col-span-6 scroll-mt-[150px] lg:scroll-mt-[250px] lg:col-span-8 space-y-5 sm:space-y-8 rounded-xl border-[0.75px] px-3 sm:px-6 py-6 border-outline-variant"
					>
						<div className="flex gap-4">
							<div className="p-2.5 rounded-sm bg-surface-container flex items-center justify-center">
								<div className="size-8">
									<img
										src={selectedTalent.icon}
										alt={selectedTalent.title}
										className="size-full object-contain aspect-auto"
									/>
								</div>
							</div>
							<div className="flex flex-col gap-2 w-full">
								<p className="text-on-surface">
									{t(
										`pages.home.sections.findTheTalentYouNeed.talents.${selectedTalent.category}.title`,
									)}
								</p>
								<div className="text-outline font-seravek_medium text-base gap-3.5 flex items-center">
									<div className="flex items-center gap-2">
										<img
											src={clockIcon}
											alt="clock icon"
											className="size-5 object-contain aspect-auto"
										/>
										<span>
											{selectedTalent.expYear}+ {t('years')}
										</span>
									</div>
									<div className="flex items-center gap-2">
										<img
											src={locationIcon}
											alt="location icon"
											className="size-5 object-contain aspect-auto"
										/>
										<span>{t(selectedTalent.location)}</span>
									</div>
								</div>
							</div>
						</div>

						<p className="font-seravek_medium text-base text-outline">
							{t(
								`pages.home.sections.findTheTalentYouNeed.talents.${selectedTalent.category}.description`,
							)}
						</p>

						<div className="space-y-3 sm:space-y-4">
							<p className="text-on-surface text-2xl font-seravek_medium">
								{t('pages.home.sections.findTheTalentYouNeed.keySkills')}
							</p>
							<div className="flex flex-wrap gap-3">
								{selectedTalent.skills.map((skill, index) => (
									<span
										key={`talent-skill-${index}-${skill}`}
										onMouseEnter={() => setCursorVariant('text')}
										onMouseLeave={() => setCursorVariant('default')}
										className="border-[0.5px] border-outline-variant px-3 py-1 rounded-sm"
									>
										{skill}
									</span>
								))}
							</div>
						</div>

						<div className="rounded-xl space-y-4 sm:space-y-8 p-3 sm:p-6 bg-surface-container">
							<div className="space-y-6">
								<div className="space-y-1 font-seravek_medium">
									<p className="text-[#73777C] text-base">
										{t(
											'pages.home.sections.findTheTalentYouNeed.requestQuote.startingPrice',
										)}
									</p>
									<p className="text-2xl sm:text-[32px] text-secondary">
										{t(
											'pages.home.sections.findTheTalentYouNeed.requestQuote.pricePerHour',
											{ price: selectedTalent.hourCost },
										)}
									</p>
								</div>

								<Link to="#start-project">
									<Button
										variant="primary"
										onMouseEnter={() => setCursorVariant('button')}
										onMouseLeave={() => setCursorVariant('default')}
										className="rounded-4xl w-full h-max !py-2.5 sm:!py-[13px] hover:cursor-pointer"
									>
										<span className="sr-only">Request Quote</span>{' '}
										<span className="text-lg font-seravek_medium">
											{t(
												'pages.home.sections.findTheTalentYouNeed.requestQuote.cta',
											)}
										</span>{' '}
										<ArrowRightIcon className="size-6" />
									</Button>
								</Link>
							</div>

							<p className="text-center font-seravek_medium text-[#73777C] text-base">
								{t('pages.home.sections.findTheTalentYouNeed.requestQuote.info')}
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default TalentProfileSection
