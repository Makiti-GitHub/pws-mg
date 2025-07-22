// import { Link } from 'rasengan'
// import logo from '@/assets/logo.svg'
// import RasenganVector from '@/assets/RasenganVector.svg'
// import shadcnLogo from '@/assets/shadcnLogo.png'
// import Image from '@rasenganjs/image'
import { Button } from '@/components/ui/button'
import { ArrowRightIcon, ArrowUpRightIcon } from 'lucide-react'
import SectionHeader from '@/components/molecules/SectionHeader'
import Statistics from '@/components/organisms/Statistics'
import {
	expertisesMock,
	ourLiveProductsMock,
	solutionsProcessStackMock,
	successStoriesMock,
	talentProfilesMock,
	testimonialsMock,
} from '@/data/mock'
import { PageComponent } from 'rasengan'

// interface InfoCardProps {
// 	title: string
// 	desc: string
// 	link: string
// 	linkText: string
// }

// const InfoCard: FC<InfoCardProps> = ({ title, desc, link, linkText }) => (
// 	<div className="flex flex-col w-full p-4 border-2 border-zinc-950/5 rounded-xl">
// 		<div className="flex flex-col gap-2">
// 			<h2 className="text-xl font-Lexend">{title}</h2>
// 			<p className="text-sm font-Lexend font-light">{desc}</p>
// 		</div>
// 		<a
// 			href={link}
// 			target="_blank"
// 			rel="noopener noreferrer"
// 			className="mt-4 text-primary font-Lexend font-light text-sm"
// 		>
// 			{linkText}
// 		</a>
// 	</div>
// )

