import React from 'react'
import { useAppSelector } from '../../app/hooks'
import './style.css'

const HistoryOfOperation = () => {
	const history = useAppSelector(state => state.calcSlice.historyOfOperation)

	return (
		<section className="history-of-operation">
			{history.map((exp, index) => (
				<div className="history-of-operation__expression" key={index}>
					{exp}
				</div>
			))}
		</section>
	)
}

export default HistoryOfOperation
