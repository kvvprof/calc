import React, { FC } from 'react'
import { useAppDispatch, useClickEffect } from '../../app/hooks'
import { addOperation, clear, calculate } from '../../features/calcSlice'
import './style.css'

type Operation = {
	operation: string
	style: string
}

const Operation: FC<Operation> = ({ operation, style }) => {
	const dispatch = useAppDispatch()
	const [isClicked, clickEffect] = useClickEffect()

	const operationHandler = () => {
		clickEffect()

		switch (operation) {
			case 'clear':
				dispatch(clear())
				break
			case '=':
				dispatch(calculate())
				break
			default:
				dispatch(addOperation(operation))
				break
		}
	}

	const setOperationName = () =>
		operation === 'clear' ||
		operation === '+/-' ||
		operation === 'backspace' ||
		operation === '/' ||
		operation === '*' ||
		operation === '-' ||
		operation === '+' ||
		operation === '='
			? ''
			: operation

	return (
		<div
			className={`calc-button ${style} ${isClicked ? 'calc-button--clicked' : ''}`}
			onClick={operationHandler}>
			<p className={`${style}__name`}>{setOperationName()}</p>
		</div>
	)
}

export default Operation
