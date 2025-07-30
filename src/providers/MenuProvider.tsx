import MenuContext from '@/contexts/MenuContext'
import React from 'react'

const navlinks: {
	label: string
	href: string
}[] = [
	{
		label: 'services',
		href: '#talent',
	},
	{
		label: 'portfolio',
		href: '/portfolio',
	},
	{
		label: 'products',
		href: '/products',
	},
	{
		label: 'about',
		href: '/about',
	},
]

export default function MenuProvider({ children }: { children: React.ReactNode }) {
	const [isOpened, setIsOpened] = React.useState(false)

	return (
		<MenuContext.Provider value={{ isOpened, setIsOpened, navlinks }}>
			{children}
		</MenuContext.Provider>
	)
}
