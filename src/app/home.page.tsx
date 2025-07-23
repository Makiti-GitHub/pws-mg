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
import OurTechnologyStackSection from '@/components/organisms/home/OurTechnologyStackSection'
import HeroSection from '@/components/organisms/home/HeroSection'

const Home: PageComponent = () => {
	return (
		<main className="size-full bg-white flex flex-col items-center font-seravek_regular tracking-normal relative">
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
	)
}

Home.path = '/:locale?/'
Home.metadata = {
	title: 'Home',
	description: 'Home page',
}

export default Home
