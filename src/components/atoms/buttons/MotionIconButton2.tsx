import { FC, JSX, useState } from 'react'
import { ArrowUpRight } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { twMerge } from 'tailwind-merge'
import { cn } from '@/lib/utils'

interface ButtonProps {
	prefixIcon?: JSX.Element
	suffixIcon?: JSX.Element
	label: string
	className?: string
	onClick?: () => void
	// iconX?: number
}

const MotionIconButton2: FC<ButtonProps> = ({
	prefixIcon,
	suffixIcon,
	label,
	className,
	onClick,
}) => {
	const [buttonState, setButtonState] = useState<'hover' | 'default'>('default')

	return (
		<button
			className={twMerge('w-max')}
			onMouseEnter={() => setButtonState('hover')}
			onMouseLeave={() => setButtonState('default')}
			onClick={onClick}
		>
			<div
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
							{prefixIcon ?? <ArrowUpRight className="size-5" />}
						</motion.div>
					)}
				</AnimatePresence>
				<p className="px-2 z-20">{label}</p>
				<AnimatePresence initial={false}>
					{buttonState === 'default' && (
						<motion.div
							key="mail"
							initial={{ width: 0, opacity: 0 }}
							animate={{ width: 20, opacity: 1 }}
							exit={{ width: 0, opacity: 0 }}
							transition={{ duration: 0.4 }}
						>
							{suffixIcon ?? <ArrowUpRight className="size-5" />}
						</motion.div>
					)}
				</AnimatePresence>
			</div>
		</button>
	)
}

export default MotionIconButton2
