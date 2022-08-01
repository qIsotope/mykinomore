import { useLocation, useParams } from 'react-router-dom'
import { Catalog } from '../components/Catalog/Catalog'
import { useAppSelector } from '../hooks/reduxHooks'
import { useGetFilmsBySearchQuery } from '../redux/services/kinopoisk.services'

export const SearchedFilmsPage = () => {
	const params = useParams()
	const filters = useAppSelector(state => state.filter)
	const page = useAppSelector(state => state.pagination.page)

	const { data, isFetching, isLoading } = useGetFilmsBySearchQuery({ query: params.query!, filters, page })



	return (
		<Catalog data={data} isFetching={isFetching} isLoading={isLoading} />
	)
}
