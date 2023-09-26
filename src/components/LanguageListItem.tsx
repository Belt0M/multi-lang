import React, { Dispatch, SetStateAction } from 'react'
import { useTranslation } from 'react-i18next'
import { ILanguage } from '../models/language'

interface ILanguageListItemProps {
	setIsDropped: Dispatch<SetStateAction<boolean>>
	setLanguage: Dispatch<SetStateAction<ILanguage>>
	lang: ILanguage
}

const LanguageListItem: React.FC<ILanguageListItemProps> = ({
	setIsDropped,
	setLanguage,
	lang,
}) => {
	const { t, i18n } = useTranslation()

	const handleLanguageChange = (language: ILanguage) => {
		i18n.changeLanguage(language.name)
		setLanguage(language)
	}

	return (
		<button
			key={lang.name}
			style={{
				listStyle: 'none',
				padding: '.5rem',
				background: '#00000050',
				cursor: 'pointer',
				margin: 2,
			}}
			onClick={() => {
				handleLanguageChange(lang)
				setIsDropped(false)
			}}
			disabled={i18n.resolvedLanguage === lang.name}
		>
			{t(lang.value)}
		</button>
	)
}

export default LanguageListItem
