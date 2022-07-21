import { useAppSelector } from '../hooks/reduxHooks'
import { useFavourite } from '../hooks/useFavourite'
import { useGetFavouritesQuery } from '../redux/services/kinopoisk.services'
import { Catalog } from '../components/Catalog/Catalog'


export const FavouritesPage = () => {
	const { favourites } = useFavourite()
	const query = favourites.map(i => `search=${i}&field=id`).join('&')
	const filters = useAppSelector(state => state.filter)
	const page = useAppSelector(state => state.pagination.page)

	if(favourites.length === 0){
		
	}
	const { data, isFetching, isLoading } = useGetFavouritesQuery({ query, filters, page })


	return (
		<Catalog data={data} isFetching={isFetching} isLoading={isLoading} />
	)

}