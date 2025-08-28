import { createContext } from 'react'

export interface FloatingCursorContextType {
	getCursorStyles: () => {
		transform: string
		opacity: number
		transition: string
	}
	getOuterRingStyles: () => {
		transform: string
		opacity: number
		transition: string
	}
	cursorVariant: 'default' | 'text' | 'button' | 'hide'
	setCursorVariant: (variant: 'default' | 'text' | 'button' | 'hide') => void
}

const FloatingCursorContext = createContext<FloatingCursorContextType | undefined>(undefined)

export default FloatingCursorContext
