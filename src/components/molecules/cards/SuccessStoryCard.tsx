import { successStoriesMock } from '@/data/mock'
import { FC } from 'react'

interface SuccessStoryCardProps {
	story: (typeof successStoriesMock)[number]
}

const SuccessStoryCard: FC<SuccessStoryCardProps> = ({ story }) => {
	return (
		<div
			tabIndex={0}
			role="button"
			className="w-full hover:cursor-pointer grid lg:grid-cols-5 xl:grid-cols-2 gap-10 border rounded-[40px] p-3 border-outline-variant"
		>
			<div className="col-span-1 lg:col-span-3 xl:col-span-1 w-full h-[365.2131652832031px] sm:h-auto bg-white-300 rounded-[30px]">
				<img
					src={story.image}
					alt={story.title}
					className="size-full aspect-auto object-cover rounded-[30px]"
				/>
			</div>
			<div className="space-y-2 col-span-1 lg:col-span-2 xl:col-span-1">
				<div className="flex">
					{Array.from({ length: 4 }).map((_, index) => (
						<div
							key={`tech-${index}-${story.title}`}
							className={`size-12 rounded-sm bg-[#F0F0F0] border-[1.5px] border-white ${
								index % 2 === 0 ? 'rotate-6' : '-rotate-6'
							}`}
						/>
					))}
				</div>
				<div className="space-y-2 font-seravek_medium">
					<div className="space-y-2">
						<p className="text-[32px] text-on-surface">{story.title}</p>
						<p className="text-base text-on-surface-variant">{story.category}</p>
					</div>
					<p className="text-base text-outline">{story.description}</p>
				</div>
				<div className="space-y-2 font-seravek_medium">
					<p className="text-base text-on-surface-variant">Key results</p>

					<ul className="list-disc pl-8">
						{story.results.map((item, index) => (
							<li
								key={`story-${index}-result-${index}-${item}`}
								className={`text-sm text-success`}
							>
								{item}
							</li>
						))}
					</ul>
				</div>
				<div className="space-y-2">
					<p className="text-base font-seravek_medium text-on-surface-variant">
						Industry
					</p>

					<div className="flex flex-wrap gap-2.5">
						{story.tags.map((item, index) => (
							<span
								key={`story-${index}-industry-${item}`}
								className="bg-surface-container px-4 py-1 rounded-[8px] text-sm text-[#44474A]"
							>
								{item}
							</span>
						))}
					</div>
				</div>
			</div>
		</div>
	)
}

export default SuccessStoryCard
