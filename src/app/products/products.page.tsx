import ProductsCard from '@/components/molecules/cards/ProductsCard'
import SectionHeader from '@/components/molecules/SectionHeader'
import { Button } from '@/components/ui/button'
import { ourLiveProductsMock } from '@/data/mock'
import { ArrowLeftIcon } from 'lucide-react'
import { PageComponent, useNavigate } from 'rasengan'

const Products: PageComponent = () => {
	const navigate = useNavigate()

	return (
		<main className="flex flex-col gap-8 px-[120px] pt-[71px] relative">
			<div className="space-y-8 relative">
				<SectionHeader
					title="Our Live Products"
					subTitle="Explore the powerful products we’ve built to solve real-world challenges. Discover how our solutions drive performance, streamline operations, and deliver value across industries."
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

Products.path = '/:locale?/products'
Products.metadata = {
	title: 'Products',
	description: 'Products page',
}

export default Products
