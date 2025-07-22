import Banner from '@/components/molecules/banner/Banner'
import TestimonialCard from '@/components/molecules/cards/TestimonialCard'
import SectionHeader from '@/components/molecules/SectionHeader'
import { Button } from '@/components/ui/button'
import { testimonialsMock } from '@/data/mock'
import { ArrowUpRightIcon } from 'lucide-react'

const TestimonialSection = () => {
	return (
		<section className="flex flex-col gap-8 px-[120px]">
			<div className="space-y-[50px]">
				<SectionHeader
					title="What Our Clients Say"
					subTitle="Don’t just take our word for it—hear from our satisfied clients."
				/>

				<div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
					{testimonialsMock.map((testimonial, index) => (
						<TestimonialCard key={`testimonial-${index}`} testimonial={testimonial} />
					))}
				</div>
			</div>

			<Banner
				variant="secondary"
				title="Ready to transform your business?"
				desc="Let's discuss how we can help you achieve similar results with our
                                        expert IT outsourcing services."
			>
				<Button
					variant="primary"
					className="rounded-4xl h-max px-5 py-3 gap-1 hover:cursor-pointer"
				>
					<span className="sr-only">Let's Talk</span>{' '}
					<span className="text-lg font-seravek_medium">Let's Talk</span>{' '}
					<ArrowUpRightIcon className="size-6" />
				</Button>
			</Banner>
		</section>
	)
}

export default TestimonialSection
