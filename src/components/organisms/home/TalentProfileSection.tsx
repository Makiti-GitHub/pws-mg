import SectionHeader from '@/components/molecules/SectionHeader'
import { Button } from '@/components/ui/button'
import { talentProfilesMock } from '@/data/mock'
import { ArrowRightIcon } from 'lucide-react'

const TalentProfileSection = () => {
	return (
		<section className="px-[120px] w-screen">
			<div className="flex flex-col gap-8">
				<SectionHeader
					title="Find the Talent You Need"
					subTitle="Select from our expert outsourcing profiles"
				/>

				<div className="grid grid-cols-6 lg:grid-cols-12 gap-8">
					<aside className="space-y-[26px] col-span-6 lg:col-span-4">
						{talentProfilesMock.map((profile, index) => (
							<div
								tabIndex={0}
								role="button"
								key={`talent-profile-${index}`}
								className={`${
									index === 0
										? 'bg-[#F0F1F1] border-[#44474A]'
										: 'border-[#C4C7CA]'
								} px-6 hover:cursor-pointer hover:bg-[#F0F1F1] py-4 border-[0.75px] rounded-[12px] flex gap-2.5`}
							>
								<div className="size-8 bg-red-300" />
								<div className="flex flex-col gap-2 text-x">
									<p className="text-[#020304]">{profile.title}</p>
									<p className="text-[#73777C] font-seravek_mediuml">
										From ${profile.cost}/hour
									</p>
								</div>
							</div>
						))}
					</aside>

					<div className="col-span-6 lg:col-span-8 space-y-8 rounded-[12px] border-[0.75px] p-6 border-[#C4C7CA]">
						<div className="flex gap-4">
							<div className="size-8 bg-[#F0F1F1]" />
							<div className="flex flex-col gap-2">
								<p className="text-[#020304]">{talentProfilesMock[0].title}</p>
								<p className="text-[#73777C] font-seravek_mediuml">
									From ${talentProfilesMock[0].cost}/hour
								</p>
							</div>
						</div>

						<p className="font-seravek_medium text-base text-[#73777C]">
							Expert frontend developers specialized in modern web technologies and
							responsive design
						</p>

						<div className="space-y-4">
							<p className="text-[#020304] text-2xl font-seravek_medium">
								Key Skills
							</p>
							<div className="flex flex-wrap gap-3">
								{['React', 'Vue.js', 'TypeScript', 'Tailwind CSS', 'Next.js'].map(
									(skill, index) => (
										<span
											key={`talent-skill-${index}-${skill}`}
											className="border-[0.5px] border-[#C4C7CA] px-3 py-1 rounded-[4px]"
										>
											{skill}
										</span>
									),
								)}
							</div>
						</div>

						<div className="rounded-xl space-y-8 p-6 bg-surface-container">
							<div className="space-y-6">
								<div className="space-y-1 font-seravek_medium">
									<p className="text-[#73777C] text-base">Starting Price</p>
									<p className="text-[32px] text-secondary">From $45/hour</p>
								</div>

								<Button
									variant="primary"
									className="rounded-4xl w-full h-max !py-[13px] hover:cursor-pointer"
								>
									<span className="sr-only">Request Quote</span>{' '}
									<span className="text-lg font-seravek_medium">
										Request Quote
									</span>{' '}
									<ArrowRightIcon className="size-6" />
								</Button>
							</div>

							<p className="text-center font-seravek_medium text-[#73777C] text-base">
								Get a personalized quote within 24 hours
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default TalentProfileSection
