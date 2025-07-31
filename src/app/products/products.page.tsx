import ProductsCard from '@/components/molecules/cards/ProductsCard'
import SectionHeader from '@/components/molecules/SectionHeader'
import { Button } from '@/components/ui/button'
import { ourLiveProductsMock } from '@/data/mock'
import { useFloatingCursor } from '@/hooks/guard/ContextGuard'
import { ArrowLeftIcon, ArrowUpRightIcon } from 'lucide-react'
import { PageComponent, useNavigate } from 'rasengan'
import { useTranslation } from 'react-i18next'

const Products: PageComponent = () => {
	const navigate = useNavigate()
	const { t } = useTranslation()
	const { setCursorVariant } = useFloatingCursor()

	return (
		<main className="flex flex-col gap-4 sm:gap-8 px-4 sm:px-8 md:px-[80px] lg:px-[120px] pt-[150px] relative">
			<div className="space-y-8 relative">
				<Button
					variant={'ghost'}
					onClick={() => navigate('/')}
					onMouseEnter={() => setCursorVariant('button')}
					onMouseLeave={() => setCursorVariant('default')}
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

				<div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6">
					{ourLiveProductsMock.map((story, index) => (
						<ProductsCard
							key={`products-success-story-${index}`}
							story={story}
							withButton
							onMouseEnter={() => setCursorVariant('button')}
							onMouseLeave={() => setCursorVariant('default')}
						>
							<Button
								variant={'primary'}
								className="gap-1 w-full !px-8 !py-2 !h-max !m-0 rounded-[40px] hover:cursor-pointer"
							>
								<span className="sr-only">View Live website</span>
								<span className="text-lg font-seravek_medium">
									{t('viewLiveWebsite')}
								</span>
								<ArrowUpRightIcon className="size-6" />
							</Button>
						</ProductsCard>
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
