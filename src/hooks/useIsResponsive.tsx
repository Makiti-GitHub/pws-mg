import { useEffect, useState } from 'react'

export type ResponsiveType = {
	superLargeDesktop?: {
		breakpoint: { max: number; min: number }
		items: number
	}
	desktop: {
		breakpoint: { max: number; min: number }
		items: number
	}
	tablet: {
		breakpoint: { max: number; min: number }
		items: number
	}
	mobile: {
		breakpoint: { max: number; min: number }
		items: number
	}
}

export const ResponsiveBreakpoints: ResponsiveType = {
	superLargeDesktop: {
		// the naming can be any, depends on you.
		breakpoint: { max: 4000, min: 3000 },
		items: 1,
	},
	desktop: {
		breakpoint: { max: 3000, min: 1024 },
		items: 1,
	},
	tablet: {
		breakpoint: { max: 1024, min: 464 },
		items: 1,
	},
	mobile: {
		breakpoint: { max: 464, min: 0 },
		items: 1,
	},
}

const useIsResponsive = ({ width }: { width: number }) => {
	const [isResponsive, setIsResponsive] = useState(window.innerWidth < width)

	useEffect(() => {
		const handleResize = () => {
			setIsResponsive(window.innerWidth < width)
		}

		window.addEventListener('resize', handleResize)

		// Clean up event listener on component unmount
		return () => {
			window.removeEventListener('resize', handleResize)
		}
	}, [width])

	return isResponsive
}

export default useIsResponsive
