// import { ArrowUpRightIcon } from 'lucide-react'
// import { Button } from '../ui/button'
import {
	ArrowRightIcon,
	AtSignIcon,
	GlobeIcon,
	HouseIcon,
	MapIcon,
	MapPinIcon,
	MessageSquareIcon,
	MinusIcon,
	PlusIcon,
	SignpostIcon,
	SmartphoneIcon,
} from 'lucide-react'
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
import { ILocation, locationsMock, socialsMock } from '@/data/mock'
import { Link } from 'rasengan'
import { Fragment, useState } from 'react'
import Image from '@rasenganjs/image'
import { useTranslation } from 'react-i18next'

const Footer = () => {
	const { t } = useTranslation()
	const [currentLocation, setCurrentLocation] = useState<ILocation>(locationsMock[1])

	return (
		<footer className="px-4 sm:px-8 md:px-[120px] pt-10 pb-5 w-full flex flex-col gap-10 bg-secondary mt-[60px]">
			<div className="w-full flex flex-col lg:flex-row justify-between gap-12">
				<div className="flex flex-col gap-12 md:gap-5">
					<div className="flex flex-col gap-6">
						<div className="flex flex-col gap-6">
							<div>
								<p className="font-seravek_medium text-base text-outline-variant">
									{t('footer.upperSection.leftSection.contactUs')}
								</p>
							</div>
							<div className="flex gap-5 items-center">
								{socialsMock.map((social, index) => (
									<span className="size-6 rounded-xs" key={`social-${index}`}>
										<a href={social.link} target="_blank">
											<Image
												width={'100%'}
												height={'100%'}
												src={social.icon}
												alt={social.label}
												className="size-full object-contain aspect-auto"
											/>
										</a>
									</span>
								))}
							</div>
						</div>
						<div className="flex flex-col md:flex-row items-start gap-5 max-w-[970px]">
							<div
								className={`w-full lg:w-[450px] h-[250px] bg-white relative overflow-hidden`}
							>
								<iframe
									className="absolute top-0 left-0 size-full border-0"
									title={currentLocation.enterprise?.toString()}
									src={currentLocation.iframeLink}
									style={{ border: 0 }}
									allowFullScreen
									aria-hidden="false"
									loading="lazy"
									tabIndex={0}
									referrerPolicy="no-referrer-when-downgrade"
								/>
							</div>
							<div className="lg:max-w-[500px] w-full">
								<Separator className="w-full bg-outline-variant" />
								<Accordion
									type="single"
									collapsible
									className="flex flex-col w-full"
									// defaultValue="item-1"
								>
									{locationsMock.map((location, index) => (
										<Fragment key={`location-item-${index}`}>
											<AccordionItem
												value={`item-${index + 1}`}
												className="rounded-none border-none"
											>
												<AccordionTrigger
													icon={
														<>
															<PlusIcon className="group-[[data-state=open]]:hidden text-white pointer-events-none size-4 shrink-0 translate-y-0.5 transition-transform duration-200" />
															<MinusIcon className="hidden group-[[data-state=open]]:block text-white pointer-events-none size-4 shrink-0 translate-y-0.5 transition-transform duration-200" />
														</>
													}
													onClick={() => setCurrentLocation(location)}
													className="text-white rounded-none"
												>
													<span className="font-seravek_medium text-sm text-white">
														{location.name}
													</span>
												</AccordionTrigger>
												<AccordionContent className="flex flex-col gap-4 text-balance text-white">
													<p>{location.enterprise}</p>

													<div className="flex gap-2 text-outline-variant">
														<div className="w-1/2 space-y-2">
															{location.place ? (
																<div className="flex gap-4 items-center">
																	<HouseIcon className="size-6" />
																	<span className="flex-1">
																		{location.place}
																	</span>
																</div>
															) : null}

															{location.phone ? (
																<div className="flex gap-4 items-center">
																	<SmartphoneIcon className="size-6" />
																	<span className="flex-1">
																		{location.phone}
																	</span>
																</div>
															) : null}

															{location.whatsapp ? (
																<div className="flex gap-4 items-center">
																	<MessageSquareIcon className="size-6" />
																	<span className="flex-1">
																		{location.whatsapp}
																	</span>
																</div>
															) : null}

															{location.address ? (
																<div className="flex gap-4 items-center">
																	<MapPinIcon className="size-6" />
																	<span className="flex-1">
																		{location.address}
																	</span>
																</div>
															) : null}
														</div>
														<div className="space-y-2 w-1/2">
															{location.arrondissement ? (
																<div className="flex gap-4 items-center">
																	<SignpostIcon className="size-6" />
																	<span className="flex-1">
																		{location.arrondissement}
																	</span>
																</div>
															) : null}

															{location.mail ? (
																<div className="flex gap-4 items-center">
																	<AtSignIcon className="size-6" />
																	<span className="flex-1">
																		{location.mail}
																	</span>
																</div>
															) : null}

															{location.website ? (
																<div className="flex gap-4 items-center">
																	<GlobeIcon className="size-6" />
																	<span className="flex-1">
																		{location.website}
																	</span>
																</div>
															) : null}

															{location.address ? (
																<div className="flex gap-4 items-center">
																	<MapIcon className="size-6" />
																	<span className="flex-1">
																		{t(
																			'footer.upperSection.leftSection.getDirections',
																		)}
																	</span>
																</div>
															) : null}
														</div>
													</div>
												</AccordionContent>
											</AccordionItem>
											<Separator className="w-full bg-outline-variant" />
										</Fragment>
									))}
								</Accordion>
							</div>
						</div>
					</div>
					<div className="w-full lg:max-w-[970px] flex flex-col xl:flex-row justify-between gap-8">
						<div className="flex-1 flex flex-col sm:flex-row sm:items-center gap-6">
							{/* == Makiti logo ==  */}
							<div className="w-[121px]">
								<Image
									src={makitiLogoWhite}
									alt="Makiti logo"
									width={'100%'}
									height={'100%'}
									className="size-full aspect-auto object-contain pointer-events-none select-none"
								/>
							</div>
							<p className="text-base text-outline-variant sm:flex-1">
								{t('footer.upperSection.leftSection.makitiActivityDescription')}
							</p>
						</div>
						<div className="w-full sm:w-[298px]">
							<label
								htmlFor="newsletter"
								className="font-seravek_medium text-base text-outline-variant"
							>
								{t('footer.upperSection.leftSection.form.fields.newsletter.label')}
							</label>
							<div className="flex gap-2 items-center">
								<Input
									placeholder={t(
										'footer.upperSection.leftSection.form.fields.newsletter.placeholder',
									)}
									className="border border-white placeholder:text-white flex-1"
								/>
								<Button className="bg-white text-secondary border border-white md:border-secondary h-max rounded-lg px-3 py-2">
									<span className="sr-only">Subscribe</span>
									<ArrowRightIcon className="w-4 h-3" />
								</Button>
							</div>
						</div>
					</div>
				</div>

				<div className="flex flex-col gap-10">
					<div className="text-base space-y-5 text-outline-variant">
						<p className="font-seravek_medium">
							{t('footer.upperSection.rightSection.services.title')}
						</p>
						<ul className="space-y-2.5">
							<li>
								<Link to={'/#services'} className="hover:text-white">
									{t(
										'footer.upperSection.rightSection.services.options.itOutsourcing',
									)}
								</Link>
							</li>
							<li>
								<Link to={'/#services'} className="hover:text-white">
									{t(
										'footer.upperSection.rightSection.services.options.agileSoftwareDevelopment',
									)}
								</Link>
							</li>
							<li>
								<Link to={'/#services'} className="hover:text-white">
									{t(
										'footer.upperSection.rightSection.services.options.itTransformation',
									)}
								</Link>
							</li>
						</ul>
					</div>
					<div className="text-base space-y-5 text-outline-variant">
						<p className="font-seravek_medium">
							{t('footer.upperSection.rightSection.products.title')}
						</p>
						<ul className="space-y-2.5">
							<li>
								<a
									href="https://agency.matoa.io"
									target="_blank"
									className="hover:text-white"
								>
									{t(
										'footer.upperSection.rightSection.products.options.ticketManagement',
									)}
								</a>
							</li>
							<li>
								<a
									href="https://ism.cm"
									target="_blank"
									className="hover:text-white"
								>
									{t(
										'footer.upperSection.rightSection.products.options.inventory',
									)}
								</a>
							</li>
							<li>
								<a
									href="https://lyssafi.com"
									target="_blank"
									className="hover:text-white"
								>
									{t(
										'footer.upperSection.rightSection.products.options.paymentGateway',
									)}
								</a>
							</li>
						</ul>
					</div>
					<div className="text-base space-y-5 text-outline-variant">
						<p className="font-seravek_medium">
							{t('footer.upperSection.rightSection.company.title')}
						</p>
						<ul className="gap-2.5 flex flex-col">
							<li>
								<Link to="/about" className="hover:text-white">
									{t('footer.upperSection.rightSection.company.options.about')}
								</Link>
							</li>
							<li>
								<Link to="/about#teams" className="hover:text-white">
									{t(
										'footer.upperSection.rightSection.company.options.teamMembers',
									)}
								</Link>
							</li>
							<li>
								<Link to="#talents" className="hover:text-white">
									{t('footer.upperSection.rightSection.company.options.careers')}
								</Link>
							</li>
						</ul>
					</div>
				</div>
			</div>
			<Separator className="w-full bg-outline" />
			<div className="w-full text-outline-variant text-base flex flex-col lg:flex-row items-center justify-between gap-6 sm:gap-2">
				<p>{t('footer.lowerSection.copyright', { year: '2025' })}</p>
				<div className="flex items-center justify-between gap-5">
					<Link to="/privacy-policy" className="hover:text-white">
						{t('footer.lowerSection.nav.privacyPolicy')}
					</Link>
					<Link to="/terms-and-conditions" className="hover:text-white">
						{t('footer.lowerSection.nav.termsOfService')}
					</Link>
					<Link to="/legal-notice" className="hover:text-white">
						{t('footer.lowerSection.nav.legalNotice')}
					</Link>
				</div>
			</div>
		</footer>
	)
}

export default Footer
