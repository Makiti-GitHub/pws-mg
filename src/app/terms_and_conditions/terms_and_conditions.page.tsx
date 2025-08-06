import { PageComponent } from 'rasengan'

const TermsAndConditions: PageComponent = () => {
	return (
		<main className="flex flex-col gap-4 sm:gap-8 px-4 sm:px-8 md:px-[80px] lg:px-[120px] pt-[150px] relative"></main>
	)
}

TermsAndConditions.path = '/:locale?/terms-and-conditions'
TermsAndConditions.metadata = {
	title: 'Terms and conditions',
	description: 'Terms and conditions page',
}

export default TermsAndConditions
