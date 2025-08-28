import { RouterComponent, defineRouter } from 'rasengan'
import Project from './project.page'
import ProjectLayout from './project.layout'

class ProjectRouter extends RouterComponent {}

export default defineRouter({
	imports: [],
	layout: ProjectLayout,
	pages: [Project],
	useParentLayout: false,
})(ProjectRouter)
