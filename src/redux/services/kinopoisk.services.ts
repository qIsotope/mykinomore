import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { IFilm } from '../../types/IFilms';
import { getCurrentYear } from '../../utils/getCurrentYear';
export const API_URL = 'https://api.kinopoisk.dev';
export const API_KEY = '2WRJZQN-S2A47F3-MNWTKFF-RE3AQ7M'
const url = '/movie?field=rating.kp&search=1-10&field=year&search=${getCurrentYear()}&field=typeNumber&search=1&limit=${limit}&page=${page}&&sortField=year&sortType=1&sortField=votes.imdb&sortType=-1&token=${API_KEY}'

interface IGetForYear {
	limit: number;
	page: number;
}

export const kinopoiskApi = createApi({
	reducerPath: 'kinomoreApi',
	baseQuery: fetchBaseQuery({ baseUrl: API_URL }),
	endpoints: (builder) => ({
		getFilmsForYear: builder.query<IFilm, IGetForYear>({
			query: ({ limit = 1000, page = 1 }) => ``,
		}),
		getSeriesForYear: builder.query<IFilm, IGetForYear>({
			query: ({ limit = 10, page = 1 }) => ``,
		}),
	}),
})

export const { useGetFilmsForYearQuery, useGetSeriesForYearQuery } = kinopoiskApi