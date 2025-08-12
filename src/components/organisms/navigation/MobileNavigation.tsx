import { firstTextVariant, secondTextVariant } from '@/components/atoms/animations/constants'
import { useMenuContext } from '@/hooks/guard/ContextGuard'
import { motion, AnimatePresence } from 'framer-motion'
import { XCircleIcon } from 'lucide-react'
import makitiLogoWhite from '@/assets/images/logo_makiti/Makiti Logo White.png'
import Image from '@rasenganjs/image'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { Link } from 'rasengan'
import { useTranslation } from 'react-i18next'

// Menu animations
const menuVariants = {
	hidden: {
		opacity: 0,
		x: '100%',
		// borderTopLeftRadius: '50%',
		// borderBottomLeftRadius: '50%',
	}, // Off-screen to the right
	visible: {
		opacity: 1,
		x: 0,
		// borderTopLeftRadius: 0,
		// borderBottomLeftRadius: 0,
		// transition: { duration: 0.7, ease: 'easeInOut' },
	},
	exit: {
		opacity: 0,
		x: '100%',
		// borderTopLeftRadius: '50%',
		// borderBottomLeftRadius: '50%',
		// transition: { duration: 0.7, ease: 'easeInOut' },
	},
}

const MobileNavigation = () => {
	const { isOpened, setIsOpened, navlinks } = useMenuContext()
	const { t } = useTranslation()
	return (
		<div className={`relative`}>
			{/* Animated Menu */}
			<AnimatePresence>
				{isOpened && (
					<motion.div
						key="menu"
						initial="hidden"
						animate="visible"
						exit="exit"
						variants={menuVariants}
						transition={{
							type: 'spring',
							duration: 0.7,
							ease: 'easeInOut',
							stiffness: 100,
							damping: 15,
						}}
						className="fixed inset-0 z-50 flex flex-col gap-24 px-4 sm:px-12 py-8 bg-secondary text-white"
					>
						{/* Navigation Links */}

						<div className="flex justify-between">
							<div className="w-[121px] h-[84px]">
								<Image
									src={makitiLogoWhite}
									alt="Makiti logo"
									width={'100%'}
									height={'100%'}
									className="size-full aspect-auto object-contain pointer-events-none select-none"
								/>
							</div>
							<Button
								variant={'ghost'}
								type="button"
								onClick={() => setIsOpened(!isOpened)}
								className="!p-0 !m-0 h-max hover:bg-outline-variant/30 hover:cursor-pointer"
							>
								<span className="sr-only">close Menu</span>
								<XCircleIcon className="size-12 text-primary" />
							</Button>
						</div>
						<nav className="flex-1">
							<ul className="space-y-6">
								{navlinks.map((link, index) => (
									<motion.li
										key={link.href + index}
										variants={{
											hidden: { opacity: 0, y: 50 },
											visible: {
												opacity: 1,
												y: 0,
												transition: { duration: 0.4, delay: index * 0.3 },
											},
										}}
										onClick={() => setIsOpened(false)} // Close menu on click
										whileHover={'hover'}
										className="font-plusJakartaSans font-bold"
									>
										<div className="relative overflow-hidden capitalize text-5xl sm:text-6xl md:text-7xl">
											<motion.a
												href={link.href}
												variants={firstTextVariant}
												className="text-white block"
											>
												{link.label}
											</motion.a>
											<motion.a
												href={link.href}
												variants={secondTextVariant}
												aria-hidden
												className="absolute bottom-0 -left-0 text-primary"
											>
												{link.label}
											</motion.a>
										</div>
									</motion.li>
								))}
							</ul>
						</nav>

						<div>
							<Separator className="w-full bg-outline" />
							<div className="w-full text-outline-variant text-sm  sm:text-base flex flex-col gap-6 sm:gap-2">
								<p>{t('footer.lowerSection.copyright', { year: '2025' })}</p>
								<div className="flex items-center gap-5">
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
						</div>
					</motion.div>
				)}
			</AnimatePresence>
		</div>
	)
}

export default MobileNavigation
