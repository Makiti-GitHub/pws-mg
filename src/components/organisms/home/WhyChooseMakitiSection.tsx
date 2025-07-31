import { chooseReasonsMock } from '@/data/mock'
import Statistics from '../Statistics'
import SectionHeader from '@/components/molecules/SectionHeader'
import ServiceCard from '@/components/molecules/cards/ServiceCard'

const WhyChooseMakitiSection = () => {
	return (
		<section className="px-8 md:px-[80px] lg:px-[120px] flex flex-col gap-[50px] pb-16">
			<SectionHeader
				title="Why Choose Makiti Group"
				subTitle="Partner with us for exceptional IT outsourcing solutions backed by expertise, innovation, and reliability."
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
