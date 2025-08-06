import { PageComponent } from 'rasengan'

const LegalNotice: PageComponent = () => {
	return (
		<main className="flex flex-col gap-4 sm:gap-8 px-4 sm:px-8 md:px-[80px] lg:px-[120px] pt-[150px] relative"></main>
	)
}

LegalNotice.path = '/:locale?/legal-notice'
LegalNotice.metadata = {
	title: 'Legal notice',
	description: 'Legal notice page',
}

export default LegalNotice
