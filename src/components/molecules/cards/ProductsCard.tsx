import { ourLiveProductsMock } from '@/data/mock'
import { cn } from '@/lib/utils'
import Image from '@rasenganjs/image'
import { FC } from 'react'
import { useTranslation } from 'react-i18next'

interface ProductsCardProps {
	story: (typeof ourLiveProductsMock)[number]
	index?: number
	withButton?: boolean
}

const ProductsCard: FC<React.ComponentProps<'article'> & ProductsCardProps> = ({
	story,
	index = 1,
	className,
	withButton = false,
	children,
	...props
}) => {
	const { t } = useTranslation()
	return (
		<a href={story.link} rel="noopener noreferrer" target="_blank">
			<article
				className={cn(
					'w-full h-full hover:cursor-pointer rounded-[20px] box_shadow_products_card hover:scale-[103%] transition duration-300 ease-in-out bg-surface',
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
						children ? 'flex flex-1 flex-col min-h-64 justify-between gap-12' : ''
					} p-4`}
				>
					<div className="space-y-3">
						<div className="space-y-1 font-seravek_medium">
							<p className="text-xl text-on-surface">
								{t(
									`pages.home.sections.ourLiveProducts.products.product${index}.title`,
								)}
							</p>
							<p className="text-base text-on-surface-variant">
								{t(
									`pages.home.sections.ourLiveProducts.products.product${index}.category`,
								)}
							</p>
						</div>
						<p className="text-base text-outline">
							{t(
								`pages.home.sections.ourLiveProducts.products.product${index}.description`,
							)}
						</p>
					</div>
					{children}
				</div>
			</article>
		</a>
	)
}

export default ProductsCard
