import i18next from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import Backend from 'i18next-http-backend'
import { initReactI18next } from 'react-i18next'

i18next
	.use(initReactI18next)
	.use(Backend)
	.use(LanguageDetector)
	.init({
		debug: true,
		fallbackLng: 'en',
		resources: {
			en: {
				translation: {
					blue: 'Blue',
					red: 'Red',
					white: 'White',
					black: 'Black',
					yellow: 'Yellow',
					pink: 'Pink',
					brown: 'Brown',
					english: 'English',
					polish: 'Polish',
					select: 'Select...',
				},
			},
			pl: {
				translation: {
					blue: 'Niebieski',
					red: 'Czerwony',
					white: 'Biały',
					black: 'Czarny',
					yellow: 'Żółty',
					pink: 'Różowy',
					brown: 'Brązowy',
					english: 'Angielski',
					polish: 'Polski',
					select: 'Wybierz...',
				},
			},
		},
	})
