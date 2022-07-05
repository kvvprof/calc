import { createSlice } from '@reduxjs/toolkit'

type ThemeState = {
  theme: string;
};

const initialState: ThemeState = {
	theme: localStorage.getItem('theme') || 'light',
}

const themeSlice = createSlice({
	name: 'theme',
	initialState,
	reducers: {
		changeTheme: (state) => {
			state.theme === 'light'
				? (state.theme = 'dark')
				: (state.theme = 'light')
			localStorage.setItem('theme', state.theme)
		},
	},
})

export const { changeTheme } = themeSlice.actions
export default themeSlice.reducer
