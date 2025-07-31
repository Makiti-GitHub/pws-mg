import Banner from '@/components/molecules/banner/Banner'
import ServiceCard from '@/components/molecules/cards/ServiceCard'
import SectionHeader from '@/components/molecules/SectionHeader'
import { Button } from '@/components/ui/button'
import { chooseReasonsMock } from '@/data/mock'
import { cn } from '@/lib/utils'
import { ArrowUpRightIcon } from 'lucide-react'
import { FC } from 'react'

export type OurCoreValuesSectionProps = {
	className?: string
}

const OurCoreValuesSection: FC<OurCoreValuesSectionProps> = ({ className }) => {
	return (
		<section className={cn('flex flex-col gap-[50px] pb-16', className)}>
			<SectionHeader
				title="Our Core Values"
				subTitle="The principles that guide everything we do"
			/>

			<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-4 gap-4">
				{chooseReasonsMock.map((reason, index) => (
					<ServiceCard
						key={`choose-reason-${index}`}
						service={reason}
						index={index + 1}
					/>
				))}
			</div>

			<Banner
				variant="secondary"
				title="Ready to Start Your Project?"
				desc="Let's discuss how we can help you achieve similar results with our
                                        expert IT outsourcing services."
			>
				<Button
					variant="primary"
					className="rounded-4xl h-max px-5 py-3 gap-1 hover:cursor-pointer"
				>
					<span className="sr-only">Let's Talk</span>{' '}
					<span className="text-lg font-seravek_medium">Let's Talk</span>{' '}
					<ArrowUpRightIcon className="size-6" />
				</Button>
			</Banner>
		</section>
	)
}

export default OurCoreValuesSection
