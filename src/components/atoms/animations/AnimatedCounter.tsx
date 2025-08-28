import { animate, KeyframeOptions, useInView, useIsomorphicLayoutEffect } from 'framer-motion'
import { FC, useRef } from 'react'

interface AnimatedCounterProps {
	from?: number
	to: number
	animationOptions?: KeyframeOptions
}

const AnimatedCounter: FC<AnimatedCounterProps> = ({ from = 0, to, animationOptions }) => {
	const ref = useRef<HTMLSpanElement>(null)

	const inView = useInView(ref, { once: true })

	useIsomorphicLayoutEffect(() => {
		const element = ref.current

		if (!element) return
		if (!inView) return

		if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
			element.textContent = String(to)
			return
		}

		element.textContent = String(from)

		const controls = animate(from, to, {
			duration: 1.5,
			ease: 'easeOut',
			...animationOptions,
			onUpdate(value) {
				element.textContent = String(value.toFixed(0))
			},
		})

		return () => {
			controls.stop()
		}
	}, [ref, inView, from, to])

	return <span ref={ref} />
}

export default AnimatedCounter
