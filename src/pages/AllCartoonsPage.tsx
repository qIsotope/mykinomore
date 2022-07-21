import { useAppSelector } from "../hooks/reduxHooks"
import { useGetCartoonsQuery } from "../redux/services/kinopoisk.services"
import { Catalog } from "../components/Catalog/Catalog"



export const AllCartoonsPage = () => {
	const filters = useAppSelector(state => state.filter)
	const page = useAppSelector(state => state.pagination.page)

	const { data, isFetching, isLoading } = useGetCartoonsQuery({ filters, page })


	return (
		<Catalog data={data} isFetching={isFetching} isLoading={isLoading} />
	)
}
