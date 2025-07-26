import Banner from '@/components/molecules/banner/Banner'
import ProductsCard from '@/components/molecules/cards/ProductsCard'
import SectionHeader from '@/components/molecules/SectionHeader'
import { Button } from '@/components/ui/button'
import { ourLiveProductsMock } from '@/data/mock'
import { ArrowRightIcon } from 'lucide-react'
import { useNavigate } from 'rasengan'

const ProductsSection = () => {
	const navigate = useNavigate()
	return (
		<section
			id="products"
			className="flex flex-col gap-8 px-8 md:px-[80px] lg:px-[120px] pb-16"
		>
			<div className="space-y-8">
				<SectionHeader
					title="Our Live Products"
					subTitle="Explore our successfully delivered and deployed applications currently serving real users and businesses worldwide."
				/>
				<div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
					{ourLiveProductsMock.map((story, index) => (
						<ProductsCard key={`success-story-${index}`} story={story} />
					))}
				</div>
			</div>
			<Banner
				variant="primary"
				title="Empower Your Business with Our Products"
				desc="Experience the same level of excellence and results. Let’s discuss
								how we can help you transform your business through strategic IT
								Outsourcing."
			>
				<Button
					onClick={() => navigate('/products')}
					className="rounded-4xl h-max py-3 px-5 hover:cursor-pointer border border-secondary text-secondary bg-transparent hover:bg-accent/5"
				>
					<span className="sr-only">Explore Products</span>{' '}
					<span className="text-lg font-seravek_medium">Explore Products</span>{' '}
					<ArrowRightIcon className="size-6" />
				</Button>
			</Banner>
		</section>
	)
}

export default ProductsSection
