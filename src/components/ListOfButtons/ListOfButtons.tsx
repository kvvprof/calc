import React from 'react'
import Number from '../Number/Number'
import Operation from '../Operation/Operation'
import './style.css'

const ListOfButtons = () => {
	return (
		<section className='list-of-buttons'>
			<Operation operation='clear' design='clear' />
			<Operation operation='backspace' design='backspace' />
			<Operation operation='+/-' design='plus-minus' />
			<Operation operation='/' design='divide' />
			<Number number='7' />
			<Number number='8' />
			<Number number='9' />
			<Operation operation='*' design='multiply' />
			<Number number='4' />
			<Number number='5' />
			<Number number='6' />
			<Operation operation='-' design='minus' />
			<Number number='1' />
			<Number number='2' />
			<Number number='3' />
			<Operation operation='+' design='plus' />
			<Number number='0' />
			<Number number='.' />
			<Operation operation='=' design='result' />
		</section>
	)
}

export default ListOfButtons
