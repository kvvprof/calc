import React from 'react'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { changeTheme } from '../../features/themeSlice'
import './style.css'

const ThemeSwitch = () => {
	const theme = useAppSelector(state => state.themeSlice.theme)
	const dispatch = useAppDispatch()

	return (
		<section className="theme-switch">
			<input
				className="theme-switch__toggle"
				type="checkbox"
				checked={theme === 'dark' ? true : false}
				onChange={() => dispatch(changeTheme())}
			/>
			<p className="theme-switch__title">Switch to {theme === 'light' ? 'dark' : 'light'} theme</p>
		</section>
	)
}

export default ThemeSwitch
