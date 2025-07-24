import '@rasenganjs/image/css'
import '@/styles/index.css'
import 'leaflet/dist/leaflet.css'

import { type AppProps } from 'rasengan'
import AppRouter from '@/app/app.router'
import { I18nextProvider } from 'react-i18next'
import i18n from './i18n/i18n'
import { LanguageProvider } from './providers/LanguageProvider'

export default function App({ Component, children }: AppProps) {
	return (
		<I18nextProvider i18n={i18n}>
			<LanguageProvider>
				<Component router={AppRouter}>{children}</Component>
			</LanguageProvider>
		</I18nextProvider>
	)
}
