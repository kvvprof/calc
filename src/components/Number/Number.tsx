import React, { useState } from 'react'
import { FC } from 'react'
import { useAppDispatch, useClickEffect } from '../../app/hooks'
import { addNumber } from '../../features/calcSlice'
import './style.css'

type Number = {
	number: string
}

const Number: FC<Number> = ({ number }) => {
	const dispatch = useAppDispatch()
	const [isClicked, clickEffect] = useClickEffect()

	const numberButtonHandler = () => {
		dispatch(addNumber(number))
		clickEffect()
	}

	return (
		<div
			className={`calc-button number ${isClicked ? 'calc-button--clicked' : ''}`}
			onClick={numberButtonHandler}>
			<p className="number__value">{number}</p>
		</div>
	)
}

export default Number
