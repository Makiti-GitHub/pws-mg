import { useEffect } from 'react'
import { useLocation } from 'rasengan'

export function ScrollRestoration() {
	const location = useLocation()

	useEffect(() => {
		if (typeof window === 'undefined') return

		const handleBeforeUnload = () => {
			window.scrollTo(0, 0)
		}

		handleBeforeUnload()

		window.addEventListener('beforeunload', handleBeforeUnload)
		return () => window.removeEventListener('beforeunload', handleBeforeUnload)
	}, [location.pathname])

	return null
}
