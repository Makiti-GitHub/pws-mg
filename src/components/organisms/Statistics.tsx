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
		<div className="flex flex-col gap-4 py-8 bg-secondary rounded-2xl">
			<h3 className="text-[32px] font-bold text-center text-white">
				Trusted by companies worldwide
			</h3>
			<p className="text-[#C4C7CA] text-base font-normal text-center">
				Our track record speaks for itself. We've helped businesses of all sizes achieve
				their digital transformation goals.
			</p>
			<div className="w-full flex justify-between items-center px-[80px]">
				{statistics.map((statistic, index) => (
					<Statistic
						key={`record-stats-${index}`}
						count={statistic.count}
						label={statistic.label}
					/>
				))}
			</div>
		</div>
	)
}

export default Statistics
