import { FC } from 'react'

interface TestimonialProps {
	testimonial: {
		quote: string
		category: string
		duration: number
		result: string
		user: {
			name: string
			image: string
			job: string
		}
	}
}

const TestimonialCard: FC<TestimonialProps> = ({ testimonial }) => {
	return (
		<div
			tabIndex={0}
			role="button"
			className="w-full hover:cursor-pointer p-6 flex flex-col gap-5 rounded-[12px] box_shadow_products_card"
		>
			<div className="w-full h-[50px] bg-red-300 rounded-t-[20px]" />

			<p className="text-base text-outline flex-1">{`"${testimonial.quote}"`}</p>

			<div className="rounded-[8px] p-3 space-y-4 text-sm bg-surface-container">
				<div className="flex gap-20">
					<div className="space-y-1">
						<p className="text-outline">Project</p>

						<p className="font-seravek_medium text-on-surface-variant">
							{testimonial.category}
						</p>
					</div>
					<div className="space-y-1">
						<p className="text-outline">Duration</p>
						<p className="font-seravek_medium text-on-surface-variant">
							{testimonial.duration} Months
						</p>
					</div>
				</div>

				<div className="space-y-1">
					<p className="text-outline">Key results</p>

					<p className="font-seravek_medium text-success">{testimonial.result}</p>
				</div>
			</div>

			<div className="flex items-center gap-2">
				<div className="size-10 bg-red-300 rounded-full" />
				<div className="space-y-1 text-sm">
					<p className="font-seravek_medium text-on-surface-variant text-sm">
						{testimonial.user.name}
					</p>
					<p className="text-outline text-sm">{testimonial.user.job}</p>
				</div>
			</div>
		</div>
	)
}

export default TestimonialCard
