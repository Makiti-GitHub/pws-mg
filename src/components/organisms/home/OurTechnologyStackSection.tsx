import { technologiesMock } from '@/data/mock'
import swiftLogo from '@/assets/images/nuage_logos/swift.svg'
import Logo5 from '@/assets/images/nuage_logos/5.svg'
import cypressLogo from '@/assets/images/nuage_logos/cypress.svg'
import leafLogo from '@/assets/images/nuage_logos/Container-10.svg'
import postgresqlLogo from '@/assets/images/nuage_logos/PostgreSQL.svg'
import angularLogo from '@/assets/images/nuage_logos/angular.svg'
import woocommerceLogo from '@/assets/images/nuage_logos/WooCommerce.svg'
import javaLogo from '@/assets/images/nuage_logos/java.svg'
import jLogo from '@/assets/images/nuage_logos/Container-13.svg'
import jsLogo from '@/assets/images/nuage_logos/javascript.svg'
import behanceLogo from '@/assets/images/nuage_logos/behance.svg'
import figmaLogo from '@/assets/images/nuage_logos/figma.svg'

const rotationImages = [
	{ id: 1, image: swiftLogo },
	{ id: 2, image: Logo5 },
	{ id: 3, image: cypressLogo },
	{ id: 4, image: leafLogo },
	{ id: 5, image: postgresqlLogo },
	{ id: 6, image: angularLogo },
	{ id: 7, image: woocommerceLogo },
	{ id: 8, image: javaLogo },
	{ id: 9, image: jLogo },
	{ id: 10, image: jsLogo },
	{ id: 11, image: behanceLogo },
	{ id: 12, image: figmaLogo },
]

const OurTechnologyStackSection = () => {
	return (
		<section className="px-[120px] flex flex-col gap-[24px] bg-secondary py-5">
			<div className="space-y-48">
				<div className="space-y-40">
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
						<div className="box group hover:paused relative size-[460px] animate-animateBx">
							<div className="img relative w-1/5 h-full cursor-pointer">
								{rotationImages.map((image, index) => (
									<div
										className={`imgBox group-hover:paused size-[90px] absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-full rounded-full origin-[320px]`}
										key={`imgBox-${index}`}
										style={
											{
												'--i': index + 1,
												rotate: `calc(360deg/${rotationImages.length}*var(--i))`,
											} as React.CSSProperties
										}
									>
										<img
											src={image.image}
											alt=""
											className="absolute top-0 left-0 size-full object-contain animate-animateImgBx"
											style={{
												rotate: `calc(360deg/${rotationImages.length}*var(--i))`,
											}}
										/>
									</div>
								))}
							</div>
						</div>
					</div>
				</div>
				<div className="grid grid-cols-4 gap-5">
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
