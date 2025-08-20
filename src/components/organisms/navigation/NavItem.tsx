import { Link, useLocation } from 'rasengan'
import { useTranslation } from 'react-i18next'

interface NavItemProps {
	href: string
	label: string
}
const NavItem = ({ href, label }: NavItemProps) => {
	const { t, i18n } = useTranslation()
	const location = useLocation()

	// Extract locale from current path (if exists)
	const currentPath = location.pathname
	const localePattern = /^\/([a-z]{2})(\/.*)?$/ // Matches /en, /fr, etc.
	const localeMatch = currentPath.match(localePattern)

	// Get the path without locale
	const pathWithoutLocale = localeMatch
		? localeMatch[2] || '/' // If there's a path after locale, use it, otherwise '/'
		: currentPath

	// Check if current route matches the nav item
	const isActive = href === '/' ? pathWithoutLocale === '/' : pathWithoutLocale.startsWith(href)

	return (
		<Link
			className={`hover:text-primary hover:underline capitalize ${
				isActive ? 'text-primary font-seravek_bold' : ''
			}`}
			to={`/${i18n.language}${href}`}
		>
			{t(`nav.links.${label}`)}
		</Link>
	)
}

export default NavItem
