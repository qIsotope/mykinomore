import { useAppSelector } from "../hooks/reduxHooks"
import { useGetFilmsQuery } from "../redux/services/kinopoisk.services"
import { Catalog } from "../components/Catalog/Catalog"



export const AllFilmsPage = () => {
	const filters = useAppSelector(state => state.filter)
	const page = useAppSelector(state => state.pagination.page)

	const { data, isFetching, isLoading } = useGetFilmsQuery({ filters, page })


	return (
		<Catalog data={data} isFetching={isFetching} isLoading={isLoading} />
	)
}
