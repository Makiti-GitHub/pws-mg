import Banner from '@/components/molecules/banner/Banner'
import SectionHeader from '@/components/molecules/SectionHeader'
import { Button } from '@/components/ui/button'
import { successStoriesMock } from '@/data/mock'
import { ArrowRightIcon } from 'lucide-react'

const SuccessStoriesSection = () => {
	return (
		<section className="flex flex-col gap-8 px-[120px] pb-16">
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
										<p className="text-[32px] text-on-surface">{story.title}</p>
										<p className="text-base text-on-surface-variant">
											{story.category}
										</p>
									</div>
									<p className="text-base text-outline">{story.description}</p>
								</div>
								<div className="space-y-2 font-seravek_medium">
									<p className="text-base text-on-surface-variant">Key results</p>

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

				<Banner
					variant="secondary"
					title="Join Our Satisfied Clients"
					desc="Experience the same level of excellence and results. Let’s
									discuss how we can help you transform your business through
									strategic IT Outsourcing."
				>
					<Button
						// variant="primary"
						className="rounded-4xl h-max py-3 px-5 hover:cursor-pointer border border-white text-white bg-transparent hover:bg-accent/5"
					>
						<span className="sr-only">View Portfolio</span>{' '}
						<span className="text-lg font-seravek_medium">View Portfolio</span>{' '}
						<ArrowRightIcon className="size-6" />
					</Button>
				</Banner>
			</div>
		</section>
	)
}

export default SuccessStoriesSection
