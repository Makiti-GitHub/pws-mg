import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { statisticsMock } from '@/data/mock'
import { ArrowUpRightIcon } from 'lucide-react'

const HeroSection = () => {
	return (
		<section className="space-y-24 bg-secondary w-screen">
			<div className="w-full grid grid-cols-2">
				<div className="flex flex-col gap-10 bg-green-300 px-[120px] text-white">
					<span className="rounded-2xl w-max px-3 py-1.5 border-2 border-white">
						IT OUTSOURCING
					</span>
					<div className="space-y-6">
						<h1 className="font-seravek_bold text-[80px] leading-20">
							Your Strategic IT Outsourcing Partner
						</h1>
						<p className="font-seravek_bold text-[26px]">
							Transform your business with our expert IT outsourcing solutions. From
							development to consulting, we deliver excellence across all technology
							domains.
						</p>
					</div>

					<Button
						variant={'primary'}
						className="gap-1 !px-8 !py-6 !h-max !m-0 rounded-[40px] hover:cursor-pointer"
					>
						<span className="sr-only">Discover Our Outsourcing Solutions</span>
						<span className="text-2xl">Discover Our Outsourcing Solutions</span>
						<ArrowUpRightIcon className="size-6" />
					</Button>
				</div>
				<div className="w-full bg-yellow-300" />
			</div>
			<div className="space-y-[60px]">
				<div className="px-[120px]">
					<Separator className="w-full bg-surface-variant" />
				</div>
				<div className="px-[120px] flex justify-between">
					<div className="flex justify-between w-full">
						<div className="space-y-4 max-w-[600px]">
							<p className="font-seravek_medium text-[32px] underline text-primary">
								Our Clients
							</p>
							<p className="text-white text-2xl font-seravek_light">
								We’ve partnered with several companies to reimagine and redefine the
								way users experience their products.
							</p>
						</div>
						<div className="flex justify-between items-center gap-12">
							{statisticsMock.map((statistic, index) => (
								<div
									key={`hero-record-stats-${index}`}
									className="flex flex-col tracking-normal font-normal gap-1"
								>
									<p className="text-6xl text-primary">
										<span className="">{statistic.count}</span>
										<span>+</span>
									</p>
									<p className="text-lg text-white whitespace-nowrap">
										{statistic.label}
									</p>
								</div>
							))}
						</div>
					</div>
				</div>
				<div className="w-full h-[70px] bg-red-300" />
				<div className="px-[120px]">
					<Separator className="w-full bg-surface-variant" />
				</div>
			</div>
		</section>
	)
}

export default HeroSection
