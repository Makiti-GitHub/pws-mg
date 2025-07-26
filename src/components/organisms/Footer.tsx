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
// import { MapContainer, Marker, Popup, TileLayer, useMap } from 'react-leaflet'
// import { LatLngExpression } from 'leaflet'

// Component to handle map updates
// interface MapUpdaterProps {
// 	center: LatLngExpression
// 	zoom: number
// }

// const MapUpdater: React.FC<MapUpdaterProps> = ({ center, zoom }) => {
// 	const map = useMap()

// 	useEffect(() => {
// 		map.setView(center, zoom)
// 	}, [map, center, zoom])

// 	return null
// }

const Footer = () => {
	const [currentLocation, setCurrentLocation] = useState<ILocation>(locationsMock[0])
	// const [mapCenter, setMapCenter] = useState<LatLngExpression>(locationsMock[0].coordinates)
	// const [mapZoom, setMapZoom] = useState<number>(10)
	// const [customLat, setCustomLat] = useState<string>('')
	// const [customLng, setCustomLng] = useState<string>('')

	// // Function to jump to a specific location
	// const jumpToLocation = (location: ILocation, zoom: number = 10) => {
	// 	setCurrentLocation(location)
	// 	setMapCenter(location.coordinates)
	// 	setMapZoom(zoom)
	// }

	// // Function to jump to custom coordinates
	// const jumpToCustomCoordinates = () => {
	// 	const lat = parseFloat(customLat)
	// 	const lng = parseFloat(customLng)

	// 	if (isNaN(lat) || isNaN(lng)) {
	// 		alert('Please enter valid latitude and longitude values')
	// 		return
	// 	}

	// 	if (lat < -90 || lat > 90) {
	// 		alert('Latitude must be between -90 and 90')
	// 		return
	// 	}

	// 	if (lng < -180 || lng > 180) {
	// 		alert('Longitude must be between -180 and 180')
	// 		return
	// 	}

	// 	const customLocation: ILocation = {
	// 		id: 'custom',
	// 		name: 'Custom Location',
	// 		coordinates: [lat, lng],
	// 		address: `Custom coordinates: ${lat}, ${lng}`,
	// 	}

	// 	jumpToLocation(customLocation, 12)
	// }

	// const windowIsDefined = typeof window !== 'undefined'

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
											<Image
												width={'100%'}
												height={'100%'}
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
							<div
								className={`w-full lg:w-[450px] h-[250px] bg-white relative overflow-hidden`}
							>
								<iframe
									className="absolute top-0 left-0 size-full border-0"
									title={currentLocation.enterprise?.toString()}
									src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3165.35721207169!2d126.9525508511284!3d37.49949233562292!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357ca1d7daa43d7b%3A0x101547c9adb8137c!2z7ISc7Jq467O47LmY6rO8!5e0!3m2!1sko!2sus!4v1603125402556!5m2!1sko!2sus"
									// style={{ border: 0 }}
									allowFullScreen
									aria-hidden="false"
									tabIndex={0}
								/>
							</div>
							<div className="lg:max-w-[500px] w-full">
								<Separator className="w-full bg-outline-variant" />
								<Accordion
									type="single"
									collapsible
									className="flex flex-col w-full"
									defaultValue="item-1"
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
																		Get Directions
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
						<div className="gap-2.5 flex flex-col">
							<Link to="/about" className="hover:text-white">
								About
							</Link>
							<Link to="/about#teams" className="hover:text-white">
								Team members
							</Link>
							<Link to="#talents" className="hover:text-white">
								Careers
							</Link>
						</div>
					</div>
				</div>
			</div>
			<Separator className="w-full bg-outline" />
			<div className="w-full text-outline-variant text-base flex flex-col lg:flex-row items-center justify-between gap-6 sm:gap-2">
				<p>© 2025 Makiti Group. All rights reserved.</p>
				<div className="flex items-center justify-between gap-5">
					<a href="" className="hover:text-white">
						Privacy Policy
					</a>
					<a href="" className="hover:text-white">
						Terms of Service
					</a>
					<a href="" className="hover:text-white">
						Legal Notice
					</a>
				</div>
			</div>
		</footer>
	)
}

export default Footer
