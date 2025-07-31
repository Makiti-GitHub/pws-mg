import CircularCarousel from '@/components/molecules/carousel/CircularCarousel'
import { ourTechnosLogos1, ourTechnosLogos2, technologiesMock } from '@/data/mock'

import office365Logo from '@/assets/images/nuage_logos/office365.svg'
import awsLogo from '@/assets/images/nuage_logos/AWS.svg'
import circleDotLogo from '@/assets/images/nuage_logos/Container-20.svg'
import Image from '@rasenganjs/image'
import { useTranslation } from 'react-i18next'
import { useFloatingCursor } from '@/hooks/guard/ContextGuard'

const OurTechnologyStackSection = () => {
	const { t } = useTranslation()
	const { setCursorVariant } = useFloatingCursor()

	return (
		<section className="px-8 md:px-[80px] lg:px-[120px] w-screen flex flex-col gap-[24px] bg-secondary py-5">
			<div className="space-y-8">
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
								radius={360}
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
									radius={240}
									duration={18}
									direction="counterclockwise"
								/>
							</div>
							<div className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4">
								<div className="relative group">
									<Image
										src={awsLogo}
										alt={'AWS logo'}
										width={'100%'}
										height={'100%'}
										className="size-full scale-90 object-contain duration-300"
									/>
									<div className="absolute z-20 -bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
										<span className="bg-black text-white text-xs px-2 py-1 rounded whitespace-nowrap">
											AWS
										</span>
									</div>
								</div>
								<div className="relative group">
									<Image
										src={office365Logo}
										alt={'Office 365 logo'}
										width={'100%'}
										height={'100%'}
										className="size-full scale-90 object-contain duration-300"
									/>
									<div className="absolute z-20 -bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
										<span className="bg-black text-white text-xs px-2 py-1 rounded whitespace-nowrap">
											Office 365
										</span>
									</div>
								</div>
								<div className="relative group">
									<Image
										src={circleDotLogo}
										alt={'Circle dot logo'}
										width={'100%'}
										height={'100%'}
										className="size-full object-contain duration-300"
									/>
									<div className="absolute z-20 -bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
										<span className="bg-black text-white text-xs px-2 py-1 rounded whitespace-nowrap">
											Circle
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
							className="rounded-[20px] border border-primary py-3 sm:py-7 px-2 flex flex-col gap-2 sm:gap-4"
						>
							<div className="w-full">
								<p className="text-center uppercase text-2xl sm:text-[32px] font-seravek_bold text-primary">
									{t(
										`pages.home.sections.ourTechnologyStack.categories.${tech.category}`,
									)}
								</p>
							</div>
							<div className="w-full space-y-2">
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
