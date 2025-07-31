import { FC } from 'react'
import AnimatedCounter from '../atoms/animations/AnimatedCounter'

interface StatisticProps {
	count: number
	label: string
}

const Statistic: FC<StatisticProps> = ({ count, label }) => {
	return (
		<div className="flex flex-col tracking-normal font-normal items-center gap-1 text-white">
			<p className="text-5xl sm:text-6xl">
				<AnimatedCounter from={0} to={count} />
				{/* <span>{count}</span> */}
				<span>+</span>
			</p>
			<p className="text-base sm:text-lg">{label}</p>
		</div>
	)
}

export default Statistic
