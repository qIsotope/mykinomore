import { useAppSelector } from "../hooks/reduxHooks"
import { useGetSeriesQuery } from "../redux/services/kinopoisk.services"
import { Catalog } from "../components/Catalog/Catalog"


export const AllSeriesPage = () => {
	const filters = useAppSelector(state => state.filter)
	const page = useAppSelector(state => state.pagination.page)

	const { data, isFetching, isLoading } = useGetSeriesQuery({ filters, page })
	return (

		<Catalog data={data} isFetching={isFetching} isLoading={isLoading} />

	)

}
