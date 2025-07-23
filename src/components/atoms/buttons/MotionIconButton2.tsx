import { useState } from 'react'
import { ArrowUpRight, Copy, Mail, SquareCheck } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { twMerge } from 'tailwind-merge'

const MotionIconButton2 = () => {
	const [buttonState, setButtonState] = useState<'hover' | 'default'>('default')

	return (
		<button
			className={twMerge('w-max')}
			onMouseEnter={() => setButtonState('hover')}
			onMouseLeave={() => setButtonState('default')}
			onClick={() => {}}
		>
			<div className="bg-primary hover:cursor-pointer border-2 border-primary hover:border-primary hover:bg-secondary text-secondary hover:text-primary rounded-[40px] !px-8 !py-6 !h-max !m-0 w-max flex items-center duration-300 ease-in-out">
				{/* <AnimatePresence initial={false} mode="wait">
					{buttonState === 'copy' ? (
						<motion.div
							key="copied"
							initial={{ y: 40 }}
							animate={{ y: 0 }}
							exit={{ y: 40 }}
							transition={{ duration: 0.2 }}
							className="flex justify-center items-center space-x-2"
						>
							<p className="text-sm md:text-base font-medium">Copied</p>
							<SquareCheck size={20} />
						</motion.div>
					) : (
						<motion.div
							key="copy-mail"
							initial={{ y: -40 }}
							animate={{ y: 0 }}
							exit={{ y: -40 }}
							transition={{ duration: 0.2 }}
							className="flex justify-center items-center"
						> */}
				<AnimatePresence>
					{buttonState === 'hover' && (
						<motion.div
							key="copy"
							initial={{ x: 80, width: 0, opacity: 0 }}
							animate={{ x: 0, width: 20, opacity: 1 }}
							exit={{ x: 80, width: 0, opacity: 0 }}
							transition={{ duration: 0.4 }}
						>
							<Copy className="size-5" />
						</motion.div>
					)}
				</AnimatePresence>
				<p className="text-2xl px-2 z-20">Discover Our Outsourcing Solutions</p>
				<AnimatePresence initial={false}>
					{buttonState === 'default' && (
						<motion.div
							key="mail"
							initial={{ x: -80, width: 0, opacity: 0 }}
							animate={{ x: 0, width: 20, opacity: 1 }}
							exit={{ x: -80, width: 0, opacity: 0 }}
							transition={{ duration: 0.4 }}
						>
							<ArrowUpRight className="size-5" />
						</motion.div>
					)}
				</AnimatePresence>
				{/* </motion.div>
					)}
				</AnimatePresence> */}
			</div>
		</button>
	)
}

export default MotionIconButton2
