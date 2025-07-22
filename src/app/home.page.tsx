// import { Link } from 'rasengan'
// import logo from '@/assets/logo.svg'
// import RasenganVector from '@/assets/RasenganVector.svg'
// import shadcnLogo from '@/assets/shadcnLogo.png'
// import Image from '@rasenganjs/image'

import { PageComponent } from 'rasengan'
import StartProjectSection from '@/components/organisms/home/StartProjectSection'
import FaqSection from '@/components/organisms/home/FaqSection'
import WhyChooseMakitiSection from '@/components/organisms/home/WhyChooseMakitiSection'
import TestimonialSection from '@/components/organisms/home/TestimonialSection'
import ProductsSection from '@/components/organisms/home/ProductsSection'
import SuccessStoriesSection from '@/components/organisms/home/SuccessStoriesSection'
import TalentProfileSection from '@/components/organisms/home/TalentProfileSection'
import OurExpertiseSection from '@/components/organisms/home/OurExpertiseSection'
import NavBar from '@/components/organisms/Navbar'
import OurTechnologyStackSection from '@/components/organisms/home/OurTechnologyStackSection'
import Footer from '@/components/organisms/Footer'
import HeroSection from '@/components/organisms/home/HeroSection'

// interface InfoCardProps {
// 	title: string
// 	desc: string
// 	link: string
// 	linkText: string
// }

// const InfoCard: FC<InfoCardProps> = ({ title, desc, link, linkText }) => (
// 	<div className="flex flex-col w-full p-4 border-2 border-zinc-950/5 rounded-xl">
// 		<div className="flex flex-col gap-2">
// 			<h2 className="text-xl font-Lexend">{title}</h2>
// 			<p className="text-sm font-Lexend font-light">{desc}</p>
// 		</div>
// 		<a
// 			href={link}
// 			target="_blank"
// 			rel="noopener noreferrer"
// 			className="mt-4 text-primary font-Lexend font-light text-sm"
// 		>
// 			{linkText}
// 		</a>
// 	</div>
// )

const Home: PageComponent = () => {
	return (
		<section className="size-full bg-white flex flex-col items-center font-seravek_regular tracking-normal relative">
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
			<NavBar />
			{/* === Main === */}
			<main className="space-y-16">
				{/* === Hero === */}
				<HeroSection />

				{/* === Our Expertise === */}
				<OurExpertiseSection />

				{/* === Find he Talent You Need === */}
				<TalentProfileSection />

				{/* === Our Success Stories  === */}
				<SuccessStoriesSection />

				{/* === Our Live Products  === */}
				<ProductsSection />

				{/* === Our Technology Stack  === */}
				<OurTechnologyStackSection />

				{/* === What our clients says  === */}
				<TestimonialSection />

				{/* === Frequently Asked Questions  === */}
				<FaqSection />

				{/* === Why choose Makiti Group  === */}
				<WhyChooseMakitiSection />

				{/* === Start you project today  === */}
				<StartProjectSection />
			</main>

			<Footer />
		</section>
	)
}

Home.path = '/:locale?/'
Home.metadata = {
	title: 'Home',
	description: 'Home page',
}

export default Home
