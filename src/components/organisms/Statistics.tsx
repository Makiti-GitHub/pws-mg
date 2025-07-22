import { statisticsMock } from '@/data/mock'
import Banner from '../molecules/banner/Banner'
import Statistic from '../molecules/Statistic'

const Statistics = () => {
	return (
		<Banner
			variant="secondary"
			title="Trusted by companies worldwide"
			desc="Our track record speaks for itself. We've helped businesses of all sizes achieve their digital transformation goals."
		>
			<div className="w-full flex justify-between items-center px-5">
				{statisticsMock.map((statistic, index) => (
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
