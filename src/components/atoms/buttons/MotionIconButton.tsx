import { FC, JSX, useState } from 'react'
import { ArrowUpRight } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { cn } from '@/lib/utils'

interface MotionIconButtonProps {
	prefixIcon?: JSX.Element
	suffixIcon?: JSX.Element
	label: string
	className?: string
	// iconX?: number
}

const MotionIconButton: FC<React.ComponentProps<'button'> & MotionIconButtonProps> = ({
	prefixIcon,
	suffixIcon,
	label,
	className,
	...props
}) => {
	const [buttonState, setButtonState] = useState<'hover' | 'default'>('default')

	return (
		<button
			{...props}
			onMouseEnter={(e) => {
				setButtonState('hover')
				props.onMouseEnter?.(e)
			}}
			onMouseLeave={(e) => {
				setButtonState('default')
				props.onMouseLeave?.(e)
			}}
			className={cn(
				'bg-primary hover:cursor-pointer border-2 border-primary hover:border-primary hover:bg-secondary text-secondary hover:text-primary !m-0 w-max flex items-center duration-300 ease-in-out',
				className,
			)}
		>
			<AnimatePresence>
				{buttonState === 'hover' && (
					<motion.div
						key="copy"
						initial={{ width: 0, opacity: 0 }}
						animate={{ width: 20, opacity: 1 }}
						exit={{ width: 0, opacity: 0 }}
						transition={{ duration: 0.4 }}
					>
						{prefixIcon ?? <ArrowUpRight className="size-4 sm:size-5" />}
					</motion.div>
				)}
			</AnimatePresence>
			<p className="px-1 sm:px-2 z-20">{label}</p>
			<AnimatePresence initial={false}>
				{buttonState === 'default' && (
					<motion.div
						key="mail"
						initial={{ width: 0, opacity: 0 }}
						animate={{ width: 20, opacity: 1 }}
						exit={{ width: 0, opacity: 0 }}
						transition={{ duration: 0.4 }}
					>
						{suffixIcon ?? <ArrowUpRight className="size-4 sm:size-5" />}
					</motion.div>
				)}
			</AnimatePresence>
		</button>
	)
}

export default MotionIconButton
