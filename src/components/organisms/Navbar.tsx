import { ArrowUpRightIcon } from 'lucide-react'
import { Button } from '../ui/button'

const NavBar = () => {
	return (
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
			<ul className="flex items-center gap-6 text-white text-lg">
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
					<span className="text-white text-lg">EN</span>
				</div>
			</div>
		</nav>
	)
}

export default NavBar
