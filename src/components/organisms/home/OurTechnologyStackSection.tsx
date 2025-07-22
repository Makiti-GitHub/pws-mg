import { technologiesMock } from '@/data/mock'

const OurTechnologyStackSection = () => {
	return (
		<section className="px-[120px] flex flex-col gap-[24px] bg-secondary py-5">
			<div className="space-y-8">
				<div className="space-y-8">
					<div className="text-center tracking-normal space-y-3">
						<h2 className="font-seravek_bold text-primary text-5xl">
							OUR TECHNOLOGY STACK
						</h2>
						<p className="text-xl text-white">
							We utilize technology that serves the implemented solutions - never the
							other way around
						</p>
					</div>
					<div className="w-[1164.330078125px] h-[1164.650634765625px]" />
				</div>
				<div className="grid grid-cols-4 gap-5">
					{technologiesMock.map((tech, index) => (
						<div
							key={`tech-${index}`}
							className="rounded-[20px] border border-primary py-7 px-2 flex flex-col gap-4"
						>
							<div className="w-full">
								<p className="text-center uppercase text-[32px] font-seravek_bold text-primary">
									{tech.techno}
								</p>
							</div>
							<div className="w-full space-y-2">
								{tech.list.map((item, index) => (
									<div key={`tech-item-${index}`} className="w-full">
										<p className="text-center text-[32px] text-white">{item}</p>
									</div>
								))}
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	)
}

export default OurTechnologyStackSection
