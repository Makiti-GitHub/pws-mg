import { SendHorizonalIcon } from 'lucide-react'
import { FC } from 'react'

interface TimelineCardProps {
	timeline: {
		date: string
		desc: string
	}
	translation?: string
}

const TimelineCard: FC<TimelineCardProps> = ({ timeline: { date, desc }, translation }) => {
	return (
		<div className="rounded-lg p-3 sm:p-5 box_shadow_products_card bg-white">
			<div className="flex flex-col gap-3 sm:gap-6 max-w-[398px]">
				<span className="bg-secondary px-1.5 sm:px-3 py-1 sm:py-2 border-2 border-secondary rounded-lg w-max">
					<span className="font-seravek_medium text-xl sm:text-[28px] text-white">
						{date}
					</span>
				</span>
				<div className="flex items-center gap-2.5">
					<SendHorizonalIcon className="fill-secondary size-6 sm:size-11" />
					<span className="text-lg sm:text-2xl text-on-surface-variant sm:leading-10 flex-1">
						{translation ?? desc}
					</span>
				</div>
			</div>
		</div>
	)
}

export default TimelineCard
