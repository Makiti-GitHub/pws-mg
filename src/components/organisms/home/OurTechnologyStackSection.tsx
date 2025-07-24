import { ourTechnosLogos1, ourTechnosLogos2, technologiesMock } from '@/data/mock'

const OurTechnologyStackSection = () => {
	return (
		<section className="px-8 md:px-[80px] lg:px-[120px] flex flex-col gap-[24px] bg-secondary py-5">
			<div className="space-y-48">
				<div className="space-y-24 lg:space-y-48">
					<div className="text-center tracking-normal space-y-3">
						<h2 className="font-seravek_bold text-primary text-5xl">
							OUR TECHNOLOGY STACK
						</h2>
						<p className="text-xl text-white">
							We utilize technology that serves the implemented solutions - never the
							other way around
						</p>
					</div>

					<div className="flex items-center justify-center">
						<div className="box group hover:paused relative size-[400px] lg:size-[800px] animate-animateBx">
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
						</div>
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
