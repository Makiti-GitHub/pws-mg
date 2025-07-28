// Images
import { ReactNode } from 'react'
import enIcon from '../assets/icons/flag_en.png'
import frIcon from '../assets/icons/flag_fr.png'
import deIcon from '../assets/icons/flag_de.png'
import { useTranslation } from 'react-i18next'
import { LanguageContext } from '@/contexts/LanguageContext'

type LanguageProviderProps = {
	children: ReactNode
}

export const LanguageProvider = ({ children }: LanguageProviderProps) => {
	const { t: translator, i18n } = useTranslation()

	const languages = {
		en: { nativeName: translator('language.en') },
		fr: { nativeName: translator('language.fr') },
		de: { nativeName: translator('language.de') },
	}

	/**
	 * Function to provide the language flag icon corresponding to the provided language code
	 * @param languageCode The provided language code
	 * @returns {string} The corresponding flag icon
	 */
	const getLanguageIcon = (languageCode: string): string => {
		switch (languageCode) {
			case 'en':
				return enIcon
			case 'fr':
				return frIcon
			case 'de':
				return deIcon
			default:
				return enIcon
		}
	}

	const setLanguage = (lng: string) => {
		i18n.changeLanguage(lng)
	}

	const value = {
		langs: languages,
		getLangIcon: getLanguageIcon,
		changeLanguage: setLanguage,
	}

	return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}
