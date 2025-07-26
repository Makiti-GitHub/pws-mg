import SuccessStoryCard from '@/components/molecules/cards/SuccessStoryCard'
import SectionHeader from '@/components/molecules/SectionHeader'
import { Button } from '@/components/ui/button'
import { ProjectCategoryType, successStoriesMock } from '@/data/mock'
import { ArrowLeftIcon } from 'lucide-react'
import { PageComponent, useNavigate } from 'rasengan'
import { useMemo, useState } from 'react'

const filterOptions: { label: string; value: ProjectCategoryType }[] = [
	{ label: 'All Projects', value: 'all' },
	{ label: 'Web Apps', value: 'web_app' },
	{ label: 'Mobile Apps', value: 'mobile_app' },
	{ label: 'E-Commerce', value: 'e_commerce' },
	{ label: 'SaaS', value: 'saas' },
]

const Portfolio: PageComponent = () => {
	const navigate = useNavigate()

	const [selectedFilter, setSelectedFilter] = useState<ProjectCategoryType>('all')

	const filteredStories = useMemo(() => {
		if (selectedFilter === 'all') {
			return successStoriesMock
		}
		return successStoriesMock.filter((story) => story.categoryType === selectedFilter)
	}, [selectedFilter])

	const handleSelectFilter = (value: ProjectCategoryType) => {
		setSelectedFilter(value)
	}

	return (
		<main className="flex flex-col gap-8 px-8 md:px-[80px] lg:px-[60px] xl:px-[120px] pt-[150px] relative">
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
				<SectionHeader
					title="Explore our portfolio"
					subTitle="Don’t just take our word for it – explore the innovative solutions we’ve crafted for our clients. Read our case studies to see our impact across industries, and envision what we could achieve together."
				/>

				<div className="space-y-6">
					<div className="flex justify-center items-center flex-wrap gap-3">
						{filterOptions.map((item, index) => (
							<span
								tabIndex={0}
								role="button"
								onClick={() => handleSelectFilter(item.value)}
								key={`story-${index}-industry-${item.value}`}
								className={`${
									selectedFilter === item.value
										? 'bg-primary text-secondary'
										: 'bg-surface-container text-on-surface-variant hover:bg-outline-variant'
								} px-3 py-2 rounded-xl font-seravek_medium text-sm hover:cursor-pointer`}
							>
								{item.label}
							</span>
						))}
					</div>

					<div className="space-y-6">
						{filteredStories.map((story, index) => (
							<SuccessStoryCard key={`success-story-${index}`} story={story} />
						))}
					</div>
				</div>
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
