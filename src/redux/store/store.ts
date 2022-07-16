import { configureStore } from '@reduxjs/toolkit'
import { kinopoiskApi } from '../services/kinopoisk.services'
import filter from '../slices/filter'

export const store = configureStore({
	reducer: {
		filter,
		[kinopoiskApi.reducerPath]: kinopoiskApi.reducer,
	},

	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(kinopoiskApi.middleware),
})


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch