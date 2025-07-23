import React from 'react'
import { Outlet, LayoutComponent } from 'rasengan'
import Footer from '@/components/organisms/Footer'
import NavBar from '@/components/organisms/Navbar'

const AppLayout: LayoutComponent = () => {
	return (
		<React.Fragment>
			{/* === Navigation  === */}
			<NavBar />

			<Outlet />

			<Footer />
		</React.Fragment>
	)
}

AppLayout.path = '/'

export default AppLayout
