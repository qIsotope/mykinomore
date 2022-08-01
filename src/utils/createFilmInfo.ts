import { IMovie } from "../types/IFilmsById"
import { convertTimestampToDate } from "./convertDate"




export const createFilmInfo = (obj: IMovie | undefined): { label: string, value: string | number }[] => {
	return [
		{ label: 'Страны', value: obj?.countries ? obj?.countries.map((i) => i.name).join(' ') : '—' },
		{ label: 'Жанр', value: obj?.genres ? obj?.genres.map((i) => i.name).join(' ') : '—' },
		{ label: 'Слоган', value: obj?.slogan ? obj?.slogan : '—' },
		{ label: 'Возраст', value: obj?.ageRating ? obj?.ageRating : '—' },
		{ label: 'Бюджет', value: obj?.budget?.value ? obj?.budget?.currency + ' ' + obj?.budget.value : '—' },
		{ label: 'Время', value: obj?.movieLength ? obj?.movieLength + ' мин' : '—' },
		{ label: 'Сборы в США', value: obj?.fees.usa ? '$ ' + obj?.fees.usa.value : '—' },
		{ label: 'Сборы в мире', value: obj?.fees.world ? '$ ' + obj?.fees.world.value : '—' },
		{ label: 'Премьера в мире', value: obj?.premiere?.world ? convertTimestampToDate(obj?.premiere.world, 'D MMMM YYYY') : '—' },
	]
}