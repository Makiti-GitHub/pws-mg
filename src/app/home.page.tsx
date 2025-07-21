import { Link } from 'rasengan'
import logo from '@/assets/logo.svg'
import RasenganVector from '@/assets/RasenganVector.svg'
import shadcnLogo from '@/assets/shadcnLogo.png'
import Image from '@rasenganjs/image'
import type { FC } from 'react'
import { Button } from '@/components/ui/button'
import { ArrowUpRightIcon } from 'lucide-react'
import SectionHeader from '@/components/molecules/SectionHeader'
import Statistics from '@/components/organisms/Statistics'

interface InfoCardProps {
	title: string
	desc: string
	link: string
	linkText: string
}

const InfoCard: FC<InfoCardProps> = ({ title, desc, link, linkText }) => (
	<div className="flex flex-col w-full p-4 border-2 border-zinc-950/5 rounded-xl">
		<div className="flex flex-col gap-2">
			<h2 className="text-xl font-Lexend">{title}</h2>
			<p className="text-sm font-Lexend font-light">{desc}</p>
		</div>
		<a
			href={link}
			target="_blank"
			rel="noopener noreferrer"
			className="mt-4 text-primary font-Lexend font-light text-sm"
		>
			{linkText}
		</a>
	</div>
)

const Home: FC & {
	path?: string
	metadata?: {
		title: string
		description: string
	}
} = () => {
	return (
		<section className="size-full bg-white flex flex-col items-center font-comfortaa relative">
			{/* === Header === */}
			{/* <header className="flex justify-end items-center w-full mb-7">
        <div className="flex items-center gap-2">
          <span className="font-Lexend text-sm">Powered by</span>
          <Link to="https://rasengan.dev" target="_blank">
            <Image src={logo} alt="Rasengan logo" width={120} height={40} />
          </Link>
        </div>
      </header> */}

			{/* === Navigation  === */}
			<nav className="px-[120px] py-5 w-full flex items-center justify-between bg-secondary">
				{/* === Logo === */}
				<div className="w-[121px] h-[84px] bg-green-300">
					{/* === Background Images ===
      <img
        src={shadcnLogo}
        alt="shadcn logo"
        className="
          absolute 
          top-10 left-4
          sm:top-14 sm:left-10 
          md:top-16 md:left-40 
          w-[120px] 
          sm:w-[180px] 
          md:w-[300px] 
          opacity-20 
          pointer-events-none 
          select-none
        "
      />
      <img
        src={RasenganVector}
        alt="Rasengan vector"
        className="
          absolute 
          top-6 right-4 
          sm:top-10 sm:right-10 
          md:top-10 md:right-[12.5rem] 
          w-[150px] 
          sm:w-[240px] 
          md:w-[340px] 
          opacity-60 
          pointer-events-none 
          select-none
        "
      /> */}
					Image
				</div>
				{/* === Menu === */}
				<ul className="flex items-center gap-6 text-white text-lg font-normal tracking-normal">
					<li>Services</li>
					<li>Porfolio</li>
					<li>Products</li>
					<li>About</li>
				</ul>

				<div className="flex items-center gap-8">
					<Button variant="primary" className="rounded-4xl">
						<span className="sr-only">Let's talk</span> <span>Let's talk</span>{' '}
						<ArrowUpRightIcon className="size-5" />
					</Button>
					<div>
						<span className="text-white text-lg font-normal tracking-normal">EN</span>
					</div>
				</div>
			</nav>

			{/* === Main === */}
			<main>
				{/* === Hero === */}
				<section></section>

				{/* === Our Expertise === */}
				<section></section>
				{/* === Find he Talent You Need === */}
				<section></section>

				{/* === Our Success Stories  === */}
				<section></section>

				{/* === Our Live Products Stories  === */}
				<section></section>

				{/* === Our Technology Stack  === */}
				<section></section>

				{/* === What our clients says  === */}
				<section></section>

				{/* === Frequently Asked Questions  === */}
				<section></section>

				{/* === Why choose Makiti Group  === */}
				<section className="px-[120px] flex flex-col gap-[50px]">
					<SectionHeader
						title="Why Choose Makiti Group"
						subTitle="Partner with us for exceptional IT outsourcing solutions backed by expertise, innovation, and reliability."
					/>

					<div className="grid grid-cols-4 gap-8">
						{Array.from({ length: 8 }).map((_, index) => (
							<div className="box_shadow w-[348px] h-[262px] flex flex-col rounded-[12px] p-6 gap-4">
								<div className="flex flex-col items-center">
									<div className="w-[74px] h-[74px] rounded-[12px] bg-[#DEEAFD]"></div>
									<p className="text-2xl font-medium text-[#020304] text-center">
										Agile Approach
									</p>
								</div>
								<p className="text-[#44474A] text-xl font-normal text-center">
									Fast, iterative development with continuous feedback and rapid
									deployment cycles.
								</p>
							</div>
						))}
					</div>

					<Statistics />
				</section>

				{/* === Start you project today  === */}
				<section></section>
			</main>
		</section>
	)
}

Home.path = '/'
Home.metadata = {
	title: 'Home',
	description: 'Home page',
}

export default Home
