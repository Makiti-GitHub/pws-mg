// import { ArrowUpRightIcon } from 'lucide-react'
// import { Button } from '../ui/button'
import { ArrowRightIcon } from 'lucide-react'
import { Button } from '../ui/button'
import { Input } from '../ui/input'
import { Separator } from '../ui/separator'
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from '@/components/ui/accordion'
import makitiLogoWhite from '@/assets/images/logo_makiti/Makiti Logo White.png'
import { locationsMock, socialsMock } from '@/data/mock'

const Footer = () => {
	return (
		<footer className="px-8 md:px-[120px] pt-10 pb-5 w-full flex flex-col gap-10 bg-secondary mt-[60px]">
			<div className="w-full flex flex-col lg:flex-row justify-between gap-12">
				<div className="flex flex-col gap-12 md:gap-5">
					<div className="flex flex-col gap-6">
						<div className="flex flex-col gap-6">
							<div>
								<p className="font-seravek_medium text-base text-outline-variant">
									Contact Us
								</p>
							</div>
							<div className="flex gap-5 items-center">
								{socialsMock.map((social, index) => (
									<div className="size-6 rounded-xs" key={`social-${index}`}>
										<a href={social.link}>
											<img
												src={social.icon}
												alt={social.label}
												className="size-full object-contain aspect-auto"
											/>
										</a>
									</div>
								))}
							</div>
						</div>
						<div className="flex flex-col md:flex-row items-start gap-5 max-w-[970px]">
							<div className={`w-full lg:w-[450px] h-[250px] bg-white`} />
							<div className="lg:max-w-[500px] w-full">
								<Accordion
									type="single"
									collapsible
									className="flex flex-col w-full"
									defaultValue="item-1"
								>
									{locationsMock.map((location, index) => (
										<AccordionItem
											key={`location-item-${index}`}
											value={`item-${index + 1}`}
											className="rounded-none border-none"
										>
											<AccordionTrigger className="text-white rounded-none border-y border-white">
												<span className="font-seravek_medium text-sm text-white">
													{location.name}
												</span>
											</AccordionTrigger>
											<AccordionContent className="flex flex-col gap-4 text-balance">
												<p>{location.description}</p>
											</AccordionContent>
										</AccordionItem>
									))}
								</Accordion>
							</div>
						</div>
					</div>
					<div className="w-full lg:max-w-[970px] flex flex-col xl:flex-row justify-between gap-8">
						<div className="flex-1 flex flex-col sm:flex-row sm:items-center gap-6">
							{/* == Makiti logo ==  */}
							<img
								src={makitiLogoWhite}
								alt="shadcn logo"
								className="w-[121px] pointer-events-none select-none"
							/>
							<p className="text-base text-outline-variant sm:flex-1">
								Your strategic IT outsourcing partner, delivering excellence across
								all technology domains with innovative solutions and expert teams.
							</p>
						</div>
						<div className="w-full sm:w-[298px]">
							<p className="font-seravek_medium text-base text-outline-variant">
								Newsletter
							</p>
							<div className="flex gap-2 items-center">
								<Input
									placeholder="Your email"
									className="border border-white placeholder:text-white flex-1"
								/>
								<Button className="bg-white text-secondary border border-white md:border-secondary h-max rounded-[8px] px-3 py-2">
									<span className="sr-only">Subscribe</span>
									<ArrowRightIcon className="w-4 h-3" />
								</Button>
							</div>
						</div>
					</div>
				</div>

				<div className="flex flex-col gap-10">
					<div className="text-base space-y-5 text-outline-variant">
						<p className="font-seravek_medium">Services</p>
						<div className="space-y-2.5">
							<p>IT Outsourcing</p>
							<p>Agile Software Development</p>
							<p>IT Transformation & Audit</p>
						</div>
					</div>
					<div className="text-base space-y-5 text-outline-variant">
						<p className="font-seravek_medium">Products</p>
						<div className="space-y-2.5">
							<p>Ticket Management System</p>
							<p>Inventory & Stock Management System</p>
							<p>Payment Gateway System</p>
						</div>
					</div>
					<div className="text-base space-y-5 text-outline-variant">
						<p className="font-seravek_medium">Company</p>
						<div className="space-y-2.5">
							<p>About</p>
							<p>Team members</p>
							<p>Careers</p>
						</div>
					</div>
				</div>
			</div>
			<Separator className="w-full bg-outline" />
			<div className="w-full text-outline-variant text-base flex flex-col lg:flex-row items-center justify-between gap-6 sm:gap-2">
				<p>© 2025 Makiti Group. All rights reserved.</p>
				<div className="flex items-center justify-between gap-5">
					<a href="">Privacy Policy</a>
					<a href="">Terms of Service</a>
					<a href="">Legal Notice</a>
				</div>
			</div>
		</footer>
	)
}

export default Footer
