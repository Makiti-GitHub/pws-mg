import SectionHeader from '@/components/molecules/SectionHeader'
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from '@/components/ui/accordion'
import { frequentlyAskedQuestionsMock } from '@/data/mock'
import Banner from '@/components/molecules/banner/Banner'
import { AtSignIcon, ClockIcon, MapPinIcon, SmartphoneIcon } from 'lucide-react'
import MotionIconButton from '@/components/atoms/buttons/MotionIconButton'
import { useTranslation } from 'react-i18next'
import { useFloatingCursor } from '@/hooks/guard/ContextGuard'
import { Link } from 'rasengan'

const FaqSection = () => {
	const { t, i18n } = useTranslation()
	const { setCursorVariant } = useFloatingCursor()

	return (
		<section className="px-4 sm:px-8 md:px-[80px] lg:px-[120px] screen flex flex-col gap-[24px] pb-16">
			<SectionHeader
				title={t('pages.home.sections.faq.title')}
				subTitle={t('pages.home.sections.faq.subtitle')}
			/>
			<div className="grid md:grid-cols-12 gap-4">
				<div className="col-span-12 md:col-span-7 lg:col-span-8">
					<Accordion
						type="multiple"
						// collapsible={true}
						className="w-full flex flex-col gap-4"
						// defaultValue={['item-1']}
					>
						{frequentlyAskedQuestionsMock.map((faq, index) => (
							<AccordionItem
								key={`question-${index + 1}-${faq.question}`}
								value={`item-${index + 1}`}
								className="box_shadow_products_card rounded-lg py-[5px]"
							>
								<AccordionTrigger className="px-3 py-4">
									<p className="flex items-center gap-2.5">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="24"
											height="24"
											viewBox="0 0 24 24"
											fill="none"
											stroke="currentColor"
											strokeWidth="2"
											strokeLinecap="round"
											strokeLinejoin="round"
											className="lucide lucide-circle-question-mark-icon lucide-circle-question-mark"
										>
											<circle cx="12" cy="12" r="10" />
											<path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
											<path d="M12 17h.01" />
										</svg>
										<span className="font-seravek_medium text-sm text-on-surface-variant">
											{t(
												`pages.home.sections.faq.questions.question${
													index + 1
												}.question`,
											)}
										</span>
									</p>
								</AccordionTrigger>
								<AccordionContent className="flex flex-col gap-4 text-balance">
									<p>
										{t(
											`pages.home.sections.faq.questions.question${
												index + 1
											}.answer`,
										)}
									</p>
								</AccordionContent>
							</AccordionItem>
						))}
					</Accordion>
				</div>
				<aside className="col-span-12 md:col-span-5 lg:col-span-4 flex flex-col gap-4">
					<div className="p-6 rounded-xl box_shadow_products_card">
						<div className="space-y-4">
							<div className="flex items-center gap-3">
								<div className="size-8 rounded-sm bg-[#E8EFF8] flex justify-center items-center">
									<SmartphoneIcon className="size-[18px] text-secondary" />
								</div>
								<div className="space-y-1">
									<p className="text-sm font-seravek_medium text-on-surface-variant">
										{t('phone')}
									</p>
									<p className="text-sm text-outline">
										<a href="tel:+237653788053">+237 6 53 78 80 53</a>
									</p>
								</div>
							</div>
							<div className="flex items-center gap-3">
								<div className="size-8 rounded-sm bg-[#E8EFF8] flex justify-center items-center">
									<AtSignIcon className="size-[18px] text-secondary" />
								</div>
								<div className="space-y-1">
									<p className="text-sm font-seravek_medium text-on-surface-variant">
										{t('email')}
									</p>
									<p className="text-sm text-outline">
										<a href="mailto:contact@makiti.com">contact@makiti.com</a>
									</p>
								</div>
							</div>

							<div className="flex items-center gap-3">
								<div className="size-8 rounded-sm bg-[#E8EFF8] flex justify-center items-center">
									<MapPinIcon className="size-[18px] text-secondary" />
								</div>
								<div className="space-y-1">
									<p className="text-sm font-seravek_medium text-on-surface-variant">
										{t('location')}
									</p>
									<p className="text-sm text-outline">Yaoundé, Cameroon</p>
								</div>
							</div>

							<div className="flex items-center gap-3">
								<div className="size-8 rounded-sm bg-[#E8EFF8] flex justify-center items-center">
									<ClockIcon className="size-[18px] text-secondary" />
								</div>
								<div className="space-y-1">
									<p className="text-sm font-seravek_medium text-on-surface-variant">
										{t('businessHours')}
									</p>
									<p className="text-sm text-outline">Mon-Fri: 9AM-6PM CAF</p>
								</div>
							</div>
						</div>
					</div>
					<Banner
						variant="secondary"
						title={t('pages.home.sections.faq.banner.title')}
						desc={t('pages.home.sections.faq.banner.subtitle')}
						className="sm:p-6"
					>
						<Link to={`/${i18n.language}/#start-project`}>
							<MotionIconButton
								label={t('pages.home.sections.faq.banner.cta')}
								onMouseEnter={() => setCursorVariant('button')}
								onMouseLeave={() => setCursorVariant('default')}
								className="rounded-4xl !h-max !px-4 !py-2 gap-1 text-sm sm:text-base xl:text-lg font-seravek_medium"
							/>
						</Link>
					</Banner>
				</aside>
			</div>
		</section>
	)
}

export default FaqSection
