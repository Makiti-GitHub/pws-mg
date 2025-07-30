import FloatingCursorContext from '@/contexts/FloatingCursorContext'
import { ReactNode, useEffect, useState } from 'react'

export const FloatingCursorProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
	const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
	const [isVisible, setIsVisible] = useState(false)
	const [cursorVariant, setCursorVariant] = useState('default')
	// const [cursorVariant, setCursorVariant] = useState('default')

	useEffect(() => {
		const handleMouseMove = (e: MouseEvent) => {
			setMousePosition({ x: e.clientX, y: e.clientY })
			setIsVisible(true)
		}

		const handleMouseLeave = () => setIsVisible(false)
		const handleMouseEnter = () => setIsVisible(true)

		window.addEventListener('mousemove', handleMouseMove)
		document.addEventListener('mouseleave', handleMouseLeave)
		document.addEventListener('mouseenter', handleMouseEnter)

		return () => {
			window.removeEventListener('mousemove', handleMouseMove)
			document.removeEventListener('mouseleave', handleMouseLeave)
			document.removeEventListener('mouseenter', handleMouseEnter)
		}
	}, [])

	// Get cursor styles based on variant
	const getCursorStyles = () => {
		const baseStyle = {
			transform: `translate(${mousePosition.x - 16}px, ${mousePosition.y - 16}px)`,
			opacity: isVisible ? 1 : 0,
			transition: 'all 0.1s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
		}

		switch (cursorVariant) {
			case 'text':
				return {
					...baseStyle,
					transform: `translate(${mousePosition.x - 24}px, ${
						mousePosition.y - 24
					}px) scale(1.5)`,
				}
			case 'button':
				return {
					...baseStyle,
					transform: `translate(${mousePosition.x - 32}px, ${
						mousePosition.y - 32
					}px) scale(2)`,
				}
			default:
				return baseStyle
		}
	}

	const getOuterRingStyles = () => {
		const baseStyle = {
			transform: `translate(${mousePosition.x - 20}px, ${mousePosition.y - 20}px)`,
			opacity: isVisible ? 0.3 : 0,
			transition: 'all 0.15s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
		}

		switch (cursorVariant) {
			case 'text':
				return {
					...baseStyle,
					transform: `translate(${mousePosition.x - 20}px, ${
						mousePosition.y - 20
					}px) scale(0.8)`,
					opacity: isVisible ? 0.5 : 0,
				}
			case 'button':
				return {
					...baseStyle,
					transform: `translate(${mousePosition.x - 20}px, ${
						mousePosition.y - 20
					}px) scale(0.5)`,
					opacity: isVisible ? 0.8 : 0,
				}
			default:
				return baseStyle
		}
	}

	const value = {
		getCursorStyles,
		getOuterRingStyles,
		cursorVariant,
		setCursorVariant,
	}

	return <FloatingCursorContext.Provider value={value}>{children}</FloatingCursorContext.Provider>
}
