import OurCoreValuesSection from '@/components/organisms/about/OurCoreValuesSection'
import OurJourneySection from '@/components/organisms/about/OurJourneySection'
import OurTeamSection from '@/components/organisms/about/OurTeamSection'
import Statistics from '@/components/organisms/Statistics'
import { Button } from '@/components/ui/button'
import { ArrowLeftIcon } from 'lucide-react'
import circleIcon from '@/assets/images/Find the talent you need/Vector.svg'
import bulbIcon from '@/assets/images/Find the talent you need/famicons_bulb-outline.svg'

import { PageComponent, useNavigate } from 'rasengan'

const About: PageComponent = () => {
	const navigate = useNavigate()

	return (
		<main className="flex flex-col gap-8 pt-[150px] relative px-8 md:px-[80px] lg:px-[120px]">
			<div className="space-y-8 relative">
				<Button
					variant={'ghost'}
					onClick={() => navigate('/')}
					className="xl:absolute xl:left-0 xl:top-0 text-secondary !py-3 !px-5 !h-max hover:cursor-pointer bg-white box_shadow_products_card !font-seravek_medium !text-base"
				>
					<ArrowLeftIcon className="size-6" />
					<span className="sr-only">Back to home</span>
					<span>Back to home</span>
				</Button>

				<h1 className="text-on-surface text-5xl font-seravek_bold text-center">
					The Story of Makiti Group
				</h1>

				<div className="text-on-surface-variant text-center space-y-6">
					<p className="text-xl">
						The Makiti Group adventure officially began on March 1, 2023, with its main
						headquarters established in Paris, France. This company is the fruit of the
						bold vision of MJ, a young Cameroonian entrepreneur residing in Europe. Her
						fundamental objective is to propel the IT ecosystem in Africa, with
						particular attention to Cameroon.
					</p>
					<div className="space-y-3">
						<h2 className="text-[28px] font-seravek_medium text-center">
							The Story of Makiti Group
						</h2>
						<div className="text-xl">
							<p>
								Today, many large European companies turn to India for their IT
								service outsourcing. However, this approach often presents major
								challenges: the language barrier (English being the only common
								language) and a significant time difference that can be up to 5
								hours compared to France.
							</p>
							<p>
								With Makiti Group, MJ's ambition is to make African talent available
								to European companies, while guaranteeing unparalleled quality of
								service and resources. We have made fluid communication a priority.
								At Makiti Group, our staff is not only highly technically qualified
								but also multilingual. Beyond English, we distinguish ourselves by
								our proficiency in German. This allows our clients from Luxembourg,
								Switzerland, and of course Germany, to communicate with our
								developers in their native language. This ease of exchange is
								crucial for precise requirement transmission and harmonious
								collaboration.
							</p>
						</div>
					</div>
					<div className="space-y-3">
						<h2 className="text-[28px] font-seravek_medium text-center">
							Growth and Achievements
						</h2>

						<div className="text-xl">
							<p>
								The year 2024 was marked by a significant development of our teams.
								We recruited a diverse range of exceptional profiles: Java and React
								Developers, Site & Reliability Engineers, UX/UI Designers, Graphic
								Designers, and Test Automation Engineers.
							</p>

							<p>
								These talents have already led to the realization of several
								innovative internal products, such as{' '}
								<a href="#" className="underline text-primary">
									<span>MATOA</span>
								</a>{' '}
								and{' '}
								<a href="#" className="underline text-primary">
									<span>LYSSAFI</span>
								</a>
								.
							</p>

							<p>
								In parallel, we have successfully completed numerous projects for
								our clients and partners, thereby strengthening our reputation for
								reliability and excellence.
							</p>

							<p>
								Makiti Group bridges African technological potential with European
								market needs, building connections beyond borders and time zones.
							</p>
						</div>
					</div>
				</div>

				<div className="grid grid-cols-1 lg:grid-cols-2 gap-6 pt-2.5 pb-8">
					<div className="px-4 py-5 rounded-[12px] bg-white box_shadow_products_card">
						<div className="">
							<div className="flex items-center gap-2">
								<div className="size-9 rounded-[6px] bg-surface-variant flex items-center justify-center">
									<div className="size-6">
										<img
											src={circleIcon}
											alt="circle icon"
											className="size-full object-contain aspect-auto"
										/>
									</div>
								</div>
								<span className="text-[28px] font-seravek_medium text-on-surface">
									Our Mission
								</span>
							</div>
							<div>
								<p className="text-on-surface-variant text-lg">
									To empower businesses with cutting-edge IT solutions through
									strategic outsourcing partnerships. We bridge the gap between
									vision and execution, delivering high-quality software
									development, consulting, and digital transformation services
									that accelerate growth and innovation.
								</p>
							</div>
						</div>
					</div>
					<div className="px-4 py-5 rounded-[12px] bg-white box_shadow_products_card">
						<div className="">
							<div className="flex items-center gap-2">
								<div className="size-9 rounded-[6px] bg-surface-variant flex items-center justify-center">
									<div className="size-6">
										<img
											src={bulbIcon}
											alt="buld icon"
											className="size-full object-contain aspect-auto"
										/>
									</div>
								</div>
								<span className="text-[28px] font-seravek_medium text-on-surface">
									Our Vision
								</span>
							</div>
							<div>
								<p className="text-on-surface-variant text-lg">
									To become the leading IT outsourcing partner in the world,
									recognized for our commitment to excellence, sustainability, and
									client success. We envision a future where technology serves
									humanity while preserving our planet for future generations.
								</p>
							</div>
						</div>
					</div>
				</div>

				<div className="pb-8">
					<Statistics />
				</div>

				{/** == Our Team == */}
				<OurTeamSection className="pb-8" />

				{/* == Our Journey == */}
				<OurJourneySection className="pb-8" />

				{/* == Our Course == */}
				<OurCoreValuesSection className="pb-8" />
			</div>
		</main>
	)
}

About.path = '/:locale?/about'
About.metadata = {
	title: 'About',
	description: 'About page',
}

export default About
