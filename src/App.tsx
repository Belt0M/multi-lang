import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import Select from 'react-select'

interface IColor {
	value: string
	label: string
}

interface ILanguage {
	name: string
	value: string
}

function App() {
	const { t, i18n } = useTranslation()

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

	const lngs: ILanguage[] = [
		{ name: 'en', value: 'English' },
		{ name: 'pl', value: 'Polish' },
	]

	const [isDropped, setIsDropped] = useState<boolean>(false)
	const [language, setLanguage] = useState<ILanguage>(lngs[0])

	useEffect(() => {
		i18n.changeLanguage(language.name)
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [language])

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
			/>
			<div>
				<button onClick={() => setIsDropped(!isDropped)}>
					{language.value}
				</button>
				{isDropped && (
					<ul style={{ position: 'fixed', padding: '0rem', margin: 0 }}>
						{lngs.map(el => (
							<li
								key={el.name}
								style={{
									listStyle: 'none',
									padding: '.5rem',
									background: '#00000050',
									cursor: 'pointer',
									margin: 2,
								}}
								onClick={() => {
									setLanguage(el)
									setIsDropped(false)
								}}
							>
								{el.value}
							</li>
						))}
					</ul>
				)}
			</div>
		</div>
	)
}

export default App
