import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { IFilm } from '../../types/IFilms';
import { getCurrentYear } from '../../utils/getCurrentYear';
import { filterState } from '../slices/filter';
export const API_URL = 'https://api.kinopoisk.dev';
export const API_KEY = '2WRJZQN-S2A47F3-MNWTKFF-RE3AQ7M'
const url = '/movie?field=rating.kp&search=1-10&field=year&search=${getCurrentYear()}&field=typeNumber&search=1&limit=${limit}&page=${page}&&sortField=year&sortType=1&sortField=votes.imdb&sortType=-1&token=${API_KEY}'
// /movie?${filters.genre.value === '' ? '' : `search[]=${filters.genre.value}&field[]=genres.name`}&search[]=${filters.year[0] + '-' + filters.year[1]}&field[]=year&search[]=${filters.rating[0] + '-' + filters.rating[1]}&field=rating.kp&search=!null&field=name&search=1&field=typeNumber&search=!null&field=votes.kp&sortField=year&sortType=${filters.sort}&limit=10&page=1&token=${API_KEY}

interface IGetForYear {
	limit: number;
	page: number;
}
interface IGetFilms {
	filters: filterState;
	page: number;
}


export const kinopoiskApi = createApi({
	reducerPath: 'kinomoreApi',
	baseQuery: fetchBaseQuery({ baseUrl: API_URL }),
	endpoints: (builder) => ({
		getFilmsForYear: builder.query<IFilm, IGetForYear>({
			query: ({ limit = 10, page = 1 }) => ``,
		}),
		getSeriesForYear: builder.query<IFilm, IGetForYear>({
			query: ({ limit = 10, page = 1 }) => ``,
		}),
		getFilms: builder.query<IFilm, filterState>({
			query: (filters) =>
				`/movie?${filters.genre.value === '' ? '' : `search[]=${filters.genre.value}&field[]=genres.name`}&search[]=${filters.year[0] + '-' + filters.year[1]}&field[]=year&search[]=${filters.rating[0] + '-' + filters.rating[1]}&field=rating.kp&search=!null&field=name&search=1&field=typeNumber&search=!null&field=votes.kp&sortField=year&sortType=${filters.sort}&limit=10&page=1&token=${API_KEY}`

		}),

	}),
})

export const { useGetFilmsForYearQuery, useGetSeriesForYearQuery, useGetFilmsQuery, } = kinopoiskApi