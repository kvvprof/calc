import { useState } from 'react'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'

import type { RootState, AppDispatch } from './store'

// redux
export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

// the effect of pressing the button
export const useClickEffect = (
	initialState: boolean = false
): [boolean, () => void] => {
	const [isClicked, setIsClicked] = useState<boolean>(initialState)

	const clickEffect = () => {
		setIsClicked(true)
		setTimeout(() => {
			setIsClicked(false)
		}, 100)
	}

	return [isClicked, clickEffect]
}
