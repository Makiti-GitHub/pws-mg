import SectionHeader from '@/components/molecules/SectionHeader'
import { Button } from '@/components/ui/button'
import { talentProfilesMock } from '@/data/mock'
import { ArrowRightIcon } from 'lucide-react'

import clockIcon from '@/assets/images/Find the talent you need/iconsax-clock.svg'
import locationIcon from '@/assets/images/Find the talent you need/iconsax-location.svg'
import { useState } from 'react'

const TalentProfileSection = () => {
	const [selectedTalent, setSelectedTalent] = useState<(typeof talentProfilesMock)[number]>(
		talentProfilesMock[0],
	)

	return (
		<section className="px-8 md:px-[80px] lg:px-[120px] w-screen pb-16">
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
								onClick={() => setSelectedTalent(profile)}
								className={`${
									profile.title === selectedTalent.title
										? 'bg-surface-container border-[#44474A]'
										: 'border-[#C4C7CA]'
								} px-6 hover:cursor-pointer hover:bg-surface-container py-4 border-[0.75px] rounded-[12px] flex gap-2.5`}
							>
								<img
									src={profile.icon}
									alt={profile.title}
									className="size-8 object-contain aspect-auto"
								/>

								<div className="flex flex-col gap-2 text-x">
									<p className="text-on-surface">{profile.title}</p>
									<p className="text-[#73777C] font-seravek_mediuml">
										From ${profile.hourCost}/hour
									</p>
								</div>
							</div>
						))}
					</aside>

					<div className="col-span-6 lg:col-span-8 space-y-8 rounded-[12px] border-[0.75px] p-6 border-outline-variant">
						<div className="flex gap-4">
							<div className="p-2.5 rounded-[4px] bg-surface-container flex items-center justify-center">
								<div className="size-8">
									<img
										src={selectedTalent.icon}
										alt={selectedTalent.title}
										className="size-full object-contain aspect-auto"
									/>
								</div>
							</div>
							<div className="flex flex-col gap-2 w-full">
								<p className="text-on-surface">{selectedTalent.title}</p>
								<div className="text-outline font-seravek_medium text-base gap-3.5 flex items-center">
									<div className="flex items-center gap-2">
										<img
											src={clockIcon}
											alt="clock icon"
											className="size-5 object-contain aspect-auto"
										/>
										<span className="">{selectedTalent.expYear}+ years</span>
									</div>
									<div className="flex items-center gap-2">
										<img
											src={locationIcon}
											alt="location icon"
											className="size-5 object-contain aspect-auto"
										/>
										<span className="">{selectedTalent.location}</span>
									</div>
								</div>
							</div>
						</div>

						<p className="font-seravek_medium text-base text-outline">
							{selectedTalent.description}
						</p>

						<div className="space-y-4">
							<p className="text-on-surface text-2xl font-seravek_medium">
								Key Skills
							</p>
							<div className="flex flex-wrap gap-3">
								{selectedTalent.skills.map((skill, index) => (
									<span
										key={`talent-skill-${index}-${skill}`}
										className="border-[0.5px] border-outline-variant px-3 py-1 rounded-[4px]"
									>
										{skill}
									</span>
								))}
							</div>
						</div>

						<div className="rounded-xl space-y-8 p-6 bg-surface-container">
							<div className="space-y-6">
								<div className="space-y-1 font-seravek_medium">
									<p className="text-[#73777C] text-base">Starting Price</p>
									<p className="text-[32px] text-secondary">
										From ${selectedTalent.hourCost}/hour
									</p>
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
