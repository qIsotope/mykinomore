import { createSlice, PayloadAction } from '@reduxjs/toolkit'



const initialState: { page: number } = {
	page: 1
}

export const paginationSlice = createSlice({
	name: 'pagination',
	initialState,
	reducers: {
		nextPage: (state) => {
			state.page = state.page + 1
		},
		prevPage: (state) => {
			if (state.page === 1) {
				state.page = 1
			} else {
				state.page = state.page - 1
			}
		},
		firstPage: (state) => {
			state.page = 1
		},
		lastPage: (state, action: PayloadAction<number | undefined>) => {
			if (action.payload) {
				state.page = action.payload
			}
		}
	},
})

export const { nextPage, prevPage, firstPage, lastPage } = paginationSlice.actions

export default paginationSlice.reducer