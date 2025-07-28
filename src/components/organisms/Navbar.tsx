import makitiLogoWhite from '@/assets/images/logo_makiti/Makiti Logo White.png'
// import makitiLogoDark from '@/assets/images/logo_makiti/Makiti Logo Colored.png'
import { Link } from 'rasengan'
import LanguageButton from '../atoms/buttons/LanguageButton'
import MotionIconButton2 from '../atoms/buttons/MotionIconButton2'
import Image from '@rasenganjs/image'
import { useTranslation } from 'react-i18next'
// import { useEffect, useState } from 'react'
// import { AnimatePresence, motion } from 'framer-motion'

// const scrollThreshold = 1280 // Change this value to set when the background should change

const links: {
	label: string
	href: string
}[] = [
	{
		label: 'services',
		href: '#services',
	},
	{
		label: 'portfolio',
		href: '/portfolio',
	},
	{
		label: 'products',
		href: '/products',
	},
	{
		label: 'about',
		href: '/about',
	},
]

const NavBar = () => {
	const { t } = useTranslation()
	// const [isScrolled, setIsScrolled] = useState<boolean>(false)

	// useEffect(() => {
	// 	const handleScroll = () => {
	// 		const scrollTop = window.pageYOffset || document.documentElement.scrollTop
	// 		setIsScrolled(scrollTop > scrollThreshold)
	// 	}

	// 	// Add scroll event listener
	// 	window.addEventListener('scroll', handleScroll)

	// 	// Cleanup function to remove event listener
	// 	return () => {
	// 		window.removeEventListener('scroll', handleScroll)
	// 	}
	// }, [scrollThreshold])

	return (
		<div className="fixed left-0 right-0 w-full z-50">
			<nav
				className={`px-8 md:px-[80px] lg:px-[120px] py-5 w-full flex items-center justify-between bg-secondary glassy_navbar`}
			>
				{/* === Logo === */}
				<div className="w-[121px] h-[84px]">
					{/* === Background Images === */}
					{/* <Image */}
					<Link to={'/'}>
						<Image
							src={makitiLogoWhite}
							alt="Makiti logo"
							width={'100%'}
							height={'100%'}
							className="size-full aspect-auto object-contain pointer-events-none select-none"
						/>
						{/* <img
							// key={'makiti-logo-white'}
							alt="shadcn logo"
							className="size-full aspect-auto object-contain pointer-events-none select-none"
							src={makitiLogoWhite}
						/> */}
						{/* <AnimatePresence>
							{isScrolled && (
								<motion.img
									key={'makiti-logo-dark'}
									alt="shadcn logo"
									className="size-full aspect-auto object-contain pointer-events-none select-none"
									src={makitiLogoDark}
								/>
							)}
							{!isScrolled && (
								<motion.img
									key={'makiti-logo-white'}
									alt="shadcn logo"
									className="size-full aspect-auto object-contain pointer-events-none select-none"
									src={makitiLogoWhite}
								/>
							)}
						</AnimatePresence> */}
					</Link>
				</div>
				{/* === Menu === */}
				<ul
					className={`hidden lg:flex flex-1 justify-center items-center gap-6 text-white text-lg`}
				>
					{links.map((link, index) => (
						<li key={`nav-link-${index}`}>
							<Link
								className="hover:text-primary hover:underline capitalize"
								to={link.href}
							>
								{t(`nav.links.${link.label}`)}
							</Link>
						</li>
					))}
				</ul>

				<div className="flex items-center gap-4">
					<MotionIconButton2
						label={t('nav.cta.letsTalk')}
						className="rounded-[40px] px-2 py-1.5 h-max text-base"
					/>
					{/* <Button variant="primary" className="rounded-4xl">
						<span className="sr-only">Let's talk</span> <span>Let's talk</span>{' '}
						<ArrowUpRightIcon className="size-5" />
					</Button> */}

					<LanguageButton />
				</div>
			</nav>
		</div>
	)
}

export default NavBar
