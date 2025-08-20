import Banner from '@/components/molecules/banner/Banner'
import ProductsCard from '@/components/molecules/cards/ProductsCard'
import SectionHeader from '@/components/molecules/SectionHeader'
import { Button } from '@/components/ui/button'
import { ourLiveProductsMock } from '@/data/mock'
import { useFloatingCursor } from '@/hooks/guard/ContextGuard'
import { ArrowRightIcon } from 'lucide-react'
import { useNavigate } from 'rasengan'
import { useTranslation } from 'react-i18next'

const ProductsSection = () => {
	const navigate = useNavigate()
	const { t, i18n } = useTranslation()
	const { setCursorVariant } = useFloatingCursor()

	return (
		<section
			id="products"
			// className="flex flex-col gap-8 px-4 sm:px-8 md:px-[80px] lg:px-[120px] pb-16 bg-gradient-to-t from-secondary from-10% to-surface to-45%"
			className="flex flex-col gap-8 px-4 sm:px-8 md:px-[80px] lg:px-[120px] pb-16"
		>
			<div className="space-y-8">
				<SectionHeader
					title={t('pages.home.sections.ourLiveProducts.title')}
					subTitle={t('pages.home.sections.ourLiveProducts.subtitle')}
				/>
				<div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
					{ourLiveProductsMock.map((story, index) => (
						<ProductsCard
							index={index + 1}
							key={`success-story-${index}`}
							story={story}
						/>
					))}
				</div>
			</div>
			<Banner
				variant="primary"
				title={t('pages.home.sections.ourLiveProducts.banner.title')}
				desc={t('pages.home.sections.ourLiveProducts.banner.subtitle')}
			>
				<Button
					onClick={() => navigate(`/${i18n.language}/products`)}
					onMouseEnter={() => setCursorVariant('button')}
					onMouseLeave={() => setCursorVariant('default')}
					className="rounded-4xl h-max py-2 sm:py-3 px-5 hover:cursor-pointer border border-secondary text-secondary bg-transparent hover:bg-accent/5"
				>
					<span className="sr-only">Explore Products</span>{' '}
					<span className="text-base sm:text-lg font-seravek_medium">
						{t('pages.home.sections.ourLiveProducts.banner.cta')}
					</span>{' '}
					<ArrowRightIcon className="size-5 sm:size-6" />
				</Button>
			</Banner>
		</section>
	)
}

export default ProductsSection
