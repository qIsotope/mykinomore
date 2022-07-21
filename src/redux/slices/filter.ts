import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { getCurrentYear } from '../../utils/getCurrentYear'
import { genres } from '../../data/genres'

export interface IGenre {
	label: string,
	value: string
}

export interface filterState {
	rating: number[]
	year: number[]
	genre: IGenre
	sort: string
	resetting?: boolean
}

const initialState: filterState = {
	rating: [1, 10],
	year: [1887, getCurrentYear()],
	genre: genres[0],
	sort: '-1',
	resetting: false,

}

export const filterSlice = createSlice({
	name: 'filter',
	initialState,
	reducers: {
		getFilterObject: (state, action: PayloadAction<filterState>) => {
			state.rating = action.payload.rating
			state.year = action.payload.year
			state.genre = action.payload.genre
			state.sort = action.payload.sort
			state.resetting = false
		},
		resetFilters: (state) => {
			state.resetting = true
			state.rating = [1, 10]
			state.year = [1887, getCurrentYear()]
			state.genre = genres[0]
			state.sort = '-1'
		},

	},
})

export const { getFilterObject, resetFilters,  } = filterSlice.actions

export default filterSlice.reducer