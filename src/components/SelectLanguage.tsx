import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { ILanguage } from '../models/language'
import LanguageListItem from './LanguageListItem'

const SelectLanguage: React.FC = () => {
	const lngs: ILanguage[] = [
		{ name: 'en', value: 'english' },
		{ name: 'pl', value: 'polish' },
	]

	const [isDropped, setIsDropped] = useState<boolean>(false)
	const [language, setLanguage] = useState<ILanguage>(lngs[0])

	const { t } = useTranslation()

	return (
		<div>
			<button
				onClick={() => setIsDropped(!isDropped)}
				style={{ width: '6rem', height: '3rem', marginTop: '.5rem' }}
			>
				{t(language.value)}
			</button>
			{isDropped && (
				<div
					style={{
						position: 'fixed',
						display: 'flex',
						flexDirection: 'column',
						width: '6rem',
					}}
				>
					{lngs.map(el => (
						<LanguageListItem
							setIsDropped={setIsDropped}
							setLanguage={setLanguage}
							lang={el}
							key={el.name}
						/>
					))}
				</div>
			)}
		</div>
	)
}

export default SelectLanguage
