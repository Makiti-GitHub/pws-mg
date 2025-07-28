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

const Project: PageComponent = () => {
	const navigate = useNavigate()

	const { id } = useParams()

	const project = useMemo(() => {
		return successStoriesMock.find((story) => story.id === id)
	}, [])

	return (
		<main className="flex flex-col gap-8 relative">
			<div className="px-8 md:px-[80px] lg:px-[120px] pt-[150px] relative bg-secondary">
				<div className="relative bg-secondary">
					<Button
						variant={'ghost'}
						onClick={() => navigate('/')}
						className="text-secondary !py-3 !px-5 !h-max hover:cursor-pointer bg-white box_shadow_products_card !font-seravek_medium !text-base"
					>
						<ArrowLeftIcon className="size-6" />
						<span className="sr-only">Back to home</span>
						<span>Back to home</span>
					</Button>

					{project ? (
						<div className="w-full grid xl:grid-cols-2 gap-[52px] pt-[61px] pb-[45px]">
							<div className="flex flex-col gap-8 text-white">
								<div className="flex flex-col gap-5">
									<span className="rounded-2xl w-max px-3 py-1.5 border-2 border-white">
										{project.category}
									</span>
									<div className="space-y-2">
										<h1 className="font-seravek_medium text-5xl leading-16 xl:leading-20">
											{project.title}
										</h1>
										<p className="text-lg leading-normal">
											{project.description}
										</p>
									</div>
								</div>
								<div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-surface text-center">
									<div className="flex flex-col gap-2 items-center">
										<CalendarIcon className="size-8" />
										<div className="space-y-1">
											<p className="text-sm">Durée du projet</p>
											<p className="font-seravek_bold text-base">6 Mois</p>
										</div>
									</div>

									<div className="flex flex-col gap-2 items-center">
										<UsersIcon className="size-8" />
										<div className="space-y-1">
											<p className="text-sm">Taille de l'équipe</p>
											<p className="font-seravek_bold text-base">
												4 Développeurs
											</p>
										</div>
									</div>

									<div className="flex flex-col gap-2 items-center">
										<DollarSignIcon className="size-8" />
										<div className="space-y-1">
											<p className="text-sm">Investment</p>
											<p className="font-seravek_bold text-base">$150,000</p>
										</div>
									</div>

									<div className="flex flex-col gap-2 items-center">
										<BoxesIcon className="size-8" />
										<div className="space-y-1">
											<p className="text-sm">Industry</p>
											<p className="font-seravek_bold text-base">
												Transportation
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
				<div className="px-8 md:px-[80px] lg:px-[120px] relative space-y-8">
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
										<span className="font-seravek_medium">The Challenge:</span>{' '}
										<span>{project.challenges.title}</span>
									</h2>
								</div>

								<p className="text-lg text-on-surface-variant">
									{project.resultsAchieved?.description}
								</p>
							</div>
							<div className="space-y-6">
								<h3 className="font-seravek_medium text-on-surface text-xl md:text-2xl lg:text-[28px]">
									Key Problems Identified:
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
					<div className="px-4 py-5 rounded-xl space-y-12 box_shadow_products_card">
						<div className="space-y-6">
							<div className="flex items-center gap-2">
								<CodeIcon className="size-6 text-secondary" />
								<h2 className="font-seravek_medium text-on-surface text-xl md:text-2xl lg:text-[28px]">
									Our Solution
								</h2>
							</div>

							<p className="text-lg text-on-surface-variant">
								{project.resultsAchieved?.description}
							</p>
						</div>
						<div className="space-y-6">
							<h3 className="font-seravek_medium text-on-surface-variant text-2xl">
								Development Approach:
							</h3>

							{project.solution?.phases?.map((item, index) => (
								<div
									key={`phase-${index}`}
									className="p-5 space-y-6 rounded-xl border-[0.75px] border-outline-variant"
								>
									<div className="flex items-center justify-between">
										<h4 className="font-seravek_medium text-on-surface-variant text-2xl">
											{item.label}
										</h4>

										<span className="border-[0.5px] border-outline px-2 py-1 rounded-sm font-seravek_medium text-xl text-on-surface">
											{item.duration} weeks
										</span>
									</div>
									<ul className="grid sm:grid-cols-2 gap-4">
										{item.achievements.map((achievement, index) => (
											<li
												key={`project-${id}-solution-${item.label}-achievement-${index}`}
												className="text-lg text-on-surface-variant gap-3 flex items-center"
											>
												<CircleCheckBigIcon className="text-success size-6" />
												<span className="flex-1">{achievement}</span>
											</li>
										))}
									</ul>
								</div>
							))}
						</div>
						<div className="space-y-2">
							<h3 className="font-seravek_medium text-on-surface-variant text-2xl">
								Technologies utilisées
							</h3>
							<div className="flex">
								{project.techs?.map((item, index) => (
									<div
										key={`technology-${index}`}
										className={`size-12 rounded-sm bg-[#F0F0F0] border-[1.5px] flex items-center justify-center ${
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
						<div className="space-y-6">
							<h3 className="font-seravek_medium text-on-surface text-[28px]">
								Key Achievements
							</h3>
							<ul className="space-y-3">
								{project.solution?.achievements.map((achievement, index) => (
									<li
										key={`project-${id}-achievement-${index}`}
										className="text-lg text-on-surface-variant gap-3 flex items-center"
									>
										<CircleCheckBigIcon className="text-success size-6" />
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
									<TrendingUpIcon className="size-8 text-success" />
									<span className="font-seravek_medium text-on-surface text-[28px]">
										Results Achieved
									</span>
								</div>

								<p className="text-lg text-on-surface-variant">
									{project.resultsAchieved.description}
								</p>
							</div>
							<div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
								{project.resultsAchieved.stats.map((result, index) => (
									<div
										key={`project-${id}-stat-${index}`}
										className="p-6 rounded-xl gap-2 flex flex-col items-center justify-between bg-surface-container"
									>
										<p
											className={`font-seravek_medium text-5xl text-center`}
											style={{ color: result.color }}
										>
											<span>{`${index === 1 ? '-' : '+'}`}</span>
											<span>
												<AnimatedCounter from={0} to={result.count} />
											</span>
											<span>%</span>
										</p>
										<p className="text-center text-on-surface-variant text-base">
											{result.label}
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
											<div className="w-8 h-auto bg-white-300 inline-block">
												<Image
													src={quoteIcon}
													alt={'quote icon'}
													width={'100%'}
													height={'100%'}
													className="size-full aspect-auto object-contain"
												/>
											</div>
											<span className="font-seravek_medium text-on-surface text-[28px]">
												Client Testimonial
											</span>
										</div>

										<p className="font-seravek_medium_italic text-lg text-on-surface-variant">{`"${testimonial.quote}"`}</p>
									</div>
									<div className="flex items-center justify-between gap-8">
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
												<p className="font-seravek_medium text-on-surface text-2xl sm:text-[28px]">
													{testimonial.user.name}
												</p>
												<p className="text-outline text-lg sm:text-xl">
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
						title="Interested in Similar Results?"
						desc="Let's discuss how we can help you achieve similar results with our expert IT outsourcing services."
					>
						{/* <MotionIconButton2
							label="Let's Talk"
							className="rounded-4xl h-max px-4 py-3 gap-1 text-lg font-seravek_medium"
						/> */}

						<Button
							variant="primary"
							className="rounded-4xl h-max px-5 py-3 gap-1 w-full max-w-[642px] hover:cursor-pointer"
						>
							<span className="sr-only">Start Your Project</span>{' '}
							<span className="text-lg font-seravek_medium">Start Your Project</span>{' '}
							<ArrowUpRightIcon className="size-6" />
						</Button>
					</Banner>
				</div>
			) : null}
		</main>
	)
}

Project.path = '/:locale?/portfolio/:id'
Project.metadata = {
	title: 'Project',
	description: 'Project page',
}

export default Project
