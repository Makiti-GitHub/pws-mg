import { RouterComponent, defineRouter } from 'rasengan'
import Home from '@/app/home.page'
import AppLayout from '@/app/app.layout'
import Portfolio from './portfolio/portfolio.page'
import Products from './products/products.page'

class AppRouter extends RouterComponent {}

export default defineRouter({
	imports: [],
	layout: AppLayout,
	pages: [Home, Portfolio, Products],
})(AppRouter)
