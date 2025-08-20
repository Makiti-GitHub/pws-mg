import SuccessStoryCard from '@/components/molecules/cards/SuccessStoryCard'
import SectionHeader from '@/components/molecules/SectionHeader'
import { Button } from '@/components/ui/button'
import { ProjectCategoryType, successStoriesMock } from '@/data/mock'
import { useFloatingCursor } from '@/hooks/guard/ContextGuard'
import { ArrowLeftIcon } from 'lucide-react'
import { PageComponent, useNavigate } from 'rasengan'
import { useMemo, useState } from 'react'
import { useTranslation } from 'react-i18next'

// Filters images
import globeIcon from '@/assets/icons/Filter icons/streamline-plump_web.svg'
import applicationWebIcon from '@/assets/icons/Filter icons/carbon_application-web.svg'
import cartIcon from '@/assets/icons/Filter icons/iconsax-shopping-cart.svg'
import mobileIcon from '@/assets/icons/Filter icons/bytesize_mobile.svg'
import cloudIcon from '@/assets/icons/Filter icons/basil_cloud-outline.svg'
import Image from '@rasenganjs/image'

const filterOptions: { label: string; value: ProjectCategoryType; icon: string }[] = [
	{ label: 'All Projects', value: 'all', icon: globeIcon },
	{ label: 'Web Apps', value: 'web_app', icon: applicationWebIcon },
	{ label: 'Mobile Apps', value: 'mobile_app', icon: mobileIcon },
	{ label: 'E-Commerce', value: 'e_commerce', icon: cartIcon },
	{ label: 'SaaS', value: 'saas', icon: cloudIcon },
	{ label: 'Branding', value: 'branding', icon: globeIcon },
]

const Portfolio: PageComponent = () => {
	const navigate = useNavigate()
	const { t, i18n } = useTranslation()
	const { setCursorVariant } = useFloatingCursor()

	const [selectedFilter, setSelectedFilter] = useState<ProjectCategoryType>('all')

	const filteredStories = useMemo(() => {
		if (selectedFilter === 'all') {
			return successStoriesMock
		}
		return successStoriesMock.filter((story) => story.categoryTypes.includes(selectedFilter))
	}, [selectedFilter])

	const handleSelectFilter = (value: ProjectCategoryType) => {
		setSelectedFilter(value)
	}

	return (
		<main className="flex flex-col gap-8 px-4 sm:px-8 md:px-[80px] lg:px-[60px] xl:px-[120px] pt-[150px] relative">
			<div className="space-y-8 relative">
				<Button
					variant={'ghost'}
					onClick={() => navigate(`/${i18n.language}/`)}
					onMouseEnter={() => setCursorVariant('button')}
					onMouseLeave={() => setCursorVariant('default')}
					className="xl:absolute xl:left-0 xl:top-0 text-secondary !py-3 !px-5 !h-max hover:cursor-pointer bg-white box_shadow_products_card !font-seravek_medium !text-base"
				>
					<ArrowLeftIcon className="size-6" />
					<span className="sr-only">Back to home</span>
					<span>{t('common.backToHomeCta')}</span>
				</Button>
				<SectionHeader
					title={t('pages.portfolio.title')}
					subTitle={t('pages.portfolio.subtitle')}
				/>

				<div className="space-y-4 sm:space-y-6">
					<div className="flex justify-center items-center flex-wrap gap-3">
						{filterOptions.map((item, index) => (
							<span
								tabIndex={0}
								role="button"
								onClick={() => handleSelectFilter(item.value)}
								key={`story-${index}-industry-${item.value}`}
								onMouseEnter={() => setCursorVariant('text')}
								onMouseLeave={() => setCursorVariant('default')}
								className={`${
									selectedFilter === item.value
										? 'bg-primary text-secondary'
										: 'bg-surface-container text-on-surface-variant hover:bg-outline-variant'
								} px-3 py-2 rounded-xl font-seravek_medium text-sm hover:cursor-pointer flex items-center gap-1`}
							>
								<span className="size-6">
									<Image
										src={item.icon}
										alt={item.label}
										// width={'100%'}
										// height={'100%'}
										className="size-full aspect-auto object-contain pointer-events-none select-none"
									/>
								</span>
								<span>{t(`pages.portfolio.filters.${item.value}`)}</span>
							</span>
						))}
					</div>

					<div className="flex flex-col gap-4 sm:gap-6">
						{filteredStories.map((story, index) => (
							<SuccessStoryCard
								key={`success-story-${index}`}
								story={story}
								index={index}
								onMouseEnter={() => setCursorVariant('button')}
								onMouseLeave={() => setCursorVariant('default')}
							/>
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
