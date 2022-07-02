import React from 'react'
import Number from '../Number/Number'
import Operation from '../Operation/Operation'
import './style.css'

const ListOfButtons = () => {
	return (
		<section className="list-of-buttons">
			<Operation operation="clear" style="clear" />
			<Operation operation="backspace" style="backspace" />
			<Operation operation="+/-" style="plus-minus" />
			<Operation operation="/" style="divide" />
			<Number number="7" />
			<Number number="8" />
			<Number number="9" />
			<Operation operation="*" style="multiply" />
			<Number number="4" />
			<Number number="5" />
			<Number number="6" />
			<Operation operation="-" style="minus" />
			<Number number="1" />
			<Number number="2" />
			<Number number="3" />
			<Operation operation="+" style="plus" />
			<Number number="0" />
			<Number number="." />
			<Operation operation="=" style="result" />
		</section>
	)
}

export default ListOfButtons
