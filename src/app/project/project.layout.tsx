import React from 'react'

import { LayoutComponent, Outlet } from 'rasengan'
import Footer from '@/components/organisms/Footer'
import { ScrollRestoration } from '@/components/molecules/ScrollRestoration'

const ProjectLayout: LayoutComponent = () => {
	return (
		<React.Fragment>
			<main className={`relative`}>
				<Outlet />
				<ScrollRestoration />
				<Footer />
			</main>
		</React.Fragment>
	)
}

ProjectLayout.path = '/:locale?/portfolio'

export default ProjectLayout
