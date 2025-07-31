import { testimonialsMock } from '@/data/mock'
import { QuoteIcon, Star } from 'lucide-react'
import { FC } from 'react'
import Image from '@rasenganjs/image'
import { useTranslation } from 'react-i18next'

interface TestimonialProps {
	testimonial: (typeof testimonialsMock)[number]
}

const TestimonialCard: FC<TestimonialProps> = ({ testimonial }) => {
	const { t } = useTranslation()
	return (
		<article className="w-full p-6 flex flex-col gap-5 rounded-xl box_shadow_products_card">
			<div className="w-full flex items-center justify-between gap-4">
				<QuoteIcon className="size-8 text-outline-variant" />
				<div className="flex items-center">
					{Array.from({ length: 5 }).map((_, index) => (
						<Star
							className="size-4 fill-[#E7B213] text-[#E7B213]"
							key={`tech-${index}-star`}
						/>
					))}
				</div>
			</div>

			<p className="text-base text-outline flex-1">{`"${testimonial.quote}"`}</p>

			<div className="rounded-lg p-3 space-y-4 text-sm bg-surface-container">
				<div className="flex gap-20">
					<div className="space-y-1">
						<p className="text-outline">{t('project')}</p>

						<p className="font-seravek_medium text-on-surface-variant">
							{testimonial.category}
						</p>
					</div>
					<div className="space-y-1">
						<p className="text-outline">{t('duration')}</p>
						<p className="font-seravek_medium text-on-surface-variant">
							{testimonial.duration} {t('months')}
						</p>
					</div>
				</div>

				<div className="space-y-1">
					<p className="text-outline capitalize">{t('keyResults')}</p>

					<p className="font-seravek_medium text-success">{testimonial.result}</p>
				</div>
			</div>

			<div className="flex items-center gap-2">
				<div className="size-10 bg-slate-300 rounded-full">
					<Image
						src={testimonial.user.image}
						alt={testimonial.user.name}
						width={40}
						height={40}
					/>
				</div>
				<div className="space-y-1 text-sm">
					<p className="font-seravek_medium text-on-surface-variant text-sm">
						{testimonial.user.name}
					</p>
					<p className="text-outline text-sm">{testimonial.user.job}</p>
				</div>
			</div>
		</article>
	)
}

export default TestimonialCard
