import React, { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import Select from 'react-select'
import SelectLanguage from './components/SelectLanguage'
import { IColor } from './models/color'

const App: React.FC = () => {
	const { t, i18n } = useTranslation()

	useEffect(() => {
		i18n.changeLanguage('en')
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	const colorsOption: IColor[] = [
		{
			value: 'blue',
			label: t('blue'),
		},
		{
			value: 'red',
			label: t('red'),
		},
		{
			value: 'white',
			label: t('white'),
		},
		{
			value: 'black',
			label: t('black'),
		},
		{
			value: 'yellow',
			label: t('yellow'),
		},
		{
			value: 'pink',
			label: t('pink'),
		},
		{
			value: 'brown',
			label: t('brown'),
		},
	]

	return (
		<div>
			<Select
				options={colorsOption}
				isMulti
				closeMenuOnSelect={false}
				styles={{
					container: base => ({
						...base,
						width: '20em',
					}),
				}}
				placeholder={t('select')}
			/>
			<SelectLanguage />
		</div>
	)
}

export default App
