import { successStoriesMock, techStackMock } from '@/data/mock'
import { cn } from '@/lib/utils'
import Image from '@rasenganjs/image'
import { Link } from 'rasengan'
import { FC } from 'react'
import { useTranslation } from 'react-i18next'

interface SuccessStoryCardProps {
	story: (typeof successStoriesMock)[number]
	index: number
}

const SuccessStoryCard: FC<React.ComponentProps<'article'> & SuccessStoryCardProps> = ({
	story,
	index,
	className,
	...props
}) => {
	const { t, i18n } = useTranslation()
	return (
		<Link to={`/${i18n.language}/portfolio/${story.id}`}>
			<article
				className={cn(
					'w-full hover:cursor-pointer grid lg:grid-cols-5 xl:grid-cols-2 gap-5 sm:gap-10 border rounded-3xl sm:rounded-[40px] p-3 border-outline-variant hover:scale-95 transition duration-300 ease-in-out',
					className,
				)}
				{...props}
			>
				<div className="col-span-1 lg:col-span-3 xl:col-span-1 w-full h-56 sm:h-[365px] md:h-auto bg-white-300 rounded-2xl sm:rounded-[30px]">
					<Image
						src={story.image}
						alt={story.title}
						width={'100%'}
						height={'100%'}
						className="size-full aspect-auto object-cover rounded-2xl sm:rounded-[30px]"
					/>
				</div>
				<div className="space-y-2 col-span-1 lg:col-span-2 xl:col-span-1">
					<div className="flex">
						{story.techs?.map((item, index) => (
							<div
								key={`tech-${index}-${story.title}`}
								className={`size-12 rounded-sm bg-[#F0F0F0] border-[1.5px] flex items-center justify-center ${
									index % 2 === 0 ? 'rotate-6' : '-rotate-6'
								}`}
							>
								<Image
									src={techStackMock[item]}
									width={'100%'}
									height={'100%'}
									alt={`${item}`}
									className="object-contain aspect-auto"
								/>
							</div>
						))}
					</div>
					<div className="space-y-2 font-seravek_medium">
						<div className="space-y-2">
							<p className="text-[32px] text-on-surface">{story.title}</p>
							<p className="text-base text-on-surface-variant">
								{story.categoryTypes?.map((item, index) => {
									return `${t(`pages.portfolio.projects.card.category.${item}`)}${
										index < story.categoryTypes.length - 1 ? ', ' : ''
									}`
								})}
							</p>
						</div>
						<p className="text-base text-outline">
							{t(`pages.portfolio.projects.stories.story${index + 1}.description`)}
						</p>
					</div>
					<div className="space-y-2 font-seravek_medium">
						<p className="text-base text-on-surface-variant">{t('keyResults')}</p>

						<ul className="list-disc pl-8">
							{story.results.map((item, index2) => (
								<li
									key={`story-${index}-result-${index2}-${item}`}
									className={`text-sm text-success`}
								>
									{/* {item} */}
									{t(
										`pages.portfolio.projects.stories.story${
											index + 1
										}.results.result${index2 + 1}`,
									)}
								</li>
							))}
						</ul>
					</div>
					<div className="space-y-2">
						<p className="text-base font-seravek_medium text-on-surface-variant">
							{t('industry')}
						</p>

						<div className="flex flex-wrap gap-2.5">
							{story.tags.map((item, index) => (
								<span
									key={`story-${index}-industry-${item}`}
									className="bg-surface-container px-4 py-1 rounded-lg text-sm text-[#44474A]"
								>
									{t(`pages.portfolio.projects.card.industry.${item.type}`)}
								</span>
							))}
						</div>
					</div>
				</div>
			</article>
		</Link>
	)
}

export default SuccessStoryCard
