import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { numberWithSpaces } from '../app/helpers'

type CalcState = {
	currentValue: string
	expression: string
	displayedValue: string
	newExpression: boolean
	historyOfOperation: string[]
}

const initialState: CalcState = {
	currentValue: '',
	displayedValue: '',
	expression: '',
	newExpression: false,
	historyOfOperation: [],
}

const calcSlice = createSlice({
	name: 'calc',
	initialState,
	reducers: {
		addNumber: (state, action: PayloadAction<string>) => {
			if (state.newExpression === true) {
				state.currentValue = state.expression = state.displayedValue = ''
				state.newExpression = false
			}

			state.currentValue = state.displayedValue = state.currentValue.concat(action.payload)
		},
		addOperation: (state, action: PayloadAction<string>) => {
			if (state.newExpression === true) {
				state.expression = ''
				state.newExpression = false
			}

			if (action.payload === '+/-' && state.currentValue !== '') {
				if (parseFloat(state.currentValue) > 0) {
					state.displayedValue = state.currentValue = '-' + state.currentValue
				} else {
					state.displayedValue = state.currentValue = state.currentValue.toString().slice(1)
				}
			}

			if (action.payload === 'backspace') {
				state.displayedValue = state.currentValue = state.currentValue.toString().slice(0, -1)
			}

			const updateExpression = () => {
				if (
					action.payload !== '+/-' &&
					action.payload !== 'backspace' &&
					state.currentValue !== '-'
				) {
					state.expression = state.expression.concat(state.currentValue).concat(action.payload)
					state.displayedValue = state.currentValue
					state.currentValue = ''
				}
			}

			if (
				action.payload === '-' ||
				action.payload === '+' ||
				action.payload === '*' ||
				action.payload === '/'
			) {
				if (
					(state.expression.slice(-1) === '-' ||
						state.expression.slice(-1) === '+' ||
						state.expression.slice(-1) === '*' ||
						state.expression.slice(-1) === '/') &&
					state.currentValue === ''
				) {
					state.expression = state.expression.slice(0, -1).concat(action.payload)
				} else {
					updateExpression()
				}
			} else {
				updateExpression()
			}
		},
		calculate: state => {
			if (state.newExpression === true || state.currentValue === '' || state.expression === '') {
				state.currentValue = state.expression = state.displayedValue = ''
			} else {
				state.expression = state.expression
					.concat(state.currentValue)
					.replaceAll('--', '+')
					.replaceAll('+-', '-')

				const parse = (str: string) => {
					return Function(`'use strict'; return (${str})`)()
				}

				state.displayedValue = state.currentValue = parse(state.expression)

				if (state.historyOfOperation.length > 2) {
					state.historyOfOperation.shift()
				}

				state.historyOfOperation = [
					...state.historyOfOperation,
					state.expression + '=' + numberWithSpaces(parse(state.expression)),
				]

				state.newExpression = true
			}
		},
		clear: state => {
			state.currentValue = state.expression = state.displayedValue = ''
			state.newExpression = false
		},
	},
})

export const { addNumber, addOperation, calculate, clear } = calcSlice.actions
export default calcSlice.reducer
