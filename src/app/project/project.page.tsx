import Banner from '@/components/molecules/banner/Banner'
import { Button } from '@/components/ui/button'
import { successStoriesMock, techStackMock } from '@/data/mock'
import Image from '@rasenganjs/image'
import {
	ArrowLeftIcon,
	ArrowUpRightIcon,
	BoxesIcon,
	CalendarIcon,
	CircleCheckBigIcon,
	CodeIcon,
	DollarSignIcon,
	StarIcon,
	TrendingUpIcon,
	UsersIcon,
} from 'lucide-react'
import { PageComponent, useNavigate, useParams } from 'rasengan'
import { useMemo } from 'react'
import quoteIcon from '@/assets/images/Testimonial/quote.svg'
import AnimatedCounter from '@/components/atoms/animations/AnimatedCounter'
import circleIcon from '@/assets/images/Find the talent you need/vector-orange.svg'
import { useFloatingCursor } from '@/hooks/guard/ContextGuard'
import { useTranslation } from 'react-i18next'

const Project: PageComponent = () => {
	const navigate = useNavigate()
	const { t, i18n } = useTranslation()
	const { setCursorVariant } = useFloatingCursor()

	const { id } = useParams()

	const project = useMemo(() => {
		return successStoriesMock.find((story) => story.id === id)
	}, [])

	return (
		<main className="flex flex-col gap-4 sm:gap-8 relative w-screen">
			<div className="px-4 sm:px-8 md:px-[80px] lg:px-[120px] pt-6 relative bg-secondary">
				<div className="relative bg-secondary">
					<Button
						variant={'ghost'}
						onClick={() => navigate(`/${i18n.language}/portfolio`)}
						onMouseEnter={() => setCursorVariant('button')}
						onMouseLeave={() => setCursorVariant('default')}
						className="text-secondary py-2 sm:!py-3 px-3 sm:!px-5 !h-max hover:cursor-pointer bg-white box_shadow_products_card !font-seravek_medium !text-base"
					>
						<ArrowLeftIcon className="size-5 sm:size-6" />
						<span className="sr-only">Back to Portfolio</span>
						<span>{t('common.backToPortfolioCta')}</span>
					</Button>

					{project ? (
						<div className="w-full grid xl:grid-cols-2 gap-[52px] pt-[61px] pb-[45px]">
							<div className="flex flex-col gap-8 text-white">
								<div className="flex flex-col gap-5">
									<span className="rounded-xl sm:rounded-2xl text-sm sm:text-base w-max px-3 py-1.5 border-2 border-white">
										{t(
											`pages.portfolio.projects.card.category.${project.categoryTypes[0]}`,
										)}
									</span>
									<div className="space-y-2">
										<h1
											onMouseEnter={() => setCursorVariant('text')}
											onMouseLeave={() => setCursorVariant('default')}
											className="font-seravek_medium w-max text-3xl sm:text-5xl sm:leading-16 xl:leading-20"
										>
											{project.title}
										</h1>
										<p className="text-base sm:text-lg leading-normal">
											{project.description}
										</p>
									</div>
								</div>
								<div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-surface text-center">
									<div className="flex flex-col gap-2 items-center">
										<CalendarIcon className="size-8" />
										<div className="space-y-1">
											<p className="text-sm">{t('projectDuration')}</p>
											<p className="font-seravek_bold text-base">6 Mois</p>
										</div>
									</div>

									<div className="flex flex-col gap-2 items-center">
										<UsersIcon className="size-8" />
										<div className="space-y-1">
											<p className="text-sm">{t('teamSize')}</p>
											<p className="font-seravek_bold text-base">
												{`${project.teamSize} ${t('developers')}`}
											</p>
										</div>
									</div>

									<div className="flex flex-col gap-2 items-center">
										<DollarSignIcon className="size-8" />
										<div className="space-y-1">
											<p className="text-sm">{t('investment')}</p>
											<p className="font-seravek_bold text-base">$150,000</p>
										</div>
									</div>

									<div className="flex flex-col gap-2 items-center">
										<BoxesIcon className="size-8" />
										<div className="space-y-1">
											<p className="text-sm">{t('industry')}</p>
											<p className="font-seravek_bold text-base">
												{t(
													`pages.portfolio.projects.card.industry.${project.tags[0].type}`,
												)}
											</p>
										</div>
									</div>
								</div>
							</div>
							<div className="">
								<Image
									src={project.image}
									alt={project.title}
									width={'100%'}
									height={'100%'}
									className="size-full aspect-auto object-cover rounded-lg"
								/>
							</div>
						</div>
					) : null}
				</div>
			</div>

			{project ? (
				<div className="px-4 sm:px-8 md:px-[80px] lg:px-[120px] relative space-y-8">
					{project.challenges ? (
						<div className="px-4 py-5 space-y-[35px] rounded-xl box_shadow_products_card">
							<div className="space-y-[15px]">
								<div className="flex items-center gap-2">
									<div className="size-6">
										<img
											src={circleIcon}
											alt="circle icon"
											className="size-full object-contain aspect-auto"
										/>
									</div>
									<h2 className="text-on-surface text-xl md:text-2xl lg:text-[28px] flex-1">
										<span className="font-seravek_medium">
											{t('pages.portfolio.sections.challenge.title')}:
										</span>{' '}
										<span>{project.challenges.title}</span>
									</h2>
								</div>

								<p className="text-lg text-on-surface-variant">
									{project.resultsAchieved?.description}
								</p>
							</div>
							<div className="space-y-6">
								<h3 className="font-seravek_medium text-on-surface text-xl md:text-2xl lg:text-[28px]">
									{t('pages.portfolio.sections.challenge.problems.title')}:
								</h3>
								<ul className="grid sm:grid-cols-2 gap-4">
									{project.challenges.problems.map((achievement, index) => (
										<li
											key={`project-${id}-achievement-${index}`}
											className="text-base sm:text-lg text-on-surface-variant gap-3 flex"
										>
											<div className="size-3 rounded-full bg-primary mt-0.5" />
											<span className="leading-none flex-1">
												{achievement}
											</span>
										</li>
									))}
								</ul>
							</div>
						</div>
					) : null}
					<div className="px-4 py-5 rounded-xl space-y-8 sm:space-y-12 box_shadow_products_card">
						<div className="space-y-3 sm:space-y-6">
							<div className="flex items-center gap-2">
								<CodeIcon className="size-6 text-secondary" />
								<h2 className="font-seravek_medium text-on-surface text-xl md:text-2xl lg:text-[28px]">
									{t('pages.portfolio.sections.solution.title')}
								</h2>
							</div>

							<p className="text-base sm:text-lg text-on-surface-variant">
								{project.resultsAchieved?.description}
							</p>
						</div>
						<div className="space-y-4 sm:space-y-6">
							<h3 className="font-seravek_medium text-on-surface-variant text-xl sm:text-2xl">
								{t('pages.portfolio.sections.solution.developmentApproach.title')}:
							</h3>

							{project.solution?.phases?.map((item, index) => (
								<div
									key={`phase-${index}`}
									className="p-3 sm:p-5 space-y-4 sm:space-y-6 rounded-xl border-[0.75px] border-outline-variant"
								>
									<div className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-center justify-between">
										<h4 className="font-seravek_medium text-on-surface-variant text-xl sm:text-2xl">
											{t(
												`pages.portfolio.sections.solution.developmentApproach.phases.${item.category}`,
											)}
										</h4>

										<span className="border-[0.5px] border-outline px-2 py-1 rounded-sm font-seravek_medium text-lg sm:text-xl text-on-surface">
											{`${item.duration} ${t('weeks').toLowerCase()}`}
										</span>
									</div>
									<ul className="grid sm:grid-cols-2 gap-2 sm:gap-4">
										{item.achievements.map((achievement, index) => (
											<li
												key={`project-${id}-solution-${item.label}-achievement-${index}`}
												className="text-base sm:text-lg text-on-surface-variant gap-3 flex items-center"
											>
												<CircleCheckBigIcon className="text-success size-5 sm:size-6" />
												<span className="flex-1">{achievement}</span>
											</li>
										))}
									</ul>
								</div>
							))}
						</div>
						<div className="space-y-2">
							<h3 className="font-seravek_medium text-on-surface-variant text-xl sm:text-2xl">
								{t('pages.portfolio.sections.solution.techsUsed.title')}
							</h3>
							<div className="flex">
								{project.techs?.map((item, index) => (
									<div
										key={`technology-${index}`}
										className={`size-10 sm:size-12 rounded-sm bg-[#F0F0F0] border-[1.5px] flex items-center justify-center ${
											index % 2 === 0 ? 'rotate-6' : '-rotate-6'
										}`}
									>
										<Image
											src={techStackMock[item]}
											width={'100%'}
											height={'100%'}
											alt={`${item}`}
											className="object-contain aspect-auto"
										/>
									</div>
								))}
							</div>
						</div>
						<div className="space-y-2 sm:space-y-6">
							<h3 className="font-seravek_medium text-on-surface text-2xl sm:text-[28px]">
								{t('pages.portfolio.sections.solution.keyAchievements.title')}
							</h3>
							<ul className="space-y-1.5 sm:space-y-3">
								{project.solution?.achievements.map((achievement, index) => (
									<li
										key={`project-${id}-achievement-${index}`}
										className="text-base sm:text-lg text-on-surface-variant gap-3 flex items-center"
									>
										<CircleCheckBigIcon className="text-success size-5 sm:size-6" />
										<span className="flex-1">{achievement}</span>
									</li>
								))}
							</ul>
						</div>
					</div>
					{project.resultsAchieved ? (
						<div className="px-4 py-5 space-y-[42px] rounded-xl box_shadow_products_card">
							<div className="space-y-5">
								<div className="flex items-center gap-2">
									<TrendingUpIcon className="size-6 sm:size-8 text-success" />
									<h2 className="font-seravek_medium text-on-surface text-2xl sm:text-[28px]">
										{t('pages.portfolio.sections.achievements.title')}
									</h2>
								</div>

								<p className="text-base sm:text-lg text-on-surface-variant">
									{project.resultsAchieved.description}
								</p>
							</div>
							<div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5">
								{project.resultsAchieved.stats.map((result, index) => (
									<div
										key={`project-${id}-stat-${index}`}
										className="p-4 sm:p-6 rounded-xl gap-2 flex flex-col items-center justify-between bg-surface-container"
									>
										<p
											className={`font-seravek_medium text-4xl sm:text-5xl text-center`}
											style={{ color: result.color }}
										>
											<span>{`${
												result.category === 'decrease' ? '-' : '+'
											}`}</span>
											<span>
												<AnimatedCounter from={0} to={result.count} />
											</span>
											<span>%</span>
										</p>
										<p className="text-center text-on-surface-variant text-base">
											{t(
												`pages.portfolio.sections.achievements.categories.${result.type}`,
											)}
										</p>
									</div>
								))}
							</div>
						</div>
					) : null}
					{project.testimonial
						? project.testimonial.map((testimonial, index) => (
								<div
									key={`project-${id}-testimonial-${index}`}
									className="px-4 py-5 space-y-[42px] rounded-xl box_shadow_products_card"
								>
									<div className="space-y-5">
										<div className="space-x-2">
											<div className="w-6 sm:w-8 h-auto bg-white-300 inline-block">
												<Image
													src={quoteIcon}
													alt={'quote icon'}
													width={'100%'}
													height={'100%'}
													className="size-full aspect-auto object-contain"
												/>
											</div>
											<span className="font-seravek_medium text-on-surface text-2xl sm:text-[28px]">
												{t(
													'pages.portfolio.sections.clientTestimonial.title',
												)}
											</span>
										</div>

										<p className="font-seravek_medium_italic text-base sm:text-lg text-on-surface-variant">{`"${testimonial.quote}"`}</p>
									</div>
									<div className="flex flex-col sm:flex-row items-center justify-between gap-8">
										<div className="flex items-center gap-2">
											<div className="size-14 sm:size-[71px] bg-slate-300 rounded-full">
												<Image
													src={testimonial.user.image}
													alt={testimonial.user.name}
													width={'100%'}
													height={'100%'}
													className="size-full aspect-auto object-contain"
												/>
											</div>
											<div className="space-y-1 text-sm">
												<p className="font-seravek_medium text-on-surface text-xl sm:text-[28px]">
													{testimonial.user.name}
												</p>
												<p className="text-outline text-base sm:text-xl">
													{testimonial.user.job}
												</p>
											</div>
										</div>
										<div className="flex items-center">
											{Array.from({ length: 5 }).map((_, index2) => (
												<StarIcon
													className="size-4 fill-[#E7B213] text-[#E7B213]"
													key={`tech-${id}-${index}-${index2}-star`}
												/>
											))}
										</div>
									</div>
								</div>
						  ))
						: null}

					<Banner
						variant="secondary"
						title={t('pages.portfolio.sections.banner.title')}
						desc={t('pages.portfolio.sections.banner.subtitle')}
					>
						<Button
							variant="primary"
							onMouseEnter={() => setCursorVariant('button')}
							onMouseLeave={() => setCursorVariant('default')}
							className="rounded-4xl h-max px-5 py-2 sm:py-3 gap-1 w-full max-w-[642px] hover:cursor-pointer"
						>
							<span className="sr-only">Start Your Project</span>{' '}
							<span className="text-base sm:text-lg font-seravek_medium">
								{t('pages.portfolio.sections.banner.cta')}
							</span>{' '}
							<ArrowUpRightIcon className="size-5 sm:size-6" />
						</Button>
					</Banner>
				</div>
			) : null}
		</main>
	)
}

Project.path = '/:id'
Project.metadata = {
	title: 'Project',
	description: 'Project page',
}

export default Project
