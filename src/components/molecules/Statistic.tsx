import { FC } from 'react'

interface StatisticProps {
	count: number
	label: string
}

const Statistic: FC<StatisticProps> = ({ count, label }) => {
	return (
		<div className="flex flex-col tracking-normal font-normal items-center gap-1 text-white">
			<p className="text-6xl">
				<span>{count}</span>
				<span>+</span>
			</p>
			<p className="text-lg">{label}</p>
		</div>
	)
}

export default Statistic
