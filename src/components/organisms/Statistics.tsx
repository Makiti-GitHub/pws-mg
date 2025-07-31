import { statisticsMock } from '@/data/mock'
import Banner from '../molecules/banner/Banner'
import Statistic from '../molecules/Statistic'
import { useTranslation } from 'react-i18next'

const Statistics = () => {
	const { t } = useTranslation()
	return (
		<Banner
			variant="secondary"
			title={t('pages.about.sections.statistics.title')}
			desc={t('pages.about.sections.statistics.subtitle')}
		>
			<div className="w-full grid grid-cols-2 lg:grid-cols-4 gap-4 justify-between items-center sm:px-5">
				{statisticsMock.map((statistic, index) => (
					<Statistic
						key={`record-stats-${index}`}
						count={statistic.count}
						label={t(`pages.about.sections.statistics.stat.${statistic.transKey}`)}
					/>
				))}
			</div>
		</Banner>
	)
}

export default Statistics
