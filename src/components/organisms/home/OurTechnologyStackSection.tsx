import CircularCarousel from '@/components/molecules/carousel/CircularCarousel'
import { ourTechnosLogos1, ourTechnosLogos2, technologiesMock } from '@/data/mock'

import office365Logo from '@/assets/images/nuage_logos/office365.svg'
import awsLogo from '@/assets/images/nuage_logos/AWS.svg'
import circleDotLogo from '@/assets/images/nuage_logos/Container-20.svg'
import Image from '@rasenganjs/image'

const OurTechnologyStackSection = () => {
	return (
		<section className="px-8 md:px-[80px] lg:px-[120px] w-screen flex flex-col gap-[24px] bg-secondary py-5">
			<div className="space-y-8">
				<div className="space-y-8">
					<div className="text-center tracking-normal space-y-3 px-2">
						<h2 className="font-seravek_bold text-primary text-5xl">
							OUR TECHNOLOGY STACK
						</h2>
						<p className="text-xl text-white">
							We utilize technology that serves the implemented solutions - never the
							other way around
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
								<div className="">
									<Image
										src={awsLogo}
										alt={'AWS logo'}
										width={'100%'}
										height={'100%'}
										className="size-full scale-90 object-contain duration-300"
									/>
								</div>
								<div className="">
									<Image
										src={office365Logo}
										alt={'Office 365 logo'}
										width={'100%'}
										height={'100%'}
										className="size-full scale-90 object-contain duration-300"
									/>
								</div>
								<div className="">
									<Image
										src={circleDotLogo}
										alt={'Circle dot logo'}
										width={'100%'}
										height={'100%'}
										className="size-full object-contain duration-300"
									/>
								</div>
							</div>
						</div>
						{/* <div className="flex justify-center">
							<CircularCarousel
								images={ourTechnosLogos1.map((image) => ({
									id: image.id,
									src: image.image,
									alt: 'image',
									title: 'image',
								}))}
								radius={240}
								imageSize={80}
								duration={20}
								direction="clockwise"
							/>
						</div> */}
						{/* <div className="box group hover:paused relative size-[400px] lg:size-[800px] animate-animateBx">
							<div className="img relative w-1/5 h-full cursor-pointer">
								{ourTechnosLogos1.map((image, index) => (
									<div
										className={`imgBox group-hover:paused size-16 lg:size-[90px] absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-full rounded-full origin-[185px] lg:origin-[290px]`}
										key={`imgBox-${index}`}
										style={
											{
												'--i': index + 1,
												rotate: `calc(360deg/${ourTechnosLogos1.length}*var(--i))`,
											} as React.CSSProperties
										}
									>
										<img
											src={image.image}
											alt=""
											className="absolute top-0 left-0 size-full object-contain animate-animateImgBx"
											style={{
												rotate: `calc(360deg/${ourTechnosLogos1.length}*var(--i))`,
											}}
										/>
									</div>
								))}

								{ourTechnosLogos2.map((image, index) => (
									<div
										className={`imgBox group-hover:paused size-16 lg:size-[90px] absolute top-1/2 -translate-y-1/2 -left-full -translate-x-full rounded-full origin-[300px] lg:origin-[430px]`}
										key={`imgBox2-${index}`}
										style={
											{
												'--i': index + 1,
												rotate: `calc(360deg/${ourTechnosLogos2.length}*var(--i))`,
											} as React.CSSProperties
										}
									>
										<img
											src={image.image}
											alt=""
											className="absolute top-0 left-0 size-full object-contain animate-animateImgBx"
											style={{
												rotate: `calc(360deg/${ourTechnosLogos2.length}*var(--i))`,
											}}
										/>
									</div>
								))}
							</div>
						</div> */}
					</div>
				</div>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
					{technologiesMock.map((tech, index) => (
						<div
							key={`tech-${index}`}
							className="rounded-[20px] border border-primary py-7 px-2 flex flex-col gap-4"
						>
							<div className="w-full">
								<p className="text-center uppercase text-[32px] font-seravek_bold text-primary">
									{tech.techno}
								</p>
							</div>
							<div className="w-full space-y-2">
								{tech.list.map((item, index) => (
									<div key={`tech-item-${index}`} className="w-full">
										<p className="text-center text-[32px] text-white">{item}</p>
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
