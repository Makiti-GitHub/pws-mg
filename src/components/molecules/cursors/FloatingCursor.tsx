import { useFloatingCursor } from '@/hooks/guard/ContextGuard'
import useIsTouchDevice from '@/hooks/useIsTouchDevice'
import { cn } from '@/lib/utils'

const FloatingCursor = () => {
	const { getCursorStyles, getOuterRingStyles } = useFloatingCursor()
	const { isDesktop } = useIsTouchDevice()

	return (
		<>
			{/* Main cursor dot */}
			<div
				className={cn(
					'fixed top-0 left-0 size-5 bg-primary rounded-full pointer-events-none z-50',
					!isDesktop && 'hidden',
				)}
				style={{
					...getCursorStyles(),
					mixBlendMode: 'difference',
				}}
			/>

			{/* Outer ring */}
			<div
				className={cn(
					'fixed top-0 left-0 size-7 border-2 border-white rounded-full pointer-events-none z-40',
					!isDesktop && 'hidden',
				)}
				style={getOuterRingStyles()}
			/>
		</>
	)
}

export default FloatingCursor
