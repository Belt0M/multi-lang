import Select from 'react-select'

function App() {
	const colorsOption = [
		{
			value: 'blue',
			label: 'Blue',
		},
		{
			value: 'red',
			label: 'Red',
		},
		{
			value: 'white',
			label: 'White',
		},
		{
			value: 'black',
			label: 'Black',
		},
		{
			value: 'yellow',
			label: 'Yellow',
		},
		{
			value: 'pink',
			label: 'Pink',
		},
		{
			value: 'brown',
			label: 'Brown',
		},
	]

	return (
		<Select
			options={colorsOption}
			isMulti
			defaultValue={[colorsOption[0]]}
			closeMenuOnSelect={false}
			styles={{
				container: base => ({
					...base,
					width: '20em',
				}),
			}}
		/>
	)
}

export default App
