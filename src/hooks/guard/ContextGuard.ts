import { LanguageContext } from '@/contexts/LanguageContext'
import { useContext } from 'react'

export const useIntlContext = () => {
	const context = useContext(LanguageContext)
	if (!context) {
		throw new Error('useiContext must be used within a AuthProvider')
	}
	return context
}
