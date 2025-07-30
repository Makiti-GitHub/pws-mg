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
	cursorVariant: string
	setCursorVariant: (variant: string) => void
}

const FloatingCursorContext = createContext<FloatingCursorContextType | undefined>(undefined)

export default FloatingCursorContext
