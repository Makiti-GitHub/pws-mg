import SectionHeader from '@/components/molecules/SectionHeader'
import { expertisesMock, solutionsProcessStackMock } from '@/data/mock'

const OurExpertiseSection = () => {
	return (
		<section className="px-[120px] w-screen">
			<div className="flex flex-col p-6 gap-10 bg-[#FCFCFC] box_shadow_expertise_container rounded-2xl">
				<SectionHeader
					title="Our Expertise"
					subTitle="Comprehensive IT outsourcing solutions across all technology domains"
				/>

				<div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 font-seravek_regular">
					{expertisesMock.map((expertise, index) => (
						<div
							key={`expertise-item-${index}`}
							className="box_shadow flex flex-col rounded-[12px] p-6 gap-[30px]"
						>
							<div className="flex flex-col gap-5">
								<div className="size-[74px] rounded-[12px] bg-[#DEEAFD]"></div>
								<p className="text-2xl font-seravek_medium text-[#020304]">
									{expertise.title}
								</p>
							</div>
							<div className="text-[#44474A] text-xl flex flex-col gap-5">
								<p>{expertise.content.description}</p>
								<ul className="list-disc pl-8">
									{expertise.content.list.map((item, index) => (
										<li
											key={`expertise-item-option-${index}-${item}`}
											className={`expertise-item-option-${index}-${item}`}
										>
											{item}
										</li>
									))}
								</ul>
							</div>
						</div>
					))}
				</div>

				<div className="flex flex-col gap-4 py-8 bg-secondary rounded-2xl">
					<h3 className="text-[32px] font-bold text-center text-white">
						Our Solution Process Stack
					</h3>
					<div className="w-full flex flex-wrap justify-between items-center px-[80px] gap-6">
						{solutionsProcessStackMock.map((solution, index) => (
							<div
								key={`solution-${index}`}
								className="bg-white rounded-2xl w-[178.3px] h-[160px] py-5 px-6"
							>
								<p>{solution}</p>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	)
}

export default OurExpertiseSection
