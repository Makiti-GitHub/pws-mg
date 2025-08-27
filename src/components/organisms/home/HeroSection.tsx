import BrandsCarousel from '@/components/molecules/carousel/BrandsCarousel'
import CustomCursor from '@/components/molecules/cursors/CustomCursor'
import { Separator } from '@/components/ui/separator'
import { heroCarousel, statisticsMock } from '@/data/mock'
import useIsTouchDevice from '@/hooks/useIsTouchDevice'
import useMouse from '@/hooks/useMouse'
import AnimatedCounter from '@/components/atoms/animations/AnimatedCounter'
import MotionIconButton from '@/components/atoms/buttons/MotionIconButton'
import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowDownIcon, ArrowLeftIcon, ArrowRightIcon } from 'lucide-react'
// import Image from '@rasenganjs/image'
import { Link } from 'rasengan'
import { useFloatingCursor } from '@/hooks/guard/ContextGuard'
import { useTranslation } from 'react-i18next'
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from '@/components/ui/carousel'
import useIsResponsive from '@/hooks/useIsResponsive'
import mask1 from '@/assets/images/HeroSection/mask1.svg'
import mask2 from '@/assets/images/HeroSection/mask2.svg'

const slidersVariants = {
	hover: {
		scale: 1.2,
	},
}
const dotsVariants = {
	initial: {
		y: 0,
	},
	active: {
		backgroundColor: '#F9B122',
		width: 30,
	},
	inactive: {
		backgroundColor: '#C4C7CA',
		//   transition: { type: "spring", stiffness: 1000, damping: "10" },
		transition: { duration: 2 },
	},
	hover: {
		scale: 1.1,
		transition: { duration: 0.2 },
	},
}

