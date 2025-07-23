import { Button } from '@/components/ui/button'
import SectionHeader from '@/components/molecules/SectionHeader'
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from '@/components/ui/accordion'
import { frequentlyAskedQuestionsMock } from '@/data/mock'
import Banner from '@/components/molecules/banner/Banner'
import { ArrowUpRightIcon } from 'lucide-react'

const FaqSection = () => {
	return (
		<section className="px-[120px] flex flex-col gap-[24px] pb-16">
			<SectionHeader
				title="Frequently Asked Questions"
				subTitle="Everything you need to know about our IT Outsourcing services"
			/>
			<div className="grid grid-cols-12 gap-4">
				<div className="col-span-8">
					<Accordion
						type="single"
						collapsible
						className="w-full flex flex-col gap-4"
						defaultValue="item-1"
					>
						{frequentlyAskedQuestionsMock.map((faq, index) => (
							<AccordionItem
								key={`question-${index + 1}-${faq.question}`}
								value={`item-${index + 1}`}
								className="box_shadow_products_card rounded-[8px] px-3 py-1.5"
							>
								<AccordionTrigger>
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
											{faq.question}
										</span>
									</p>
								</AccordionTrigger>
								<AccordionContent className="flex flex-col gap-4 text-balance">
									<p>{faq.answer}</p>
								</AccordionContent>
							</AccordionItem>
						))}
					</Accordion>
				</div>
				<aside className="space-y-4 col-span-4 flex flex-col">
					<div className="p-6 rounded-[12px] box_shadow_products_card">
						<div className="space-y-4">
							<div className="flex items-center gap-3">
								<div className="size-8 rounded-[4px] bg-[#E8EFF8]" />
								<div className="space-y-1">
									<p className="text-sm font-seravek_medium text-on-surface-variant">
										Phone
									</p>
									<p className="text-sm text-outline">+237 6 53 78 80 53</p>
								</div>
							</div>
							<div className="flex items-center gap-3">
								<div className="size-8 rounded-[4px] bg-[#E8EFF8]" />
								<div className="space-y-1">
									<p className="text-sm font-seravek_medium text-on-surface-variant">
										Email
									</p>
									<p className="text-sm text-outline">contact@makiti.com</p>
								</div>
							</div>

							<div className="flex items-center gap-3">
								<div className="size-8 rounded-[4px] bg-[#E8EFF8]" />
								<div className="space-y-1">
									<p className="text-sm font-seravek_medium text-on-surface-variant">
										Location
									</p>
									<p className="text-sm text-outline">Yaoundé, Cameroon</p>
								</div>
							</div>

							<div className="flex items-center gap-3">
								<div className="size-8 rounded-[4px] bg-[#E8EFF8]" />
								<div className="space-y-1">
									<p className="text-sm font-seravek_medium text-on-surface-variant">
										Business Hours
									</p>
									<p className="text-sm text-outline">Mon-Fri: 9AM-6PM CAF</p>
								</div>
							</div>
						</div>
					</div>
					<Banner
						variant="secondary"
						title="Still have questions?"
						desc="Our experts are ready to help you find the perfect outsourcing solution."
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
				</aside>
			</div>
		</section>
	)
}

export default FaqSection
