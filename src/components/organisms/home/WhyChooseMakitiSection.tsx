import { chooseReasonsMock } from '@/data/mock'
import Statistics from '../Statistics'
import SectionHeader from '@/components/molecules/SectionHeader'

const WhyChooseMakitiSection = () => {
	return (
		<section className="px-[120px] flex flex-col gap-[50px]">
			<SectionHeader
				title="Why Choose Makiti Group"
				subTitle="Partner with us for exceptional IT outsourcing solutions backed by expertise, innovation, and reliability."
			/>

			<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-4 gap-4">
				{chooseReasonsMock.map((reason, index) => (
					<div
						key={`choose-reason-${index}`}
						className="box_shadow flex flex-col rounded-[12px] p-6 gap-4"
					>
						<div className="flex flex-col gap-5 items-center">
							<div className="w-[74px] h-[74px] rounded-[12px] bg-[#DEEAFD]"></div>
							<p className="text-2xl font-seravek_medium text-on-surface text-center">
								{reason.title}
							</p>
						</div>
						<p className="text-on-surface-variant text-xl text-center">{reason.desc}</p>
					</div>
				))}
			</div>

			<Statistics />
		</section>
	)
}

export default WhyChooseMakitiSection
