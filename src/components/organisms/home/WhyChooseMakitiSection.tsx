import { chooseReasonsMock } from '@/data/mock'
import Statistics from '../Statistics'
import SectionHeader from '@/components/molecules/SectionHeader'
import ServiceCard from '@/components/molecules/cards/ServiceCard'
import { useTranslation } from 'react-i18next'

const WhyChooseMakitiSection = () => {
	const { t } = useTranslation()
	return (
		<section className="px-4 sm:px-8 md:px-[80px] lg:px-[120px] flex flex-col gap-[50px] pb-16">
			<SectionHeader
				title={t('pages.home.sections.whyChooseMakiti.title')}
				subTitle={t('pages.home.sections.whyChooseMakiti.subtitle')}
			/>

			<div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-4 gap-4">
				{chooseReasonsMock.map((reason, index) => (
					<ServiceCard
						key={`choose-reason-${index}`}
						service={reason}
						index={index + 1}
					/>
				))}
			</div>

			<Statistics />
		</section>
	)
}

export default WhyChooseMakitiSection
