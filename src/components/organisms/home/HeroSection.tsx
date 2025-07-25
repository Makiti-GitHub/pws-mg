import BrandsCarousel from '@/components/molecules/carousel/BrandsCarousel'
import CustomCursor from '@/components/molecules/cursors/CustomCursor'
import { Separator } from '@/components/ui/separator'
import { statisticsMock } from '@/data/mock'
import useIsTouchDevice from '@/hooks/useIsTouchDevice'
import useMouse from '@/hooks/useMouse'

import heroImage from '@/assets/images/Hero Section/Image 01.png'
import AnimatedCounter from '@/components/atoms/animations/AnimatedCounter'
import MotionIconButton2 from '@/components/atoms/buttons/MotionIconButton2'

const HeroSection = () => {
	const { isDesktop } = useIsTouchDevice()
	const { handleMouseLeave, handleMouseMove, cursorPosition, isHovering } = useMouse()

	return (
		<section className={`space-y-24 bg-secondary w-screen pt-[150px] pb-16`}>
			<div className="w-full grid grid-cols-4 lg:grid-cols-2">
				<div className="flex flex-col gap-10 pl-8 md:px-[80px] lg:pl-[120px] lg:pr-0 text-white col-span-3 lg:col-span-1">
					<span className="rounded-2xl w-max px-3 py-1.5 border-2 border-white">
						IT OUTSOURCING
					</span>
					<div className="space-y-6 ">
						<h1 className="font-seravek_bold text-5xl lg:text-7xl xl:text-[80px] leading-16 xl:leading-20">
							Your Strategic IT Outsourcing Partner
						</h1>
						<p className="font-seravek_bold text-xl lg:text-[26px] leading-normal">
							Transform your business with our expert IT outsourcing solutions. From
							development to consulting, we deliver excellence across all technology
							domains.
						</p>
					</div>

					{/* <Button
						variant={'primary'}
						className="gap-1 w-max !px-8 !py-6 !h-max !m-0 rounded-[40px] hover:cursor-pointer"
					>
						<span className="sr-only">Discover Our Outsourcing Solutions</span>
						<span className="text-2xl">Discover Our Outsourcing Solutions</span>
						<ArrowUpRightIcon className="size-6" />
					</Button> */}

					<MotionIconButton2
						label="Discover Our Outsourcing Solutions"
						className="rounded-[40px] px-4 py-3 lg:px-8 lg:py-6 h-max text-xl lg:text-2xl"
					/>
				</div>
				<div
					onMouseMove={handleMouseMove}
					onMouseLeave={handleMouseLeave}
					className={`w-full relative hover:cursor-none ease-in hidden lg:block lg:col-span-1 ${
						isDesktop ? 'custom-cursor' : ''
					} overflow-hidden`}
				>
					<div className="relative">
						<img
							src={heroImage}
							alt="hero-image"
							loading="lazy"
							className="aspect-auto object-contain size-full"
						/>
						<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-full scale-[140%] rounded-full bg-radial-[at_50%_50%] from-30% from-transparent to-secondary z-20 to-50%" />
					</div>
					<CustomCursor position={cursorPosition} isVisible={isHovering} />
				</div>
			</div>
			<div className="space-y-[60px]">
				<div className="px-8 md:px-[80px] lg:px-[120px]">
					<Separator className="w-full bg-surface-variant" />
				</div>
				<div className="px-8 md:px-[80px] lg:px-[120px] flex justify-between">
					<div className="flex flex-col xl:flex-row gap-8 justify-between w-full">
						<div className="space-y-4 xl:max-w-[600px] text-center md:text-left w-full">
							<p className="font-seravek_medium text-[32px] underline text-primary">
								Our Clients
							</p>
							<p className="text-white text-2xl font-seravek_light">
								We’ve partnered with several companies to reimagine and redefine the
								way users experience their products.
							</p>
						</div>
						<div className="flex flex-col md:flex-row md:justify-center 2xl:justify-between items-center gap-12">
							<div className="flex justify-center sm:justify-around w-full xl:w-auto gap-12">
								{statisticsMock.slice(0, 2).map((statistic, index) => (
									<div
										key={`hero-record-stats-1-${index}`}
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
				<div className="w-full">
					<BrandsCarousel />
				</div>
				<div className="px-8 md:px-[80px] lg:px-[120px]">
					<Separator className="w-full bg-surface-variant" />
				</div>
			</div>
		</section>
	)
}

export default HeroSection
