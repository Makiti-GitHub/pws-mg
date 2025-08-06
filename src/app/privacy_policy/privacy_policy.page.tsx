import { PageComponent } from 'rasengan'

const PrivacyPolicy: PageComponent = () => {
	return (
		<main className="flex flex-col gap-4 sm:gap-8 px-4 sm:px-8 md:px-[80px] lg:px-[120px] pt-[150px] relative"></main>
	)
}

PrivacyPolicy.path = '/:locale?/privacy-policy'
PrivacyPolicy.metadata = {
	title: 'Privacy policy',
	description: 'Privacy policy page',
}

export default PrivacyPolicy
