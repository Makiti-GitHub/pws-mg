import SuccessStoryCard from '@/components/molecules/cards/SuccessStoryCard'
import SectionHeader from '@/components/molecules/SectionHeader'
import { Button } from '@/components/ui/button'
import { successStoriesMock } from '@/data/mock'
import { ArrowLeftIcon } from 'lucide-react'
import { PageComponent, useNavigate } from 'rasengan'

const Portfolio: PageComponent = () => {
	const navigate = useNavigate()

	return (
		<main className="flex flex-col gap-8 px-[120px] pt-[71px] relative">
			<div className="space-y-8 relative">
				<SectionHeader
					title="Explore our portfolio"
					subTitle="Don’t just take our word for it – explore the innovative solutions we’ve crafted for our clients. Read our case studies to see our impact across industries, and envision what we could achieve together."
				/>

				<div className="space-y-6">
					<div className="flex justify-center items-center flex-wrap gap-3">
						{['All Projects', 'Web Apps', 'Mobile Apps', 'E-Commerce', 'SaaS'].map(
							(item, index) => (
								<span
									key={`story-${index}-industry-${item}`}
									className={`${
										index === 0
											? 'bg-primary text-secondary'
											: 'bg-surface-container text-on-surface-variant'
									} px-3 py-2 rounded-[12px] font-seravek_medium text-sm`}
								>
									{item}
								</span>
							),
						)}
					</div>

					<div className="space-y-6">
						{successStoriesMock.map((story, index) => (
							<SuccessStoryCard key={`success-story-${index}`} story={story} />
						))}
					</div>
				</div>

				<Button
					variant={'ghost'}
					onClick={() => navigate('/')}
					className="text-secondary !py-3 !px-5 !h-max hover:cursor-pointer bg-white box_shadow_products_card !font-seravek_medium !text-base absolute left-0 top-0"
				>
					<ArrowLeftIcon className="size-6" />
					<span className="sr-only">Back to home</span>
					<span>Back to home</span>
				</Button>
			</div>
		</main>
	)
}

Portfolio.path = '/:locale?/portfolio'
Portfolio.metadata = {
	title: 'Portfolio',
	description: 'Portfolio page',
}

export default Portfolio
