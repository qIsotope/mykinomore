import { useEffect, useState } from 'react'
import { useGetSeriesForYearQuery } from '../../../redux/services/kinopoisk.services'
import { Doc } from '../../../types/IFilms'
import { MainFilmsButton } from '../MainButton/MainFilmsButton'
import { MainFilmsHeader } from '../MainHeader/MainFilmsHeader'
import { MainFilmsListOfSeries } from './MainFilmsListOfSeries/MainFilmsListOfSeries'

export const MainSeries = () => {
	const [fetching, setFetching] = useState(false)
	const [hide, setHide] = useState(false)
	const [page, setPage] = useState(1)
	const [movies, setMovies] = useState<Doc[]>([])
	const { data, status } = useGetSeriesForYearQuery({ limit: 10, page: page })
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
			<MainFilmsListOfSeries movies={movies} />
			<MainFilmsButton page={page} setPage={setPage} fetching={fetching} hide={hide} />
		</>

	)
}
