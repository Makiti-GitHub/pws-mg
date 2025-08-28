import Image from '@rasenganjs/image'
import { motion } from 'framer-motion'

interface CarouselImage {
	id: number
	src: string
	alt: string
	title?: string
}

interface CircularCarouselProps {
	images: CarouselImage[]
	radius?: number
	imageSize?: number
	duration?: number
	direction?: 'clockwise' | 'counterclockwise'
	pauseOnHover?: boolean
	className?: string
}

const CircularCarousel: React.FC<CircularCarouselProps> = ({
	images,
	radius = 200,
	imageSize = 80,
	duration = 20,
	direction = 'clockwise',
	pauseOnHover = true,
	className = '',
}) => {
	const angleStep = 360 / images.length
	const rotationDirection = direction === 'clockwise' ? 360 : -360

	return (
		<div className={`relative flex items-center justify-center ${className}`}>
			<motion.div
				className="relative"
				style={{
					width: `${(radius + imageSize) * 2}px`,
					height: `${(radius + imageSize) * 2}px`,
				}}
				animate={{ rotate: rotationDirection }}
				transition={{
					duration: duration,
					ease: 'linear',
					repeat: Infinity,
				}}
				whileHover={pauseOnHover ? { animationPlayState: 'paused' } : {}}
			>
				{images.map((image, index) => {
					const angle = index * angleStep
					const x = Math.cos((angle - 90) * (Math.PI / 180)) * radius
					const y = Math.sin((angle - 90) * (Math.PI / 180)) * radius

					return (
						<motion.div
							key={image.id}
							className="absolute"
							style={{
								left: `calc(50% + ${x}px - ${imageSize / 2}px)`,
								top: `calc(50% + ${y}px - ${imageSize / 2}px)`,
								width: `${imageSize}px`,
								// height: `${imageSize}px`,
							}}
							whileHover={{ scale: 1.2, zIndex: 10 }}
							transition={{ duration: 0.2 }}
						>
							<div className="relative w-full h-full group">
								<Image
									src={image.src}
									alt={image.alt}
									width={'100%'}
									height={'100%'}
									className="size-full object-contain duration-300"
								/>
								{image.title && (
									<div className="absolute z-20 -bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
										<span className="bg-black text-white text-xs px-2 py-1 rounded whitespace-nowrap">
											{image.title}
										</span>
									</div>
								)}
							</div>
						</motion.div>
					)
				})}
			</motion.div>
		</div>
	)
}

export default CircularCarousel
