import React from 'react'
import { Outlet, LayoutComponent } from 'rasengan'
import Footer from '@/components/organisms/Footer'
import NavBar from '@/components/organisms/Navbar'
import MobileNavigation from '@/components/organisms/navigation/MobileNavigation'
import useMouse from '@/hooks/useMouse'
import { useMenuContext } from '@/hooks/guard/ContextGuard'
import FloatingCursor from '@/components/molecules/cursors/FloatingCursor'

const AppLayout: LayoutComponent = () => {
	const { handleMouseLeave, handleMouseMove, cursorPosition, isHovering } = useMouse()

	const { isOpened } = useMenuContext()
	return (
		<React.Fragment>
			<main
				onMouseLeave={handleMouseLeave}
				onMouseMove={handleMouseMove}
				className={`relative ${isOpened ? 'max-h-screen overflow-hidden' : ''}`}
			>
				{/* === Navigation  === */}

				<MobileNavigation />
				<NavBar />

				<Outlet />

				<Footer />

				{isHovering && (
					<div
						className="absolute hidden top-0 left-0 size-full pointer-events-none z-50"
						style={{
							background: `radial-gradient(circle at ${cursorPosition.x}px ${cursorPosition.y}px, rgba(185, 253, 80, 0.5), transparent 10%)`,
						}}
					/>
				)}
			</main>
			<FloatingCursor />
		</React.Fragment>
	)
}

AppLayout.path = '/'

export default AppLayout
