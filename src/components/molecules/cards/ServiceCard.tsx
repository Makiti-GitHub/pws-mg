import { FC } from 'react'

interface ServiceCardProps {
	service: {
		title: string
		desc: string
		icon?: string
		color: string
	}
}

const ServiceCard: FC<ServiceCardProps> = ({ service: { title, desc, icon, color } }) => {
	return (
		<div className="box_shadow flex flex-col rounded-xl p-6 gap-4">
			<div className="flex flex-col gap-5 items-center">
				<div
					className="size-[74px] rounded-xl flex items-center justify-center"
					style={{ backgroundColor: color }}
				>
					<div className="size-12">
						<img
							src={icon}
							alt={title}
							className="size-full object-contain aspect-auto"
						/>
					</div>
				</div>
				<p className="text-2xl font-seravek_medium text-on-surface text-center">{title}</p>
			</div>
			<p className="text-on-surface-variant text-xl text-center">{desc}</p>
		</div>
	)
}

export default ServiceCard
