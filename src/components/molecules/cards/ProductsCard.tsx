import { Button } from '@/components/ui/button'
import { ArrowUpRightIcon } from 'lucide-react'
import { FC } from 'react'

interface ProductsCardProps {
	story: {
		title: string
		category: string
		description: string
	}
	withButton?: boolean
}

const ProductsCard: FC<ProductsCardProps> = ({ story, withButton = false }) => {
	return (
		<div
			tabIndex={0}
			role="button"
			className="w-full hover:cursor-pointer rounded-[20px] box_shadow_products_card"
		>
			<div className="w-full h-[250px] bg-red-300 rounded-t-[20px]" />
			<div className="space-y-3 p-4">
				<div className="space-y-1 font-seravek_medium">
					<p className="text-xl text-on-surface">{story.title}</p>
					<p className="text-base text-on-surface-variant">{story.category}</p>
				</div>
				<p className="text-base text-outline">{story.description}</p>

				{withButton && (
					<Button
						variant={'primary'}
						className="gap-1 w-full !px-8 !py-2 !h-max !m-0 !mt-[46px] rounded-[40px] hover:cursor-pointer"
					>
						<span className="sr-only">View Live website</span>
						<span className="text-lg font-seravek_medium">View Live website</span>
						<ArrowUpRightIcon className="size-6" />
					</Button>
				)}
			</div>
		</div>
	)
}

export default ProductsCard
