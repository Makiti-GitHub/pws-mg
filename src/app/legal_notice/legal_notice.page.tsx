import TransList from '@/components/molecules/trans/TransList'
import TransParagraph from '@/components/molecules/trans/TransParagraph'
import { PageComponent } from 'rasengan'
import { Trans, useTranslation } from 'react-i18next'

const LegalNotice: PageComponent = () => {
	const { t } = useTranslation()
	return (
		<main className="flex flex-col gap-4 sm:gap-8 px-4 sm:px-8 md:px-[80px] lg:px-[120px] pt-[150px] relative">
			<h1 className="font-seravek_bold text-3xl">{t('pages.legalNotice.title')}</h1>

			{/** Section 1 */}
			<div className="space-y-4">
				<h2 className="font-seravek_bold text-2xl">
					1. {t('pages.legalNotice.sections.websitePublisher.title')}
				</h2>

				<div className="space-y-2 text-lg">
					<p>
						<Trans
							i18nKey="pages.legalNotice.sections.websitePublisher.p1"
							components={{
								bold: <strong className="font-seravek_bold" />,
							}}
						/>
					</p>

					<p>
						<Trans
							i18nKey="pages.legalNotice.sections.websitePublisher.p2"
							components={{
								bold: <strong className="font-seravek_bold" />,
								italic: <span className="font-seravek_italic" />,
							}}
						/>
					</p>

					<p>
						<Trans
							i18nKey="pages.legalNotice.sections.websitePublisher.p3"
							components={{
								bold: <strong className="font-seravek_bold" />,
								italic: <span className="font-seravek_italic" />,
							}}
						/>
					</p>
					<p>
						<Trans
							i18nKey="pages.legalNotice.sections.websitePublisher.p4"
							components={{
								bold: <strong className="font-seravek_bold" />,
								italic: <span className="font-seravek_italic" />,
							}}
						/>
					</p>
					<p>
						<Trans
							i18nKey="pages.legalNotice.sections.websitePublisher.p5"
							components={{
								bold: <strong className="font-seravek_bold" />,
								italic: <span className="font-seravek_italic" />,
							}}
						/>
					</p>
					<p>
						<Trans
							i18nKey="pages.legalNotice.sections.websitePublisher.p6"
							components={{
								bold: <strong className="font-seravek_bold" />,
								italic: <span className="font-seravek_italic" />,
							}}
						/>
					</p>
				</div>
			</div>

			{/** Section 2 */}
			<div className="space-y-4">
				<h2 className="font-seravek_bold text-2xl">
					2. {t('pages.legalNotice.sections.makitiGroup.title')}
				</h2>

				<div className="space-y-2 text-lg">
					<TransParagraph transKey="pages.legalNotice.sections.makitiGroup.p1" />
					<TransParagraph
						transKey="pages.legalNotice.sections.makitiGroup.p2"
						emails={['contact@makiti-group.com']}
					/>
				</div>
			</div>

			{/** Section 3 */}
			<div className="space-y-4">
				<h2 className="font-seravek_bold text-2xl">
					3. {t('pages.legalNotice.sections.hosting.title')}
				</h2>

				<div className="space-y-2 text-lg">
					<TransParagraph transKey="pages.legalNotice.sections.hosting.p1" />
					<TransParagraph transKey="pages.legalNotice.sections.hosting.p2" />
					<TransParagraph
						transKey="pages.legalNotice.sections.hosting.p3"
						phones={['+49 89 3564717-70']}
					/>
					<TransParagraph
						transKey="pages.legalNotice.sections.hosting.p4"
						emails={['support@contabo.de']}
					/>
				</div>
			</div>

			{/** Section 4 */}
			<div className="space-y-4">
				<h2 className="font-seravek_bold text-2xl">
					4. {t('pages.legalNotice.sections.websitePurpose.title')}
				</h2>

				<div className="space-y-2 text-lg">
					<TransParagraph
						transKey="pages.legalNotice.sections.websitePurpose.p1"
						links={['https://www.makiti-group.com']}
					/>
					<TransList transKey="pages.legalNotice.sections.websitePurpose" />
				</div>
			</div>

			{/** Section 5 */}
			<div className="space-y-4">
				<h2 className="font-seravek_bold text-2xl">
					5. {t('pages.legalNotice.sections.intellectualProperty.title')}
				</h2>

				<div className="space-y-2 text-lg">
					<TransParagraph transKey="pages.legalNotice.sections.intellectualProperty.p1" />
					<TransParagraph transKey="pages.legalNotice.sections.intellectualProperty.p2" />
				</div>
			</div>

			{/** Section 6 */}
			<div className="space-y-4">
				<h2 className="font-seravek_bold text-2xl">
					6. {t('pages.legalNotice.sections.dataProtection.title')}
				</h2>

				<div className="space-y-2 text-lg">
					<TransParagraph transKey="pages.legalNotice.sections.dataProtection.p1" />
				</div>
			</div>

			{/** Section 7 */}
			<div className="space-y-4">
				<h2 className="font-seravek_bold text-2xl">
					7. {t('pages.legalNotice.sections.collectedData.title')}
				</h2>

				<div className="space-y-2 text-lg">
					<TransParagraph transKey="pages.legalNotice.sections.collectedData.p1" />
				</div>
			</div>

			{/** Section 8 */}
			<div className="space-y-4">
				<h2 className="font-seravek_bold text-2xl">
					8. {t('pages.legalNotice.sections.processingPurposes.title')}
				</h2>

				<div className="space-y-2 text-lg">
					<TransParagraph transKey="pages.legalNotice.sections.processingPurposes.p1" />
					<TransList transKey="pages.legalNotice.sections.processingPurposes" />
				</div>
			</div>

			{/** Section 9 */}
			<div className="space-y-4">
				<h2 className="font-seravek_bold text-2xl">
					9. {t('pages.legalNotice.sections.retentionPeriod.title')}
				</h2>

				<div className="space-y-2 text-lg">
					<TransParagraph transKey="pages.legalNotice.sections.retentionPeriod.p1" />
					<TransList transKey="pages.legalNotice.sections.yourRights" />
				</div>
			</div>

			{/** Section 10 */}
			<div className="space-y-4">
				<h2 className="font-seravek_bold text-2xl">
					10. {t('pages.legalNotice.sections.userRights.title')}
				</h2>

				<div className="space-y-2 text-lg">
					<TransParagraph
						transKey="pages.legalNotice.sections.userRights.p1"
						emails={['contact@makiti-group.com']}
					/>
				</div>
			</div>

			{/** Section 11 */}
			<div className="space-y-4">
				<h2 className="font-seravek_bold text-2xl">
					11. {t('pages.legalNotice.sections.dataTransfer.title')}
				</h2>

				<div className="space-y-2 text-lg">
					<TransParagraph
						transKey="pages.legalNotice.sections.dataTransfer.p1"
						emails={['contact@makiti-group.com']}
					/>
				</div>
			</div>

			{/** Section 12 */}
			<div className="space-y-4">
				<h2 className="font-seravek_bold text-2xl">
					12. {t('pages.legalNotice.sections.cookies.title')}
				</h2>

				<div className="space-y-2 text-lg">
					<TransParagraph transKey="pages.legalNotice.sections.cookies.p1" />

					<TransList transKey="pages.legalNotice.sections.cookies" />
					<TransParagraph transKey="pages.legalNotice.sections.cookies.p2" />
				</div>
			</div>

			{/** Section 13 */}
			<div className="space-y-4">
				<h2 className="font-seravek_bold text-2xl">
					13. {t('pages.legalNotice.sections.liability.title')}
				</h2>

				<div className="space-y-2 text-lg">
					<TransParagraph transKey="pages.legalNotice.sections.liability.p1" />
					<TransParagraph transKey="pages.legalNotice.sections.liability.p2" />
					<TransList transKey="pages.legalNotice.sections.liability" />
				</div>
			</div>

			{/** Section 14 */}
			<div className="space-y-4">
				<h2 className="font-seravek_bold text-2xl">
					14. {t('pages.legalNotice.sections.applicableLawAndJuridiction.title')}
				</h2>

				<div className="space-y-2 text-lg">
					<TransParagraph transKey="pages.legalNotice.sections.applicableLawAndJuridiction.p1" />
				</div>
			</div>

			{/** Section 15 */}
			<div className="space-y-4">
				<h2 className="font-seravek_bold text-2xl">
					15. {t('pages.legalNotice.sections.contact.title')}
				</h2>

				<div className="space-y-2 text-lg">
					<TransParagraph
						transKey="pages.legalNotice.sections.contact.p1"
						emails={['contact@makiti-group.com']}
					/>
					<TransParagraph transKey="pages.legalNotice.sections.contact.p2" />
				</div>
			</div>
		</main>
	)
}

LegalNotice.path = '/:locale?/legal-notice'
LegalNotice.metadata = {
	title: 'Legal notice',
	description: 'Legal notice page',
}

export default LegalNotice
