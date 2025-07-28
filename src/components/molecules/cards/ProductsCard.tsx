import { Button } from '@/components/ui/button'
import { ourLiveProductsMock } from '@/data/mock'
import Image from '@rasenganjs/image'
import { ArrowUpRightIcon } from 'lucide-react'
import { FC } from 'react'

interface ProductsCardProps {
	story: (typeof ourLiveProductsMock)[number]
	withButton?: boolean
}

const ProductsCard: FC<ProductsCardProps> = ({ story, withButton = false }) => {
	return (
		<a href={story.link} target="_blank">
			<article
				tabIndex={0}
				role="button"
				className="w-full hover:cursor-pointer rounded-[20px] box_shadow_products_card"
			>
				<div className="w-full h-[250px] bg-slate-300 rounded-t-[20px]">
					<Image
						width={'100%'}
						height={'100%'}
						src={story.image}
						alt={story.title}
						className="size-full object-cover aspect-auto rounded-t-[20px]"
					/>
					{/* <img
					src={story.image}
					alt={story.title}
					className="size-full aspect-auto object-cover rounded-t-[20px]"
				/> */}
				</div>
				<div
					className={`${
						withButton ? 'flex flex-col min-h-64 justify-between gap-12' : ''
					} p-4`}
				>
					<div className="space-y-3">
						<div className="space-y-1 font-seravek_medium">
							<p className="text-xl text-on-surface">{story.title}</p>
							<p className="text-base text-on-surface-variant">{story.category}</p>
						</div>
						<p className="text-base text-outline">{story.description}</p>
					</div>
					{withButton && story.link ? (
						<Button
							variant={'primary'}
							className="gap-1 w-full !px-8 !py-2 !h-max !m-0 rounded-[40px] hover:cursor-pointer"
						>
							<span className="sr-only">View Live website</span>
							<span className="text-lg font-seravek_medium">View Live website</span>
							<ArrowUpRightIcon className="size-6" />
						</Button>
					) : null}
				</div>
			</article>
		</a>
	)
}

export default ProductsCard
