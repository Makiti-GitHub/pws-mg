import makitiLogoWhite from '@/assets/images/logo_makiti/Makiti Logo White.png'
import { Link, useLocation } from 'rasengan'
import LanguageButton from '../atoms/buttons/LanguageButton'
import MotionIconButton2 from '../atoms/buttons/MotionIconButton2'
import Image from '@rasenganjs/image'
import { useTranslation } from 'react-i18next'
import { useMenuContext } from '@/hooks/guard/ContextGuard'
import { MenuIcon } from 'lucide-react'
import { Button } from '../ui/button'

const NavBar = () => {
	const { t } = useTranslation()
	const { pathname } = useLocation()

	const { isOpened, setIsOpened, navlinks } = useMenuContext()

	console.log(pathname)

	return (
		<div className="fixed left-0 right-0 w-full z-30">
			<nav
				className={`relative px-8 md:px-[80px] xl:px-[120px] py-5 w-full flex items-center justify-between bg-secondary glassy_navbar`}
			>
				{/* === Logo === */}
				<div className="w-[121px] h-[84px]">
					{/* === Background Images === */}
					{/* <Image */}
					<Link to={'/'}>
						<Image
							src={makitiLogoWhite}
							alt="Makiti logo"
							width={'100%'}
							height={'100%'}
							className="size-full aspect-auto object-contain pointer-events-none select-none"
						/>
					</Link>
				</div>
				{/* === Menu === */}
				<ul
					className={`hidden lg:flex flex-1 justify-center items-center gap-6 text-white text-lg`}
				>
					{navlinks.map((link, index) => (
						<li key={`nav-link-${index}`}>
							<Link
								className="hover:text-primary hover:underline capitalize"
								to={link.href}
							>
								{t(`nav.links.${link.label}`)}
							</Link>
						</li>
					))}
				</ul>

				<div className="flex items-center gap-4">
					<MotionIconButton2
						label={t('nav.cta.letsTalk')}
						className="rounded-[40px] px-2 py-1.5 h-max text-base hidden sm:inline-flex"
					/>
					{/* <Button variant="primary" className="rounded-4xl">
						<span className="sr-only">Let's talk</span> <span>Let's talk</span>{' '}
						<ArrowUpRightIcon className="size-5" />
					</Button> */}

					<LanguageButton />

					<Button
						variant={'ghost'}
						type="button"
						className="rounded-lg h-max lg:hidden !p-1 text-white place-content-center transition-all duration-75 ease-in-out hover:text-secondary hover:bg-primary"
						onClick={() => setIsOpened(!isOpened)}
					>
						<span className="sr-only">mobile Menu</span>
						<MenuIcon className="size-6" />
					</Button>
				</div>
			</nav>
		</div>
	)
}

export default NavBar
