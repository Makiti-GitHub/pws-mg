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
// Orbital carousel with counter-rotation
const OrbitalCarousel: React.FC<CircularCarouselProps> = (props) => {
	const { images, radius = 200, imageSize = 80, duration = 20, direction = 'clockwise' } = props
	const angleStep = 360 / images.length
	const rotationDirection = direction === 'clockwise' ? 360 : -360
	const counterRotation = direction === 'clockwise' ? -360 : 360

	return (
		<div className="relative flex items-center justify-center">
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
								height: `${imageSize}px`,
							}}
							animate={{ rotate: counterRotation }}
							transition={{
								duration: duration,
								ease: 'linear',
								repeat: Infinity,
							}}
							whileHover={{ scale: 1.3, zIndex: 10 }}
						>
							<img
								src={image.src}
								alt={image.alt}
								className="w-full h-full object-cover rounded-full border-4 border-white shadow-lg"
								onError={(e) => {
									const target = e.target as HTMLImageElement
									target.src = `https://picsum.photos/${imageSize}/${imageSize}?random=${image.id}`
								}}
							/>
						</motion.div>
					)
				})}
			</motion.div>
		</div>
	)
}

export default OrbitalCarousel
