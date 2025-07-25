// src/i18n.ts
import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import Backend from 'i18next-http-backend'
import en from '../locales/en/translation.json'
import de from '../locales/de/translation.json'
import fr from '../locales/fr/translation.json'
// import fr from '../locales/de/translation.json';

const resources = {
	en: {
		translation: en,
	},
	fr: {
		translation: fr,
	},
	de: {
		translation: de,
	},
}

i18n.use(Backend)
	.use(LanguageDetector) // Detect user language
	.use(initReactI18next) // Pass the i18n instance to react-i18next.
	.init({
		fallbackLng: 'en', // Default Fallback language if translation is missing
		debug: true,
		interpolation: {
			escapeValue: false, // React already escapes values
		},
		resources,
		detection: {
			order: ['path', 'cookie', 'localStorage', 'navigator'],
			caches: ['cookie'],
		},
	})

export default i18n
