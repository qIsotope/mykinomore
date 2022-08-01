
// import { filterState } from './../slices/filter';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Doc, IFilm } from '../../types/IFilms';
import { IMovie } from '../../types/IFilmsById';
import { IPerson } from '../../types/IPerson';
import { getCurrentYear } from '../../utils/getCurrentYear';
import { filterState } from '../slices/filter';
export const API_URL = 'https://api.kinopoisk.dev';
export const API_KEY = 'RAGDFMM-MN8MP9S-MH96EDA-9FBPB8V'

interface IgetReviewsById {
	id: string | undefined;
	limit: number;
}
interface IgetFilmsById {
	query: string
	limit: number
}

interface IgetFilmsByQuery {
	query: string
	type: string
	limit: number
}

export interface IReview {
	author: string;
	date: Date;
	id: number;
	movieId: number;
	review: string;
	reviewDislikes: number;
	reviewLikes: number;
	title: string;
	type: 'Позитивный' | 'Нейтральный' | 'Негативный';
	updatedAt: Date;
	userRating: number;
}

export interface IReviews {
	type: string;
	docs: IReview[];
	total: number;
	limit: number;
	page: number;
	pages: number;
}

interface IGetForYear {
	limit: number;
	page: number;
}
interface IGetFavourites {
	filters: filterState;
	page: number;
	query: string
}

export interface IGetAllItems {
	filters: filterState;
	page: number;
}

export const kinopoiskApi = createApi({
	reducerPath: 'kinomoreApi',
	baseQuery: fetchBaseQuery({ baseUrl: API_URL }),
	endpoints: (builder) => ({
		getFilmsForYear: builder.query<IFilm, IGetForYear>({
			query: ({ limit = 10, page = 1 }) => `/movie?field=rating.kp&search=1-10&field=year&search=${getCurrentYear()}&field=typeNumber&search=1&limit=${limit}&page=${page}&&sortField=year&sortType=1&sortField=votes.imdb&sortType=-1&token=${API_KEY}`,
		}),
		getSeriesForYear: builder.query<IFilm, IGetForYear>({
			query: ({ limit = 10, page = 1 }) => `/movie?field=rating.kp&search=1-10&field=year&search=${getCurrentYear()}&field=typeNumber&search=2&limit=${limit}&page=${page}&&sortField=year&sortType=1&sortField=votes.imdb&sortType=-1&token=${API_KEY}`,
		}),
		getFilms: builder.query<IFilm, IGetAllItems>({
			query: ({ filters, page }) =>
				`/movie?${filters.genre.value === '' ? '' : `search[]=${filters.genre.value}&field[]=genres.name`}&search[]=${filters.year[0] + '-' + filters.year[1]}&field[]=year&search[]=${filters.rating[0] + '-' + filters.rating[1]}&field=rating.kp&search=!null&field=name&search=1&field=typeNumber&search=!null&field=votes.kp&sortField=year&sortType=${filters.sort}&limit=10&page=${page}&token=${API_KEY}`
		}),
		getSeries: builder.query<IFilm, IGetAllItems>({
			query: ({ filters, page }) =>
				`/movie?${filters.genre.value === '' ? '' : `search[]=${filters.genre.value}&field[]=genres.name`}&search[]=${filters.year[0] + '-' + filters.year[1]}&field[]=year&search[]=${filters.rating[0] + '-' + filters.rating[1]}&field=rating.kp&search=!null&field=name&search=2&field=typeNumber&search=!null&field=votes.kp&sortField=year&sortType=${filters.sort}&limit=10&page=${page}&token=${API_KEY}`
		}),
		getCartoons: builder.query<IFilm, IGetAllItems>({
			query: ({ filters, page }) =>
				`/movie?${filters.genre.value === '' ? '' : `search[]=${filters.genre.value}&field[]=genres.name`}&search[]=${filters.year[0] + '-' + filters.year[1]}&field[]=year&search[]=${filters.rating[0] + '-' + filters.rating[1]}&field=rating.kp&search=!null&field=name&search=3&field=typeNumber&search=!null&field=votes.kp&sortField=year&sortType=${filters.sort}&limit=10&page=${page}&token=${API_KEY}`
		}),
		getFavourites: builder.query<IFilm, IGetFavourites>({
			query: ({ query, filters, page }) =>
				`/movie?${filters.genre.value === '' ? '' : `search[]=${filters.genre.value}&field[]=genres.name`}&search[]=${filters.year[0] + '-' + filters.year[1]}&field[]=year&search[]=${filters.rating[0] + '-' + filters.rating[1]}&field=rating.kp&${query}&sortField=year&sortType=${filters.sort}&limit=10&page=${page}&token=${API_KEY}`
		}),
		getFilmForId: builder.query<IMovie, number>({
			query: (id) =>
				`/movie?search=${id}&field=id&token=${API_KEY}`
		}),
		getReviewsById: builder.query<IReviews, IgetReviewsById>({
			query: ({ id, limit }) =>
				`/review?search=${id}&field=movieId&limit=${limit}&token=${API_KEY}`
		}),
		getPersonById: builder.query<IPerson, number>({
			query: (id) =>
				`/person?search=${id}&field=id&token=${API_KEY}`
		}),
		getFilmsById: builder.query<IFilm, IgetFilmsById>({
			query: ({ query, limit }) => `/movie?${query}&limit=${limit}&token=${API_KEY}`
		}),
		getFilmsByQuery: builder.query<Doc[], IgetFilmsByQuery>({
			query: ({ query, type, limit }) => `/movie?search=${query}&field=name&limit=${limit}&sortField=year&sortType=-1&field=typeNumber&search=${type}&isStrict=false&token=${API_KEY}`,
			transformResponse: (response: IFilm) => {
				const filter = response.docs!.filter((r) => r.year <= getCurrentYear())
				return filter
			}
		}),

		getFilmsBySearch: builder.query<IFilm, IGetFavourites>({
			query: ({ query, filters, page }) =>
				`/movie?&search=${query}&field=name&search=${filters.rating[0] + '-' + filters.rating[1]}&field=rating.kp&search[]=${filters.genre.value === '' ? '' : `${filters.genre.value}&field[]=genres.name`}&search=${filters.year[0] + '-' + filters.year[1]}&field=year&sortField=year&sortType=${filters.sort}&page=${page}&isStrict=false&token=RAGDFMM-MN8MP9S-MH96EDA-9FBPB8V`
		}),
	}),
})


export const { useGetFilmsForYearQuery, useGetSeriesForYearQuery, useGetFilmsQuery, useGetSeriesQuery, useGetCartoonsQuery, useGetFavouritesQuery, useGetFilmForIdQuery, useGetReviewsByIdQuery, useGetPersonByIdQuery, useGetFilmsByIdQuery, useGetFilmsByQueryQuery, useLazyGetFilmsByQueryQuery, useGetFilmsBySearchQuery } = kinopoiskApi