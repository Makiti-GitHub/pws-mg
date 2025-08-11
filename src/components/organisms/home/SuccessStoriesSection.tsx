import Banner from '@/components/molecules/banner/Banner'
import SuccessStoryCard from '@/components/molecules/cards/SuccessStoryCard'
import SectionHeader from '@/components/molecules/SectionHeader'
import { Button } from '@/components/ui/button'
import { successStoriesMock } from '@/data/mock'
import { useFloatingCursor } from '@/hooks/guard/ContextGuard'
import { ArrowRightIcon } from 'lucide-react'
import { useNavigate } from 'rasengan'
import { useTranslation } from 'react-i18next'

const SuccessStoriesSection = () => {
	const navigate = useNavigate()
	const { t } = useTranslation()
	const { setCursorVariant } = useFloatingCursor()

	return (
		<section className="flex flex-col gap-8 px-3 sm:px-8 md:px-[80px] lg:px-[120px] pb-16">
			<SectionHeader
				title={t('pages.home.sections.ourSuccessStories.title')}
				subTitle={t('pages.home.sections.ourSuccessStories.subtitle')}
			/>

			<div className="space-y-8">
				<div className="flex flex-col gap-6">
					{successStoriesMock.slice(0, 3).map((story, index) => (
						<SuccessStoryCard
							key={`success-story-${index}`}
							story={story}
							index={index}
						/>
					))}
				</div>

				<Banner
					variant="secondary"
					title={t('pages.home.sections.ourSuccessStories.banner.title')}
					desc={t('pages.home.sections.ourSuccessStories.banner.subtitle')}
				>
					<Button
						onClick={() => navigate('/portfolio')}
						onMouseEnter={() => setCursorVariant('button')}
						onMouseLeave={() => setCursorVariant('default')}
						className="rounded-4xl !h-max !py-2 sm:!py-3 !px-5 hover:cursor-pointer border border-white text-white bg-transparent hover:bg-accent/5"
					>
						<span className="sr-only">View Portfolio</span>{' '}
						<span className="text-base sm:text-lg font-seravek_medium">
							{t('pages.home.sections.ourSuccessStories.banner.cta')}
						</span>{' '}
						<ArrowRightIcon className="size-5 sm:size-6" />
					</Button>
				</Banner>
			</div>
		</section>
	)
}

export default SuccessStoriesSection
