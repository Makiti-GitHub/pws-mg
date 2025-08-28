import { motion } from 'framer-motion'
import { ArrowRightIcon } from 'lucide-react'

export default function CustomCursor({
	position,
	isVisible,
}: {
	position: { x: number; y: number }
	isVisible: boolean
}) {
	return (
		<motion.div
			key={'custom-cursor'}
			className="pointer-events-none absolute top-0 left-0 z-50 size-24 flex justify-center items-center rounded-full border-2 glassy_navbar2"
			style={{
				left: position.x - 50, // Center the cursor
				top: position.y - 50, // Center the cursor
				opacity: isVisible ? 1 : 0,
			}}
			animate={{
				scale: isVisible ? 1 : 0.75,
			}}
			transition={{ duration: 0.1, ease: 'easeInOut' }}
		>
			<ArrowRightIcon className="size-12 text-white" />
		</motion.div>
	)
}
