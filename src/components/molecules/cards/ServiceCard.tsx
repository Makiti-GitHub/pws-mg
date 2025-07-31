import Image from '@rasenganjs/image'
import { FC } from 'react'
import { useTranslation } from 'react-i18next'

interface ServiceCardProps {
	service: {
		title: string
		desc: string
		icon?: string
		color: string
	}
	index?: number
}

const ServiceCard: FC<ServiceCardProps> = ({ service: { title, desc, icon, color }, index }) => {
	const { t } = useTranslation()
	return (
		<div className="box_shadow flex flex-col rounded-xl p-6 gap-4">
			<div className="flex flex-col gap-5 items-center">
				<div
					className="size-[74px] rounded-xl flex items-center justify-center"
					style={{ backgroundColor: color }}
				>
					{icon ? (
						<div className="size-12">
							<Image
								src={icon}
								alt={title}
								width={'100%'}
								height={'100%'}
								className="size-full aspect-auto object-contain"
							/>
							{/* <img
							src={icon}
							alt={title}
							className="size-full object-contain aspect-auto"
						/> */}
						</div>
					) : null}
				</div>
				<p className="text-2xl font-seravek_medium text-on-surface text-center">
					{index ? t(`common.values.value${index}.title`) : title}
				</p>
			</div>
			<p className="text-on-surface-variant text-xl text-center">
				{index ? t(`common.values.value${index}.content`) : desc}
			</p>
		</div>
	)
}

export default ServiceCard
