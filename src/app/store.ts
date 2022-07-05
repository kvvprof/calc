import { configureStore } from '@reduxjs/toolkit'

import calcSlice from '../features/calcSlice'
import themeSlice from '../features/themeSlice'

export const store = configureStore({
	reducer: {
		calcSlice,
		themeSlice,
	},
})

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
