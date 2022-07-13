import { FC, useEffect, useState } from 'react'
import { useGetFilmsForYearQuery } from '../../redux/services/kinopoisk.services'
import { Doc } from '../../types/IFilms'
import { MainFilmsButton } from '../MainButton/MainFilmsButton'
import { MainFilmsHeader } from '../MainHeader/MainFilmsHeader'
import { MainFilmsListOfFilms } from './MainFilmsListOfFilms/MainFilmsListOfFilms'




export const MainFilms = () => {
	const [movies, setMovies] = useState<Doc[]>([])
	const [page, setPage] = useState(1)
	const [fetching, setFetching] = useState(false)
	const [hide, setHide] = useState(false)

	const { data, status } = useGetFilmsForYearQuery({ limit: 10, page: page })

	useEffect(() => {
		status === 'pending' ? setFetching(true) : setFetching(false)
	}, [status])


	useEffect(() => {
		data?.docs && setMovies([...movies, ...data?.docs])
		if (data?.pages === data?.page && data?.pages) {
			setHide(true)
		}
	}, [data])


	return (
		<>
			<MainFilmsHeader setMovies={setMovies} />
			<MainFilmsListOfFilms movies={movies} />
			<MainFilmsButton setPage={setPage} page={page} fetching={fetching} hide={hide} />
		</>
	)
}
