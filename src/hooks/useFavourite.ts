
import { useLocalStorage } from 'usehooks-ts'


export const useFavourite = () => {

	const [favourites, setFavourites] = useLocalStorage<number[]>('favourite', [])

	const toggleFavourites = (id: number) => {
		if (favourites.includes(id)) {
			setFavourites(favourites.filter((f: number) => f !== id));
		} else {
			setFavourites([...favourites, id])
		}
	}
	return { toggleFavourites, favourites }
}