const Home: PageComponent = () => {
	return (
		<section className="size-full bg-white flex flex-col items-center font-seravek_regular tracking-normal relative">
			{/* === Header === */}
			{/* <header className="flex justify-end items-center w-full mb-7">
        <div className="flex items-center gap-2">
          <span className="font-Lexend text-sm">Powered by</span>
          <Link to="https://rasengan.dev" target="_blank">
            <Image src={logo} alt="Rasengan logo" width={120} height={40} />
          </Link>
        </div>
      </header> */}

			{/* === Navigation  === */}
			<nav className="px-[120px] py-5 w-full flex items-center justify-between bg-secondary">
				{/* === Logo === */}
				<div className="w-[121px] h-[84px] bg-green-300">
					{/* === Background Images ===
      <img
        src={shadcnLogo}
        alt="shadcn logo"
        className="
          absolute 
          top-10 left-4
          sm:top-14 sm:left-10 
          md:top-16 md:left-40 
          w-[120px] 
          sm:w-[180px] 
          md:w-[300px] 
          opacity-20 
          pointer-events-none 
          select-none
        "
      />
      <img
        src={RasenganVector}
        alt="Rasengan vector"
        className="
          absolute 
          top-6 right-4 
          sm:top-10 sm:right-10 
          md:top-10 md:right-[12.5rem] 
          w-[150px] 
          sm:w-[240px] 
          md:w-[340px] 
          opacity-60 
          pointer-events-none 
          select-none
        "
      /> */}
					Image
				</div>
				{/* === Menu === */}
				<ul className="flex items-center gap-6 text-white text-lg">
					<li>Services</li>
					<li>Porfolio</li>
					<li>Products</li>
					<li>About</li>
				</ul>

				<div className="flex items-center gap-8">
					<Button variant="primary" className="rounded-4xl">
						<span className="sr-only">Let's talk</span> <span>Let's talk</span>{' '}
						<ArrowUpRightIcon className="size-5" />
					</Button>
					<div>
						<span className="text-white text-lg">EN</span>
					</div>
				</div>
			</nav>

			{/* === Main === */}
			<main className="space-y-16">
				{/* === Hero === */}
				<section></section>

				{/* === Our Expertise === */}
				<section className="px-[120px] w-screen">
					<div className="flex flex-col p-6 gap-10 bg-[#FCFCFC] box_shadow_expertise_container rounded-2xl">
						<SectionHeader
							title="Our Expertise"
							subTitle="Comprehensive IT outsourcing solutions across all technology domains"
						/>

						<div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 font-seravek_regular">
							{expertisesMock.map((expertise, index) => (
								<div
									key={`expertise-item-${index}`}
									className="box_shadow flex flex-col rounded-[12px] p-6 gap-[30px]"
								>
									<div className="flex flex-col gap-5">
										<div className="size-[74px] rounded-[12px] bg-[#DEEAFD]"></div>
										<p className="text-2xl font-seravek_medium text-[#020304]">
											{expertise.title}
										</p>
									</div>
									<div className="text-[#44474A] text-xl flex flex-col gap-5">
										<p>{expertise.content.description}</p>
										<ul className="list-disc pl-8">
											{expertise.content.list.map((item, index) => (
												<li
													key={`expertise-item-option-${index}-${item}`}
													className={`expertise-item-option-${index}-${item}`}
												>
													{item}
												</li>
											))}
										</ul>
									</div>
								</div>
							))}
						</div>

						<div className="flex flex-col gap-4 py-8 bg-secondary rounded-2xl">
							<h3 className="text-[32px] font-bold text-center text-white">
								Our Solution Process Stack
							</h3>
							<div className="w-full flex flex-wrap justify-between items-center px-[80px] gap-6">
								{solutionsProcessStackMock.map((solution, index) => (
									<div
										key={`solution-${index}`}
										className="bg-white rounded-2xl w-[178.3px] h-[160px] py-5 px-6"
									>
										<p>{solution}</p>
									</div>
								))}
							</div>
						</div>
					</div>
				</section>
				{/* === Find he Talent You Need === */}
				<section className="px-[120px] w-screen">
					<div className="flex flex-col gap-8">
						<SectionHeader
							title="Find the Talent You Need"
							subTitle="Select from our expert outsourcing profiles"
						/>

						<div className="grid grid-cols-6 lg:grid-cols-12 gap-8">
							<aside className="space-y-[26px] col-span-6 lg:col-span-4">
								{talentProfilesMock.map((profile, index) => (
									<div
										tabIndex={0}
										role="button"
										key={`talent-profile-${index}`}
										className={`${
											index === 0
												? 'bg-[#F0F1F1] border-[#44474A]'
												: 'border-[#C4C7CA]'
										} px-6 hover:cursor-pointer hover:bg-[#F0F1F1] py-4 border-[0.75px] rounded-[12px] flex gap-2.5`}
									>
										<div className="size-8 bg-red-300" />
										<div className="flex flex-col gap-2 text-x">
											<p className="text-[#020304]">{profile.title}</p>
											<p className="text-[#73777C] font-seravek_mediuml">
												From ${profile.cost}/hour
											</p>
										</div>
									</div>
								))}
							</aside>

							<div className="col-span-6 lg:col-span-8 space-y-8 rounded-[12px] border-[0.75px] p-6 border-[#C4C7CA]">
								<div className="flex gap-4">
									<div className="size-8 bg-[#F0F1F1]" />
									<div className="flex flex-col gap-2">
										<p className="text-[#020304]">
											{talentProfilesMock[0].title}
										</p>
										<p className="text-[#73777C] font-seravek_mediuml">
											From ${talentProfilesMock[0].cost}/hour
										</p>
									</div>
								</div>

								<p className="font-seravek_medium text-base text-[#73777C]">
									Expert frontend developers specialized in modern web
									technologies and responsive design
								</p>

								<div className="space-y-4">
									<p className="text-[#020304] text-2xl font-seravek_medium">
										Key Skills
									</p>
									<div className="flex flex-wrap gap-3">
										{[
											'React',
											'Vue.js',
											'TypeScript',
											'Tailwind CSS',
											'Next.js',
										].map((skill, index) => (
											<span
												key={`talent-skill-${index}-${skill}`}
												className="border-[0.5px] border-[#C4C7CA] px-3 py-1 rounded-[4px]"
											>
												{skill}
											</span>
										))}
									</div>
								</div>

								<div className="rounded-xl space-y-8 p-6 bg-surface-container">
									<div className="space-y-6">
										<div className="space-y-1 font-seravek_medium">
											<p className="text-[#73777C] text-base">
												Starting Price
											</p>
											<p className="text-[32px] text-secondary">
												From $45/hour
											</p>
										</div>

										<Button
											variant="primary"
											className="rounded-4xl w-full h-max !py-[13px] hover:cursor-pointer"
										>
											<span className="sr-only">Request Quote</span>{' '}
											<span className="text-lg font-seravek_medium">
												Request Quote
											</span>{' '}
											<ArrowRightIcon className="size-6" />
										</Button>
									</div>

									<p className="text-center font-seravek_medium text-[#73777C] text-base">
										Get a personalized quote within 24 hours
									</p>
								</div>
							</div>
						</div>
					</div>
				</section>

				{/* === Our Success Stories  === */}
				<section className="flex flex-col gap-8 px-[120px]">
					<SectionHeader
						title="Our Success Stories"
						subTitle="Discover some of our recent projects and the impact we've made"
					/>

					<div className="space-y-8">
						<div className="space-y-6">
							{successStoriesMock.map((story, index) => (
								<div
									tabIndex={0}
									role="button"
									key={`success-story-${index}`}
									className="w-full hover:cursor-pointer grid grid-cols-2 gap-10 border rounded-[40px] p-3 border-outline-variant"
								>
									<div className="col-span-1 bg-red-300 rounded-[30px]" />
									<div className="space-y-2 col-span-1">
										<div className="flex">
											{Array.from({ length: 4 }).map((_, index) => (
												<div
													key={`tech-${index}-${story.title}`}
													className={`size-12 rounded-sm bg-[#F0F0F0] border-[1.5px] border-white ${
														index % 2 === 0 ? 'rotate-6' : '-rotate-6'
													}`}
												/>
											))}
										</div>
										<div className="space-y-2 font-seravek_medium">
											<div className="space-y-2">
												<p className="text-[32px] text-on-surface">
													{story.title}
												</p>
												<p className="text-base text-on-surface-variant">
													{story.category}
												</p>
											</div>
											<p className="text-base text-outline">
												{story.description}
											</p>
										</div>
										<div className="space-y-2 font-seravek_medium">
											<p className="text-base text-on-surface-variant">
												Key results
											</p>

											<ul className="list-disc pl-8">
												{story.results.map((item, index) => (
													<li
														key={`story-${index}-result-${index}-${item}`}
														className={`text-sm text-success`}
													>
														{item}
													</li>
												))}
											</ul>
										</div>
										<div className="space-y-2">
											<p className="text-base font-seravek_medium text-on-surface-variant">
												Industry
											</p>

											<div className="flex flex-wrap gap-2.5">
												{story.tags.map((item, index) => (
													<span
														key={`story-${index}-industry-${item}`}
														className="bg-surface-container px-4 py-1 rounded-[8px] text-sm text-[#44474A]"
													>
														{item}
													</span>
												))}
											</div>
										</div>
									</div>
								</div>
							))}
						</div>
						<div className="flex justify-center items-center gap-6 p-8 bg-secondary rounded-2xl">
							<div className="flex flex-col items-center gap-4">
								<h3 className="font-seravek_bold text-[32px] text-white">
									Join Our Satisfied Clients
								</h3>

								<p className="text-base text-outline-variant">
									Experience the same level of excellence and results. Let’s
									discuss how we can help you transform your business through
									strategic IT Outsourcing.
								</p>

								<Button
									// variant="primary"
									className="rounded-4xl h-max py-3 px-5 hover:cursor-pointer border border-white text-white bg-transparent hover:bg-accent/5"
								>
									<span className="sr-only">View Portfolio</span>{' '}
									<span className="text-lg font-seravek_medium">
										View Portfolio
									</span>{' '}
									<ArrowRightIcon className="size-6" />
								</Button>
							</div>
						</div>
					</div>
				</section>

				{/* === Our Live Products  === */}
				<section className="flex flex-col gap-8 px-[120px]">
					<div className="space-y-8">
						<SectionHeader
							title="Our Live Products"
							subTitle="Explore our successfully delivered and deployed applications currently serving real users and businesses worldwide."
						/>
						<div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
							{ourLiveProductsMock.map((story, index) => (
								<div
									tabIndex={0}
									role="button"
									key={`success-story-${index}`}
									className="w-full hover:cursor-pointer rounded-[20px] box_shadow_products_card"
								>
									<div className="w-full h-[250px] bg-red-300 rounded-t-[20px]" />
									<div className="space-y-3 p-4">
										<div className="space-y-1 font-seravek_medium">
											<p className="text-xl text-on-surface">{story.title}</p>
											<p className="text-base text-on-surface-variant">
												{story.category}
											</p>
										</div>
										<p className="text-base text-outline">
											{story.description}
										</p>
									</div>
								</div>
							))}
						</div>
					</div>
					<div className="flex justify-center items-center gap-6 p-8 bg-primary rounded-2xl">
						<div className="flex flex-col items-center gap-4">
							<h3 className="font-seravek_bold text-[32px] text-secondary">
								Empower Your Business with Our Products
							</h3>

							<p className="text-base text-secondary">
								Experience the same level of excellence and results. Let’s discuss
								how we can help you transform your business through strategic IT
								Outsourcing.
							</p>

							<Button
								// variant="primary"
								className="rounded-4xl h-max py-3 px-5 hover:cursor-pointer border border-secondary text-secondary bg-transparent hover:bg-accent/5"
							>
								<span className="sr-only">View Portfolio</span>{' '}
								<span className="text-lg font-seravek_medium">View Portfolio</span>{' '}
								<ArrowRightIcon className="size-6" />
							</Button>
						</div>
					</div>
				</section>

				{/* === Our Technology Stack  === */}
				<section></section>

				{/* === What our clients says  === */}
				<section className="flex flex-col gap-8 px-[120px]">
					<div className="space-y-[50px]">
						<SectionHeader
							title="What Our Clients Say"
							subTitle="Don’t just take our word for it—hear from our satisfied clients."
						/>

						<div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
							{testimonialsMock.map((testimonial, index) => (
								<div
									tabIndex={0}
									role="button"
									key={`testimonial-${index}`}
									className="w-full hover:cursor-pointer p-6 flex flex-col gap-5 rounded-[12px] box_shadow_products_card"
								>
									<div className="w-full h-[50px] bg-red-300 rounded-t-[20px]" />

									<p className="text-base text-outline flex-1">{`"${testimonial.quote}"`}</p>

									<div className="rounded-[8px] p-3 space-y-4 text-sm bg-surface-container">
										<div className="flex gap-20">
											<div className="space-y-1">
												<p className="text-outline">Project</p>

												<p className="font-seravek_medium text-on-surface-variant">
													{testimonial.category}
												</p>
											</div>
											<div className="space-y-1">
												<p className="text-outline">Duration</p>
												<p className="font-seravek_medium text-on-surface-variant">
													{testimonial.duration} Months
												</p>
											</div>
										</div>

										<div className="space-y-1">
											<p className="text-outline">Key results</p>

											<p className="font-seravek_medium text-success">
												{testimonial.result}
											</p>
										</div>
									</div>

									<div className="flex items-center gap-2">
										<div className="size-10 bg-red-300 rounded-full" />
										<div className="space-y-1 text-sm">
											<p className="font-seravek_medium text-on-surface-variant text-sm">
												{testimonial.user.name}
											</p>
											<p className="text-outline text-sm">
												{testimonial.user.job}
											</p>
										</div>
									</div>
								</div>
							))}
						</div>
					</div>

					<div className="flex justify-center items-center gap-6 p-8 bg-secondary rounded-2xl">
						<div className="flex flex-col items-center gap-4">
							<h3 className="font-seravek_bold text-[32px] text-white">
								Ready to transform your business?
							</h3>

							<p className="text-base text-outline-variant">
								Let's discuss how we can help you achieve similar results with our
								expert IT outsourcing services.
							</p>

							<Button
								variant="primary"
								className="rounded-4xl h-max px-5 py-3 gap-1 hover:cursor-pointer"
							>
								<span className="sr-only">Let's Talk</span>{' '}
								<span className="text-lg font-seravek_medium">Let's Talk</span>{' '}
								<ArrowUpRightIcon className="size-6" />
							</Button>
						</div>
					</div>
				</section>

				{/* === Frequently Asked Questions  === */}
				<section>
					<SectionHeader
						title="Frequently Asked Questions"
						subTitle="Everything you need to know about our IT Outsourcing services"
					/>
				</section>

				{/* === Why choose Makiti Group  === */}
				<section className="px-[120px] flex flex-col gap-[50px]">
					<SectionHeader
						title="Why Choose Makiti Group"
						subTitle="Partner with us for exceptional IT outsourcing solutions backed by expertise, innovation, and reliability."
					/>

					<div className="grid grid-cols-4 gap-8">
						{Array.from({ length: 8 }).map((_, index) => (
							<div
								key={`choose-reason-${index}`}
								className="box_shadow w-[348px] h-[262px] flex flex-col rounded-[12px] p-6 gap-4"
							>
								<div className="flex flex-col items-center">
									<div className="w-[74px] h-[74px] rounded-[12px] bg-[#DEEAFD]"></div>
									<p className="text-2xl font-seravek_medium text-[#020304] text-center">
										Agile Approach
									</p>
								</div>
								<p className="text-[#44474A] text-xl text-center">
									Fast, iterative development with continuous feedback and rapid
									deployment cycles.
								</p>
							</div>
						))}
					</div>

					<Statistics />
				</section>

				{/* === Start you project today  === */}
				<section></section>
			</main>
		</section>
	)
}

Home.path = '/:locale?/'
Home.metadata = {
	title: 'Home',
	description: 'Home page',
}

export default Home
