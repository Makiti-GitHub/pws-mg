import SectionHeader from '@/components/molecules/SectionHeader'
import { expertisesMock, solutionsProcessStackMock } from '@/data/mock'

const OurExpertiseSection = () => {
	return (
		<section
			id="services"
			className="px-8 md:px-[80px] lg:px-[120px] w-screen bg-gradient-to-b from-secondary from-35% to-surface to-60% pb-16"
		>
			<div className="flex flex-col p-6 gap-10 bg-surface box_shadow_expertise_container rounded-2xl">
				<SectionHeader
					title="Our Expertise"
					subTitle="Comprehensive IT outsourcing solutions across all technology domains"
				/>

				<div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 font-seravek_regular">
					{expertisesMock.map((expertise, index) => (
						<div
							key={`expertise-item-${index}`}
							className="box_shadow flex flex-col rounded-xl p-6 gap-[30px] hover:scale-105 hover:border hover:border-primary transition duration-300 ease-in-out"
						>
							<div className="flex flex-col gap-5">
								<div
									className="size-[74px] rounded-xl flex items-center justify-center"
									style={{ backgroundColor: expertise.color }}
								>
									<div className="size-12">
										<img
											src={expertise.icon}
											alt={expertise.title}
											className="size-full object-contain aspect-auto"
										/>
									</div>
								</div>
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
					<h3 className="text-[32px] font-bold text-center text-white px-8">
						Our Solution Process Stack
					</h3>
					<div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 2xl:grid-cols-7 justify-between items-center px-[40px] gap-6">
						{solutionsProcessStackMock.map((solution, index) => (
							<div
								key={`process-solution-${index}`}
								className={`
									${index === solutionsProcessStackMock.length - 1 ? 'sm:col-span-2 lg:col-span-1' : ''}
									${
										index === solutionsProcessStackMock.length - 2
											? 'lg:col-span-2 2xl:col-span-1'
											: ''
									} bg-white rounded-xl py-5 px-6 flex flex-col items-center justify-between gap-7 h-full`}
							>
								<div className="size-12">
									<img
										src={solution.icon}
										alt={solution.label}
										className="size-full object-contain aspect-auto"
									/>
								</div>
								<p className="text-center">{solution.label}</p>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	)
}

export default OurExpertiseSection
