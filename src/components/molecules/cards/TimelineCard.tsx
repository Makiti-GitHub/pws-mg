import { SendHorizonalIcon } from 'lucide-react'
import { FC } from 'react'

interface TimelineCardProps {
	timeline: {
		date: string
		desc: string
	}
}

const TimelineCard: FC<TimelineCardProps> = ({ timeline: { date, desc } }) => {
	return (
		<div className="rounded-lg p-5 box_shadow_products_card bg-white">
			<div className="flex flex-col gap-6 max-w-[398px]">
				<span className="bg-secondary px-3 py-2 border-2 border-secondary rounded-lg w-max">
					<span className="font-seravek_medium text-[28px] text-white">{date}</span>
				</span>
				<div className="flex items-center gap-2.5">
					<SendHorizonalIcon className="fill-secondary size-11" />
					<span className="text-2xl text-on-surface-variant leading-10 flex-1">
						{desc}
					</span>
				</div>
			</div>
		</div>
	)
}

export default TimelineCard
