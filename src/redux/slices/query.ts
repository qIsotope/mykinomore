import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const initialState: { value: string, query: string } = {
	value: '1',
	query: ''
}

export const querySlice = createSlice({
	name: 'query',
	initialState,
	reducers: {
		setActive: (state, action: PayloadAction<string>) => {
			state.value = action.payload
		},
		setQuery: (state, action: PayloadAction<string>) => {
			state.query = action.payload
		}
	},
})

export const { setActive, setQuery } = querySlice.actions

export default querySlice.reducer