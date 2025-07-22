import Banner from '../molecules/banner/Banner'
import Statistic from '../molecules/Statistic'

const statistics: { count: number; label: string }[] = [
	{
		count: 100,
		label: 'Projects Delivered',
	},
	{
		count: 10,
		label: 'Active Years',
	},
	{
		count: 20,
		label: 'Satisfied Clients',
	},
	{
		count: 5,
		label: 'Offices Globally',
	},
]

const Statistics = () => {
	return (
		<Banner
			variant="secondary"
			title="Trusted by companies worldwide"
			desc="Our track record speaks for itself. We've helped businesses of all sizes achieve their digital transformation goals."
		>
			<div className="w-full flex justify-between items-center px-5">
				{statistics.map((statistic, index) => (
					<Statistic
						key={`record-stats-${index}`}
						count={statistic.count}
						label={statistic.label}
					/>
				))}
			</div>
		</Banner>
	)
}

export default Statistics
