import { expertisesMock } from '@/data/mock'
import Image from '@rasenganjs/image'
import { useTranslation } from 'react-i18next'

interface ExpertiseCardProps {
	expertise: (typeof expertisesMock)[number]
	index: number
}

const ExpertiseCard: React.FC<ExpertiseCardProps> = ({ expertise, index }) => {
	const { t } = useTranslation()
	return (
		<div className="box_shadow group hover:bg-secondary flex flex-col rounded-xl p-3 sm:p-6 gap-[30px] hover:scale-105 transition duration-300 ease-in-out">
			<div className="flex flex-col gap-5">
				<div
					className="size-14 sm:size-[74px] rounded-xl flex items-center justify-center"
					style={{ backgroundColor: expertise.color }}
				>
					<div className="size-8 sm:size-12">
						<Image
							src={expertise.icon}
							alt={expertise.title}
							width={'100%'}
							height={'100%'}
							className="size-full object-contain aspect-auto"
						/>
					</div>
				</div>
				<p className="text-2xl font-seravek_medium text-[#020304] group-hover:text-white transition-colors">
					{t(`pages.home.sections.ourExpertise.items.item${index + 1}.title`)}
				</p>
			</div>
			<div className="text-[#44474A] group-hover:text-outline-variant text-xl flex flex-col gap-5">
				<p>
					{t(
						`pages.home.sections.ourExpertise.items.item${
							index + 1
						}.content.description`,
					)}
				</p>
				<ul className="list-disc pl-8">
					{expertise.content.list.map((item, index2) => (
						<li
							key={`expertise-item-option-${index2}-${item}`}
							className={`expertise-item-option-${index2}-${item}`}
						>
							{t(
								`pages.home.sections.ourExpertise.items.item${
									index + 1
								}.content.list.item${index2 + 1}`,
							)}
						</li>
					))}
				</ul>
			</div>
		</div>
	)
}

export default ExpertiseCard
