import Banner from '@/components/molecules/banner/Banner'
import SuccessStoryCard from '@/components/molecules/cards/SuccessStoryCard'
import SectionHeader from '@/components/molecules/SectionHeader'
import { Button } from '@/components/ui/button'
import { successStoriesMock } from '@/data/mock'
import { ArrowRightIcon } from 'lucide-react'
import { useNavigate } from 'rasengan'

const SuccessStoriesSection = () => {
	const navigate = useNavigate()

	return (
		<section className="flex flex-col gap-8 px-[120px] pb-16">
			<SectionHeader
				title="Our Success Stories"
				subTitle="Discover some of our recent projects and the impact we've made"
			/>

			<div className="space-y-8">
				<div className="space-y-6">
					{successStoriesMock.map((story, index) => (
						<SuccessStoryCard key={`success-story-${index}`} story={story} />
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
						onClick={() => navigate('/en/portfolio')}
						// variant="primary"
						className="rounded-4xl !h-max !py-3 !px-5 hover:cursor-pointer border border-white text-white bg-transparent hover:bg-accent/5"
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
