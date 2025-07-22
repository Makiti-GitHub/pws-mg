import { cn } from '@/lib/utils'
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

const BrandsLogos = [
	gizLogo,
	mtnLogo,
	youngAgroLogo,
	merckLogo,
	sfmSysLogo,
	paypalLogo,
	dbLogo,
	iqviaLogo,
	orangeLogo,
]

const carouselVariants = cva('group/brands flex w-full mx-auto overflow-hidden', {
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
		VariantProps<typeof carouselVariants> {}

const BrandsCarousel = ({ className, variant, ...props }: BrandsCarouselProps) => {
	return (
		<div className={cn(carouselVariants({ variant }), className)} {...props}>
			<div
				className={`group-hover/brands:paused flex animate-slide items-center gap-16 md:gap-20 py-4 shrink-0 w-[calc(2*var(5)*(theme(gap.16)+128px))] md:w-[calc(2*var(5)*(theme(gap.20)+144px))]`}
			>
				{[...BrandsLogos, ...BrandsLogos, ...BrandsLogos].map((elmt, index) => (
					<img
						key={index + 10}
						src={elmt}
						alt="logo"
						loading="lazy"
						className="aspect-auto object-contain w-32 md:w-36 h-12"
					/>
				))}
			</div>
		</div>
	)
}

export default BrandsCarousel
