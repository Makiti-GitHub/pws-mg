import ExpertiseCard from '@/components/molecules/cards/ExpertiseCard'
import SectionHeader from '@/components/molecules/SectionHeader'
import { expertisesMock, solutionsProcessStackMock } from '@/data/mock'
import { useTranslation } from 'react-i18next'

const OurExpertiseSection = () => {
	const { t } = useTranslation()
	return (
		<section
			id="services"
			className="px-3 sm:px-8 scroll-mt-[150px] md:px-[80px] lg:px-[120px] w-screen bg-gradient-to-b from-secondary from-35% to-surface to-60% pb-16"
		>
			<div className="flex flex-col px-3 sm:px-6 py-6 gap-10 bg-surface box_shadow_expertise_container rounded-2xl">
				<SectionHeader
					title={t('pages.home.sections.ourExpertise.title')}
					subTitle={t('pages.home.sections.ourExpertise.subtitle')}
				/>

				<div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 font-seravek_regular">
					{expertisesMock.map((expertise, index) => (
						<ExpertiseCard
							expertise={expertise}
							index={index}
							key={`expertise-item-${index}`}
						/>
					))}
				</div>

				<div className="flex flex-col gap-4 py-8 bg-secondary rounded-2xl">
					<h3 className="text-3xl sm:text-[32px] font-bold text-center text-white px-4 sm:px-8">
						{t('pages.home.sections.ourExpertise.ourSolutionProcessStack.title')}
					</h3>
					<div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 2xl:grid-cols-7 justify-between items-center px-7 sm:px-[40px] gap-6">
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
								<p className="text-center">
									{t(
										`pages.home.sections.ourExpertise.ourSolutionProcessStack.items.item${
											index + 1
										}`,
									)}
								</p>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	)
}

export default OurExpertiseSection
