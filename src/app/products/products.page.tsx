import ProductsCard from '@/components/molecules/cards/ProductsCard'
import SectionHeader from '@/components/molecules/SectionHeader'
import { Button } from '@/components/ui/button'
import { ourLiveProductsMock } from '@/data/mock'
import { ArrowLeftIcon } from 'lucide-react'
import { PageComponent, useNavigate } from 'rasengan'
import { useTranslation } from 'react-i18next'

const Products: PageComponent = () => {
	const navigate = useNavigate()
	const { t } = useTranslation()

	return (
		<main className="flex flex-col gap-8 px-8 md:px-[80px] lg:px-[120px] pt-[150px] relative">
			<div className="space-y-8 relative">
				<Button
					variant={'ghost'}
					onClick={() => navigate('/')}
					className="xl:absolute xl:left-0 xl:top-0 text-secondary !py-3 !px-5 !h-max hover:cursor-pointer bg-white box_shadow_products_card !font-seravek_medium !text-base"
				>
					<ArrowLeftIcon className="size-6" />
					<span className="sr-only">Back to home</span>
					<span>{t('common.backToHomeCta')}</span>
				</Button>
				<SectionHeader
					title={t('pages.products.title')}
					subTitle={t('pages.products.subtitle')}
				/>

				<div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
					{ourLiveProductsMock.map((story, index) => (
						<ProductsCard
							key={`products-success-story-${index}`}
							story={story}
							withButton
						/>
					))}
				</div>
			</div>
		</main>
	)
}

Products.path = '/:locale?/products'
Products.metadata = {
	title: 'Products',
	description: 'Products page',
}

export default Products
