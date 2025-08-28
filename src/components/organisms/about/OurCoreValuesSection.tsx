import Banner from '@/components/molecules/banner/Banner'
import ServiceCard from '@/components/molecules/cards/ServiceCard'
import SectionHeader from '@/components/molecules/SectionHeader'
import { Button } from '@/components/ui/button'
import { chooseReasonsMock } from '@/data/mock'
import { cn } from '@/lib/utils'
import { ArrowUpRightIcon } from 'lucide-react'
import { FC } from 'react'
import { useTranslation } from 'react-i18next'

export type OurCoreValuesSectionProps = {
	className?: string
}

const OurCoreValuesSection: FC<OurCoreValuesSectionProps> = ({ className }) => {
	const { t } = useTranslation()
	return (
		<section className={cn('flex flex-col gap-7 sm:gap-[50px] pb-16', className)}>
			<SectionHeader
				title={t('pages.about.sections.ourCoreValues.title')}
				subTitle={t('pages.about.sections.ourCoreValues.subtitle')}
			/>

			<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-4 gap-3 sm:gap-4">
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
				title={t('pages.about.sections.ourCoreValues.banner.title')}
				desc={t('pages.about.sections.ourCoreValues.banner.subtitle')}
			>
				<Button
					variant="primary"
					className="rounded-4xl h-max px-3 sm:px-5 py-2 sm:py-3 gap-1 hover:cursor-pointer"
				>
					<span className="sr-only">Let's Talk</span>{' '}
					<span className="text-lg font-seravek_medium">
						{t('pages.about.sections.ourCoreValues.banner.cta')}
					</span>{' '}
					<ArrowUpRightIcon className="size-5 sm:size-6" />
				</Button>
			</Banner>
		</section>
	)
}

export default OurCoreValuesSection
