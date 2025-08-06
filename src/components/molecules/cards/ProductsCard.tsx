import { ourLiveProductsMock } from '@/data/mock'
import { cn } from '@/lib/utils'
import Image from '@rasenganjs/image'
import { FC } from 'react'

interface ProductsCardProps {
	story: (typeof ourLiveProductsMock)[number]
	withButton?: boolean
}

const ProductsCard: FC<React.ComponentProps<'article'> & ProductsCardProps> = ({
	story,
	className,
	withButton = false,
	children,
	...props
}) => {
	return (
		<a href={story.link} target="_blank">
			<article
				className={cn(
					'w-full hover:cursor-pointer rounded-[20px] box_shadow_products_card hover:scale-105 transition duration-300 ease-in-out bg-surface',
					className,
				)}
				{...props}
			>
				<div className="w-full h-[250px] bg-slate-300 rounded-t-[20px]">
					<Image
						width={'100%'}
						height={'100%'}
						src={story.image}
						alt={story.title}
						className="size-full object-cover aspect-auto rounded-t-[20px]"
					/>
				</div>
				<div
					className={`${
						children ? 'flex flex-col min-h-64 justify-between gap-12' : ''
					} p-4`}
				>
					<div className="space-y-3">
						<div className="space-y-1 font-seravek_medium">
							<p className="text-xl text-on-surface">{story.title}</p>
							<p className="text-base text-on-surface-variant">{story.category}</p>
						</div>
						<p className="text-base text-outline">{story.description}</p>
					</div>
					{children}
				</div>
			</article>
		</a>
	)
}

export default ProductsCard
