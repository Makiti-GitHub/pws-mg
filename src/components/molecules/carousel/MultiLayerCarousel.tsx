import CircularCarousel from './CircularCarousel'

interface CarouselImage {
	id: number
	src: string
	alt: string
	title?: string
}

// interface CircularCarouselProps {
// 	images: CarouselImage[]
// 	radius?: number
// 	imageSize?: number
// 	duration?: number
// 	direction?: 'clockwise' | 'counterclockwise'
// 	pauseOnHover?: boolean
// 	className?: string
// }
// Multi-layer circular carousel
const MultiLayerCarousel: React.FC<{
	outerImages: CarouselImage[]
	innerImages: CarouselImage[]
}> = ({ outerImages, innerImages }) => {
	return (
		<div className="relative">
			<CircularCarousel
				images={outerImages}
				radius={250}
				imageSize={70}
				duration={25}
				direction="clockwise"
			/>
			<div className="absolute inset-0">
				<CircularCarousel
					images={innerImages}
					radius={150}
					imageSize={60}
					duration={18}
					direction="counterclockwise"
				/>
			</div>
		</div>
	)
}

export default MultiLayerCarousel
