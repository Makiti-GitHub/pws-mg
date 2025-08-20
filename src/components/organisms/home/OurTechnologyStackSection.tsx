import CircularCarousel from '@/components/molecules/carousel/CircularCarousel'
import { ourTechnosLogos1, ourTechnosLogos2, technologiesMock } from '@/data/mock'

import office365Logo from '@/assets/images/nuage_logos/office365.svg'
import awsLogo from '@/assets/images/nuage_logos/AWS.svg'
import circleDotLogo from '@/assets/images/nuage_logos/Container-20.svg'
import Image from '@rasenganjs/image'
import { useTranslation } from 'react-i18next'
import { useFloatingCursor } from '@/hooks/guard/ContextGuard'
import useIsResponsive from '@/hooks/useIsResponsive'

import mask1 from '@/assets/images/nuage_logos/mask1.svg'
import mask2 from '@/assets/images/nuage_logos/mask2.svg'

const OurTechnologyStackSection = () => {
	const { t } = useTranslation()
	const isDesktop = useIsResponsive({ width: 1024 })
	const isTablet = useIsResponsive({ width: 768 })
	const isMobile = useIsResponsive({ width: 640 })
	const { setCursorVariant } = useFloatingCursor()

	return (
		<section className="relative px-8 md:px-[80px] lg:px-[120px] w-screen flex flex-col gap-[24px] bg-secondary py-5">
			<img
				className="absolute -left-1/2 translate-x-1/5 size-full opacity-10"
				src={mask1}
				alt="mask1"
			/>

			<img
				className="absolute right-0 translate-x-1/4 size-full opacity-10"
				src={mask2}
				alt="mask2"
			/>

			<div className="space-y-8 z-20">
				<div className="space-y-8">
					<div className="text-center tracking-normal space-y-3 px-2">
						<h2 className="font-seravek_bold text-primary text-3xl sm:text-5xl uppercase">
							{t('pages.home.sections.ourTechnologyStack.title')}
						</h2>
						<p className="text-lg sm:text-xl text-white">
							{t('pages.home.sections.ourTechnologyStack.subtitle')}
						</p>
					</div>

					<div className="flex items-center justify-center">
						<div className="relative">
							<CircularCarousel
								images={ourTechnosLogos2.map((image) => ({
									id: image.id,
									src: image.image,
									alt: image.alt,
									title: image.title,
								}))}
								imageSize={!isDesktop ? 80 : !isTablet ? 65 : 50}
								radius={!isDesktop ? 360 : !isTablet ? 300 : !isMobile ? 240 : 220}
								duration={25}
								direction="clockwise"
							/>
							<div className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2">
								<CircularCarousel
									images={ourTechnosLogos1.map((image) => ({
										id: image.id,
										src: image.image,
										alt: image.alt,
										title: image.title,
									}))}
									imageSize={!isDesktop ? 80 : !isTablet ? 65 : 50}
									radius={!isDesktop ? 240 : !isTablet ? 200 : 150}
									duration={18}
									direction="counterclockwise"
								/>
							</div>
							<div className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 flex flex-col items-center gap-0 sm:gap-1 md:gap-4">
								<div className="relative group scale-[55%] sm:scale-[65%] md:scale-75 lg:scale-90">
									<Image
										src={awsLogo}
										alt={'AWS logo'}
										width={'100%'}
										height={'100%'}
										className="size-full object-contain duration-300"
									/>
									<div className="absolute z-20 -bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
										<span className="bg-black text-white text-xs px-2 py-1 rounded whitespace-nowrap">
											AWS
										</span>
									</div>
								</div>
								<div className="relative scale-[55%] sm:scale-[65%] md:scale-75 lg:scale-90 group">
									<Image
										src={office365Logo}
										alt={'Office 365 logo'}
										width={'100%'}
										height={'100%'}
										className="size-full  object-contain duration-300"
									/>
									<div className="absolute z-20 -bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
										<span className="bg-black text-white text-xs px-2 py-1 rounded whitespace-nowrap">
											Office 365
										</span>
									</div>
								</div>
								<div className="relative group scale-[55%] sm:scale-[80%] lg:scale-100">
									<Image
										src={circleDotLogo}
										alt={'Ionic dot logo'}
										width={'100%'}
										height={'100%'}
										className="size-full object-contain duration-300"
									/>
									<div className="absolute z-20 -bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
										<span className="bg-black text-white text-xs px-2 py-1 rounded whitespace-nowrap">
											Ionic
										</span>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
					{technologiesMock.map((tech, index) => (
						<div
							key={`tech-${index}`}
							onMouseEnter={() => setCursorVariant('text')}
							onMouseLeave={() => setCursorVariant('default')}
							className="rounded-[20px] w-full max-w-[400px] mx-auto md:max-w-none md:min-h-[300px] border border-primary py-3 sm:py-7 px-2 flex flex-col gap-2 sm:gap-4"
						>
							<div className="w-full">
								<p className="text-center break-words uppercase text-2xl sm:text-[32px] font-seravek_bold text-primary">
									{t(
										`pages.home.sections.ourTechnologyStack.categories.${tech.category}`,
									)}
								</p>
							</div>
							<div className="w-full px-4 space-y-2">
								{tech.list.map((item, index) => (
									<div key={`tech-item-${index}`} className="w-full">
										<p className="text-center text-2xl sm:text-[32px] text-white">
											{item}
										</p>
									</div>
								))}
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	)
}

export default OurTechnologyStackSection
