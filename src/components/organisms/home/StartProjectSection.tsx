import SectionHeader from '@/components/molecules/SectionHeader'
import { useTranslation } from 'react-i18next'
import StartYourProjectMultiStepForm from './form/StartYourProjectForm'

const StartProjectSection = () => {
	const { t } = useTranslation()

	return (
		<section
			id="start-project"
			className="px-4 sm:px-8 md:px-[80px] lg:px-[120px] flex flex-col gap-8 w-full scroll-mt-[150px]"
		>
			<div className="space-y-[50px]">
				<SectionHeader
					title={t('pages.home.sections.startYourProjectToday.title')}
					subTitle={t('pages.home.sections.startYourProjectToday.subtitle')}
				/>

				<StartYourProjectMultiStepForm />
			</div>
		</section>
	)
}

export default StartProjectSection
