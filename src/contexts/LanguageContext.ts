import React from 'react'

export interface LngContextType {
	langs?: Record<string, Language>
	getLangIcon: (languageCode: string) => string
	changeLanguage: (languageCode: string) => void
}

interface Language {
	nativeName: string
}

export const LanguageContext = React.createContext<LngContextType | undefined>(undefined)
