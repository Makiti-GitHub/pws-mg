// import { cn } from '@/lib/utils'
import { cva, VariantProps } from 'class-variance-authority'
import gizLogo from '@/assets/images/Partners/giz-logo 1.png'
import mtnLogo from '@/assets/images/Partners/Mtn_logo-D9gO5Mw8 1.png'
import youngAgroLogo from '@/assets/images/Partners/YAA_logo-BhcM6wWM 1.png'
import merckLogo from '@/assets/images/Partners/Logo_Merck-C6pWuydh 1.png'
import sfmSysLogo from '@/assets/images/Partners/Logo_Merck-C6pWuydh 2.png'
import paypalLogo from '@/assets/images/Partners/PayPal_logo-Bk3FRCba 1.png'
import dbLogo from '@/assets/images/Partners/Deutsche_Bahn_AG_Logo-CesKESIN 1.png'
import iqviaLogo from '@/assets/images/Partners/iqvia-DLgpeqFe 1.png'
import orangeLogo from '@/assets/images/Partners/Orange_logo-D2YlBKdX 1.png'

import { motion } from 'framer-motion'

const PartnersLogos: {
	label: string
	image: string
}[] = [
	{ label: 'gizLogo', image: gizLogo },
	{
		label: 'mtnLogo',
		image: mtnLogo,
	},
	{
		label: 'youngAgroLogo',
		image: youngAgroLogo,
	},
	{
		label: 'merckLogo',
		image: merckLogo,
	},
	{
		label: 'sfmSysLogo',
		image: sfmSysLogo,
	},
	{
		label: 'paypalLogo',
		image: paypalLogo,
	},
	{
		label: 'dbLogo',
		image: dbLogo,
	},
	{
		label: 'iqviaLogo',
		image: iqviaLogo,
	},
	{
		label: 'orangeLogo',
		image: orangeLogo,
	},
]

const carouselVariants = cva('group/brands flex w-screen mx-auto overflow-hidden', {
	variants: {
		variant: {
			default: '',
			primary: 'bg-black',
			secondary: 'bg-[#B9FD50]',
			white: 'bg-white',
			neutral: 'bg-[#212121]',
		},
	},
	defaultVariants: {
		variant: 'default',
	},
})

export interface BrandsCarouselProps
	extends React.HTMLAttributes<HTMLDivElement>,
		VariantProps<typeof carouselVariants> {
	speed?: number
	direction?: 'left' | 'right'
	pauseOnHover?: boolean
}

const BrandsCarousel = ({ pauseOnHover, speed = 50 }: BrandsCarouselProps) => {
	const duplicatedPartners = [...PartnersLogos, ...PartnersLogos]

	// const animationDirection = direction === 'left' ? -1 : 1
	const animationDuration = (duplicatedPartners.length * speed) / 10
	return (
		<motion.div
			className="flex whitespace-nowrap"
			animate={{ x: ['0%', '-50%'] }}
			// animate={{
			// 	x: animationDirection * -100 * PartnersLogos.length + '%',
			// }}
			transition={{
				x: {
					repeat: Infinity,
					repeatType: 'loop',
					duration: animationDuration,
					ease: 'linear',
				},
			}}
			whileHover={pauseOnHover ? { animationPlayState: 'paused' } : {}}
			style={{ width: `${duplicatedPartners.length * 200}px` }}
		>
			{[...PartnersLogos, ...PartnersLogos].map((partner, index) => (
				<motion.div
					key={`partner-${index}`}
					className="inline-flex items-center justify-center mx-8 flex-shrink-0 rounded-lg transition-shadow duration-300"
					style={{ width: '200px', height: '100px' }}
					whileHover={{ scale: 1.05 }}
					transition={{ duration: 0.2 }}
				>
					<img
						src={partner.image}
						alt={partner.label}
						className="max-w-full max-h-full object-contain grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100"
						onError={(e) => {
							const target = e.target as HTMLImageElement
							target.src = `https://via.placeholder.com/200x80/ffffff/000000?text=${encodeURIComponent(
								partner.label,
							)}`
						}}
					/>
				</motion.div>
			))}
		</motion.div>
	)
}

export default BrandsCarousel