const HeroSection = () => {
	const { t, i18n } = useTranslation()
	const { isDesktop } = useIsTouchDevice()
	const { handleMouseLeave, handleMouseMove, cursorPosition, isHovering } = useMouse()
	const { setCursorVariant } = useFloatingCursor()

	const leftRef = useRef<HTMLButtonElement>(null)
	const rightRef = useRef<HTMLButtonElement>(null)
	const intervalRef = useRef<NodeJS.Timeout>(null)

	const isDesktopScreen = useIsResponsive({ width: 1024 })

	const [currentIndex, setCurrentIndex] = useState(0)
	const [direction, setDirection] = useState<'right' | 'left'>('left')

	// Auto-slide every 5 seconds
	useEffect(() => {
		intervalRef.current = setInterval(() => {
			handleNext()
		}, 5000)

		return () => {
			if (intervalRef.current) {
				clearInterval(intervalRef.current)
			}
		}
	}, [])

	// To reset the interval manually:
	const resetInterval = () => {
		if (intervalRef.current) {
			clearInterval(intervalRef.current)
		}
		intervalRef.current = setInterval(() => {
			handleNext()
		}, 5000)
	}

	const handleNext = () => {
		setDirection('right')
		rightRef?.current?.click()
		setCurrentIndex((prevIndex) => (prevIndex + 1 === heroCarousel.length ? 0 : prevIndex + 1))
	}

	const handlePrevious = () => {
		setDirection('left')
		leftRef?.current?.click()
		setCurrentIndex((prevIndex) =>
			prevIndex - 1 < 0 ? heroCarousel.length - 1 : prevIndex - 1,
		)
	}

	const handleDotClick = (index: number) => {
		setDirection(index > currentIndex ? 'right' : 'left')
		if (index > currentIndex) {
			rightRef?.current?.click()
		} else if (index < currentIndex) {
			leftRef?.current?.click()
		}
		resetInterval()
		setCurrentIndex(index)
		console.log(direction)
	}

	return (
		<section className={`space-y-12 sm:space-y-24 bg-secondary w-screen pt-[130px] pb-16`}>
			<div className="w-full grid grid-cols-4 lg:grid-cols-2 relative lg:min-h-screen">
				<div className="relative w-screen lg:w-auto sm:col-span-3 lg:col-span-1 z-[5]">
					<div className="absolute inset-0 size-full bg-secondary opacity-30 z-[2] lg:hidden" />
					<div
						style={{
							backgroundImage: isDesktopScreen
								? `url(${heroCarousel[currentIndex].image})`
								: undefined,
						}}
						className="lg:absolute md:min-h-[65dvh] w-screen lg:size-auto lg:inset-0 bg-no-repeat bg-cover flex flex-col items-center sm:items-start px-6 py-6 sm:pl-8 sm:pr-32 md:px-[80px] xl:pl-[120px] lg:pr-0 text-white gap-6 sm:gap-10"
					>
						<AnimatePresence>
							{heroCarousel[currentIndex] && (
								<>
									<motion.span
										initial={{ x: 50, opacity: 0 }}
										animate={{ x: 0, opacity: 1 }}
										exit={{ x: -50, opacity: 0 }}
										transition={{ duration: 0.8, delay: 0.2 }}
										key={`tag-${currentIndex}`}
										className="rounded-2xl w-max px-3 py-1.5 border-2 border-white z-[3]"
									>
										{t(`pages.home.sections.hero.item${currentIndex + 1}.tag`)}
									</motion.span>
									<motion.div
										initial={{ x: 50, opacity: 0 }}
										animate={{ x: 0, opacity: 1 }}
										exit={{ x: -50, opacity: 0 }}
										transition={{ duration: 0.8, delay: 0.4 }}
										key={heroCarousel[currentIndex].title}
										className="space-y-6 text-center sm:text-left z-[3]"
									>
										<motion.h1 className="font-seravek_bold text-4xl lg:text-6xl xl:text-[80px] leading-10 md:leading-14 lg:leading-16 xl:leading-20">
											{t(
												`pages.home.sections.hero.item${
													currentIndex + 1
												}.title`,
											)}
										</motion.h1>
										<motion.p className="font-seravek_bold text-lg sm:text-xl lg:text-[26px] leading-normal">
											{t(
												`pages.home.sections.hero.item${
													currentIndex + 1
												}.content`,
											)}
										</motion.p>
									</motion.div>
								</>
							)}
						</AnimatePresence>
						<Link to={`/${i18n.language}/#talent`} className="z-[3]">
							<MotionIconButton
								onMouseEnter={() => setCursorVariant('button')}
								onMouseLeave={() => setCursorVariant('default')}
								label={t(`pages.home.sections.hero.cta`)}
								className="rounded-[40px] px-4 py-3 xl:px-8 xl:py-6 h-max text-sm sm:text-xl lg:text-2xl"
							/>
						</Link>

						<div className="z-[3]">
							<AnimatePresence>
								{heroCarousel.length > 0 ? (
									<div className="w-max flex gap-4 items-center justify-between">
										<motion.div
											variants={slidersVariants}
											whileHover="hover"
											role="button"
											className="cursor-pointer"
											onClick={(e) => {
												handlePrevious()
												resetInterval()
												e.preventDefault()
												e.stopPropagation()
											}}
										>
											<ArrowLeftIcon className="size-7 text-white" />
										</motion.div>
										<div className="flex gap-2">
											{heroCarousel.map((_, index) => (
												<motion.div
													key={`carousel-dot-${index}`}
													className={`size-3 rounded-xl ${
														currentIndex === index
															? 'bg-primary'
															: 'bg-outline-variant'
													}`}
													onClick={(e) => {
														handleDotClick(index)
														e.stopPropagation()
													}}
													initial="initial"
													animate={
														currentIndex === index
															? 'active'
															: 'inactive'
													}
													whileHover="hover"
													role="button"
													variants={dotsVariants}
												/>
											))}
										</div>
										<motion.div
											variants={slidersVariants}
											whileHover="hover"
											role="button"
											className="cursor-pointer"
											onClick={(e) => {
												handleNext()
												resetInterval()
												e.preventDefault()
												e.stopPropagation()
											}}
										>
											<ArrowRightIcon className="size-7 text-white" />
										</motion.div>
									</div>
								) : null}
							</AnimatePresence>
						</div>
					</div>
				</div>

				<div className="size-full relative hidden lg:flex lg:col-span-1 lg:items-center">
					<div
						onMouseEnter={() => setCursorVariant('hide')}
						onMouseMove={handleMouseMove}
						onMouseLeave={() => {
							setCursorVariant('default')
							handleMouseLeave()
						}}
						onClick={(e) => {
							handleNext()
							resetInterval()
							e.preventDefault()
							e.stopPropagation()
						}}
						className={`w-full relative hover:cursor-none ease-in ${
							isDesktop ? 'custom-cursor' : ''
						} overflow-hidden min-h-[80vh] xl:h-min`}
					>
						<img
							className="absolute inset-0 scale-[350%] size-full z-[4]"
							src={mask1}
							alt="mask1"
						/>
						<img
							className="absolute left-0 top-0 scale-150 size-full z-[4]"
							src={mask2}
							alt="mask2"
						/>
						<div className="absolute inset-0 size-full mask-x-from-90% mask-y-from-75% mask-radial-from-40% mask-radial-to-80%">
							<Carousel
								className="w-full relative"
								opts={{
									align: 'start',
									loop: true,
								}}
							>
								<CarouselContent className="">
									{heroCarousel.map((item, index) => (
										<CarouselItem
											className={`basis-full`}
											key={`hero-item-${index}`}
										>
											<img
												src={item.image}
												alt={item.title}
												className="aspect-auto object-contain size-full"
											/>
											{/* <TestimonialCard testimonial={testimonial} /> */}
										</CarouselItem>
									))}
								</CarouselContent>
								<CarouselPrevious
									title={t('previous')}
									ref={leftRef}
									className="hidden"
								/>

								<CarouselNext title={t('next')} ref={rightRef} className="hidden" />
							</Carousel>

							{/* <AnimatePresence>
								{heroCarousel[currentIndex] && (
									<motion.div
										className="relative size-full"
										initial={{ x: 50, opacity: 0 }}
										animate={{ x: 0, opacity: 1 }}
										exit={{ x: -50, opacity: 0 }}
										transition={{ duration: 0.8, delay: 0.2 }}
										key={`hero-image-${currentIndex}`}
										onClick={(e) => {
											handleNext()
											e.preventDefault()
											e.stopPropagation()
										}}
									>
										<img
											src={heroCarousel[currentIndex].image}
											alt={heroCarousel[currentIndex].title}
											className="aspect-auto object-contain size-full"
										/>
									</motion.div>
								)}
							</AnimatePresence> */}
						</div>
						<CustomCursor position={cursorPosition} isVisible={isHovering} />
					</div>
				</div>
			</div>
			<div className="flex flex-col items-center justify-center">
				<Link to={`/${i18n.language}/#services`}>
					<div
						onMouseEnter={() => setCursorVariant('button')}
						onMouseLeave={() => setCursorVariant('default')}
						className="size-12 animate-bounce bg-secondary border-2 border-primary rounded-full flex items-center justify-center"
					>
						<ArrowDownIcon className="size-6 text-primary" />
					</div>
				</Link>
			</div>
			<div className="space-y-[60px] relative">
				<div className="px-3 sm:px-8 md:px-[80px] xl:px-[120px] z-[3] relative">
					<div className="absolute top-1/2 -translate-y-1/2 sm:bottom-0 backdrop-blur-[900px] -left-[150px] lg:-left-[300px] xl:-left-[450px] blur-3xl opacity-10 size-[300px] lg:size-[600px] xl:size-[900px] bg-primary rounded-e-full z-[2]" />
					<Separator className="w-full bg-surface-variant" />
				</div>
				<div className="px-3 sm:px-8 md:px-[80px] xl:px-[120px] flex justify-between z-[3]">
					<div className="flex flex-col xl:flex-row gap-8 justify-between w-full">
						<div className="space-y-4 xl:max-w-[600px] text-center md:text-left w-full">
							<h2
								onMouseEnter={() => setCursorVariant('text')}
								onMouseLeave={() => setCursorVariant('default')}
								className="font-seravek_medium text-[32px] underline text-primary"
							>
								{t('pages.home.sections.ourClients.title')}
							</h2>
							<p className="text-white text-2xl font-seravek_light">
								{t('pages.home.sections.ourClients.description')}
							</p>
						</div>
						<div className="flex flex-col md:flex-row md:justify-center 2xl:justify-between items-center gap-12">
							<div className="flex justify-center sm:justify-around w-full xl:w-auto gap-12">
								{statisticsMock.slice(0, 2).map((statistic, index) => (
									<div
										key={`hero-record-stats-1-${index}`}
										className="flex flex-1 flex-col tracking-normal font-normal gap-1 text-center"
									>
										<p
											onMouseEnter={() => setCursorVariant('text')}
											onMouseLeave={() => setCursorVariant('default')}
											className="text-6xl text-primary"
										>
											<span className="text-primary">
												<AnimatedCounter from={0} to={statistic.count} />
											</span>
											<span>+</span>
										</p>
										<p className="text-lg text-white whitespace-nowrap">
											{t(
												`pages.about.sections.statistics.stat.${statistic.transKey}`,
											)}
										</p>
									</div>
								))}
							</div>
							<div className="flex w-full justify-center sm:justify-around xl:w-auto gap-12">
								{statisticsMock.slice(2).map((statistic, index) => (
									<div
										key={`hero-record-stats-2-${index}`}
										className="flex flex-1 flex-col tracking-normal font-normal gap-1 text-center"
									>
										<p className="text-6xl text-primary">
											<span className="text-primary">
												<AnimatedCounter from={0} to={statistic.count} />
											</span>
											<span>+</span>
										</p>
										<p className="text-lg text-white whitespace-nowrap">
											{statistic.label}
										</p>
									</div>
								))}
							</div>
						</div>
					</div>
				</div>
				<div className="w-full overflow-hidden">
					<BrandsCarousel speed={25} pauseOnHover={true} />
				</div>
				<div className="px-3 sm:px-8 md:px-[80px] xl:px-[120px]">
					<Separator className="w-full bg-surface-variant" />
				</div>
			</div>
		</section>
	)
}

export default HeroSection
