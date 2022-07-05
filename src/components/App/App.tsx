import React from 'react'

import { useAppSelector } from '../../app/hooks'
import HistoryOfOperation from '../HistoryOfOperation/HistoryOfOperation'
import ListOfButtons from '../ListOfButtons/ListOfButtons'
import ResultField from '../ResultField/ResultField'
import ThemeSwitch from '../ThemeSwitch/ThemeSwitch'
import './style.css'

const App = () => {
	const theme = useAppSelector((state) => state.themeSlice.theme)

	return (
		<div className={`wrapper wrapper--${theme}`}>
			<div className='container'>
				<HistoryOfOperation />
				<ResultField />
				<ThemeSwitch />
				<ListOfButtons />
			</div>
		</div>
	)
}

export default App
