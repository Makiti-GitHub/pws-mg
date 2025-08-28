import TransList from '@/components/molecules/trans/TransList'
import TransParagraph from '@/components/molecules/trans/TransParagraph'
import { PageComponent } from 'rasengan'
import { useTranslation } from 'react-i18next'

const TermsAndConditions: PageComponent = () => {
	const { t } = useTranslation()
	return (
		<main className="flex flex-col gap-4 sm:gap-8 px-4 sm:px-8 md:px-[80px] lg:px-[120px] pt-[150px] relative">
			<h1 className="font-seravek_bold text-3xl">{t('pages.termsAndConditions.title')}</h1>

			<p>
				<strong className="font-seravek_bold">Makiti Group</strong> –{' '}
				<a
					href="https://www.makiti-group.com"
					target="_blank"
					rel="noreferrer noopener"
					className="text-primary"
				>
					www.makiti-group.com
				</a>
			</p>

			{/** Section 1 */}
			<div className="space-y-4">
				<h2 className="font-seravek_bold text-2xl">
					1. {t('pages.termsAndConditions.sections.introduction.title')}
				</h2>

				<div className="space-y-2 text-lg">
					<TransParagraph transKey="pages.termsAndConditions.sections.introduction.p1" />
					<TransParagraph transKey="pages.termsAndConditions.sections.introduction.p2" />
				</div>
			</div>

			{/** Section 2 */}
			<div className="space-y-4">
				<h2 className="font-seravek_bold text-2xl">
					2. {t('pages.termsAndConditions.sections.termsPurpose.title')}
				</h2>

				<div className="space-y-2 text-lg">
					<TransParagraph
						transKey="pages.termsAndConditions.sections.termsPurpose.p1"
						links={['https://www.makiti-group.com']}
					/>
					<p>{t('pages.termsAndConditions.sections.termsPurpose.p2')}</p>
				</div>
			</div>

			{/** Section 3 */}
			<div className="space-y-4">
				<h2 className="font-seravek_bold text-2xl">
					3. {t('pages.termsAndConditions.sections.siteAccess.title')}
				</h2>

				<div className="space-y-2 text-lg">
					<p>{t('pages.termsAndConditions.sections.siteAccess.p1')}</p>
				</div>
			</div>

			{/** Section 4 */}
			<div className="space-y-4">
				<h2 className="font-seravek_bold text-2xl">
					4. {t('pages.termsAndConditions.sections.servicesOffered.title')}
				</h2>

				<div className="space-y-2 text-lg">
					<p>{t('pages.termsAndConditions.sections.servicesOffered.p1')}</p>

					<TransList transKey="pages.termsAndConditions.sections.servicesOffered" />
					<p>{t('pages.termsAndConditions.sections.servicesOffered.p2')}</p>
				</div>
			</div>

			{/** Section 5 */}
			<div className="space-y-4">
				<h2 className="font-seravek_bold text-2xl">
					5. {t('pages.termsAndConditions.sections.userCommitments.title')}
				</h2>

				<div className="space-y-2 text-lg">
					<p>{t('pages.termsAndConditions.sections.userCommitments.p1')}</p>
					<TransList transKey="pages.termsAndConditions.sections.userCommitments" />
				</div>
			</div>

			{/** Section 6 */}
			<div className="space-y-4">
				<h2 className="font-seravek_bold text-2xl">
					6. {t('pages.termsAndConditions.sections.intellectualProperty.title')}
				</h2>

				<div className="space-y-2 text-lg">
					<p>{t('pages.termsAndConditions.sections.intellectualProperty.p1')}</p>
					<p>{t('pages.termsAndConditions.sections.intellectualProperty.p2')}</p>
				</div>
			</div>

			{/** Section 7 */}
			<div className="space-y-4">
				<h2 className="font-seravek_bold text-2xl">
					7. {t('pages.termsAndConditions.sections.liability.title')}
				</h2>

				<div className="space-y-2 text-lg">
					<p>{t('pages.termsAndConditions.sections.liability.p1')}</p>

					<TransList transKey="pages.termsAndConditions.sections.liability" />
				</div>
			</div>

			{/** Section 8 */}
			<div className="space-y-4">
				<h2 className="font-seravek_bold text-2xl">
					8. {t('pages.termsAndConditions.sections.personalData.title')}
				</h2>

				<div className="space-y-2 text-lg">
					<TransParagraph transKey="pages.termsAndConditions.sections.personalData.p1" />
					<p>{t('pages.termsAndConditions.sections.personalData.p2')}</p>
				</div>
			</div>

			{/** Section 9 */}
			<div className="space-y-4">
				<h2 className="font-seravek_bold text-2xl">
					9. {t('pages.termsAndConditions.sections.hypertextLinks.title')}
				</h2>

				<div className="space-y-2 text-lg">
					<p>{t('pages.termsAndConditions.sections.hypertextLinks.p1')}</p>
				</div>
			</div>

			{/** Section 10 */}
			<div className="space-y-4">
				<h2 className="font-seravek_bold text-2xl">
					10.{' '}
					{t('pages.termsAndConditions.sections.termsAndConditionsModification.title')}
				</h2>

				<div className="space-y-2 text-lg">
					<p>
						{t('pages.termsAndConditions.sections.termsAndConditionsModification.p1')}
					</p>
				</div>
			</div>

			{/** Section 11 */}
			<div className="space-y-4">
				<h2 className="font-seravek_bold text-2xl">
					11. {t('pages.termsAndConditions.sections.applicableLawAndJuridiction.title')}
				</h2>

				<div className="space-y-2 text-lg">
					<p>{t('pages.termsAndConditions.sections.applicableLawAndJuridiction.p1')}</p>
				</div>
			</div>
		</main>
	)
}

TermsAndConditions.path = '/:locale?/terms-and-conditions'
TermsAndConditions.metadata = {
	title: 'Terms and conditions',
	description: 'Terms and conditions page',
}

export default TermsAndConditions
