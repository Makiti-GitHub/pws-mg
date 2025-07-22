import { ArrowUpRightIcon } from 'lucide-react'
import { Button } from '../ui/button'
import makitiLogo from '../../assets/images/logo_makiti/Makiti Logo White.png'

const NavBar = () => {
	return (
		<nav className="px-[120px] py-5 w-full flex items-center justify-between bg-secondary">
			{/* === Logo === */}
			<div className="w-[121px] h-[84px]">
				{/* === Background Images === */}
				{/* <Image */}
				<img
					src={makitiLogo}
					alt="shadcn logo"
					className="w-[121px] pointer-events-none select-none"
				/>
			</div>
			{/* === Menu === */}
			<ul className="flex items-center gap-6 text-white text-lg">
				<li>
					<a className="hover:text-primary hover:underline" href="#services">
						Services
					</a>
				</li>
				<li>
					<a className="hover:text-primary hover:underline" href="#portfolio">
						Porfolio
					</a>
				</li>
				<li>
					<a className="hover:text-primary hover:underline" href="#products">
						Products
					</a>
				</li>
				<li>
					<a className="hover:text-primary hover:underline" href="#about">
						About
					</a>
				</li>
			</ul>

			<div className="flex items-center gap-8">
				<Button variant="primary" className="rounded-4xl">
					<span className="sr-only">Let's talk</span> <span>Let's talk</span>{' '}
					<ArrowUpRightIcon className="size-5" />
				</Button>
				<div>
					<span className="text-white text-lg">EN</span>
				</div>
			</div>
		</nav>
	)
}

export default NavBar
