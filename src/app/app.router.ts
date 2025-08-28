import { RouterComponent, defineRouter } from 'rasengan'
import Home from '@/app/home.page'
import AppLayout from '@/app/app.layout'
import Portfolio from './portfolio/portfolio.page'
import Products from './products/products.page'
import About from './about/about.page'
import Project from './project/project.page'
import TermsAndConditions from './terms_and_conditions/terms_and_conditions.page'
import PrivacyPolicy from './privacy_policy/privacy_policy.page'
import LegalNotice from './legal_notice/legal_notice.page'
import projectRouter from './project/project.router'

class AppRouter extends RouterComponent {}

export default defineRouter({
	imports: [projectRouter],
	layout: AppLayout,
	pages: [
		Home,
		Portfolio,
		Products,
		About,
		Project,
		TermsAndConditions,
		PrivacyPolicy,
		LegalNotice,
	],
})(AppRouter)
