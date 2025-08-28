import MotionIconButton from '@/components/atoms/buttons/MotionIconButton'
import Banner from '@/components/molecules/banner/Banner'
import TestimonialCard from '@/components/molecules/cards/TestimonialCard'
import SectionHeader from '@/components/molecules/SectionHeader'
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from '@/components/ui/carousel'
import { testimonialsMock } from '@/data/mock'
import { useFloatingCursor } from '@/hooks/guard/ContextGuard'
import { Link } from 'rasengan'
import { useTranslation } from 'react-i18next'

const TestimonialSection = () => {
	const { t, i18n } = useTranslation()
	const { setCursorVariant } = useFloatingCursor()
	return (
		<section className="flex flex-col gap-2 sm:gap-16 px-4 sm:px-8 md:px-[80px] lg:px-[120px] w-screen py-16">
			<div className="flex flex-col gap-5 sm:gap-10">
				<SectionHeader
					title={t('pages.home.sections.whatOurClientsSays.title')}
					subTitle={t('pages.home.sections.whatOurClientsSays.subtitle')}
				/>

				<div className="relative mt-20 md:mt-10">
					<Carousel
						className="w-full relative"
						opts={{
							align: 'start',
							loop: true,
						}}
					>
						<CarouselContent className="py-3 -ml-2 pr-2">
							{testimonialsMock.map((testimonial, index) => (
								<CarouselItem
									className={`basis-full lg:basis-1/2 xl:basis-1/3`}
									key={`testimonial-${index}`}
								>
									<TestimonialCard testimonial={testimonial} />
								</CarouselItem>
							))}
						</CarouselContent>
						<div className="absolute -top-10 right-8">
							<CarouselPrevious
								title={t('previous')}
								onMouseEnter={() => setCursorVariant('text')}
								onMouseLeave={() => setCursorVariant('default')}
								className="hover:cursor-pointer bg-white dark:bg-white hover:bg-white/80 dark:hover:bg-white/80 hover:text-black/90 dark:border-transparent"
							/>
						</div>

						<div className="absolute -top-10 right-12">
							<CarouselNext
								title={t('next')}
								onMouseEnter={() => setCursorVariant('text')}
								onMouseLeave={() => setCursorVariant('default')}
								size={'icon'}
								className="hover:cursor-pointer bg-white dark:bg-white hover:bg-white/80 dark:hover:bg-white/80 hover:text-black/90 dark:border-transparent"
							/>
						</div>
					</Carousel>
				</div>
			</div>

			<Banner
				variant="secondary"
				title={t('pages.home.sections.whatOurClientsSays.banner.title')}
				desc={t('pages.home.sections.whatOurClientsSays.banner.subtitle')}
			>
				<Link to={`/${i18n.language}/#start-project`}>
					<MotionIconButton
						onMouseEnter={() => setCursorVariant('button')}
						onMouseLeave={() => setCursorVariant('default')}
						label={t('pages.home.sections.whatOurClientsSays.banner.cta')}
						className="rounded-4xl h-max px-4 py-2 sm:py-3 gap-1 text-base sm:text-lg font-seravek_medium uppercase"
					/>
				</Link>
			</Banner>
		</section>
	)
}

export default TestimonialSection
