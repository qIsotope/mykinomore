import { BiMovie } from "react-icons/bi";
import { FiHome, FiFilm, FiTv, FiHeart } from "react-icons/fi";



export const items = [
	{ icon: <FiHome />, href: '/*', text: 'Главная' },
	{ icon: <FiFilm />, href: '/films', text: 'Фильмы' },
	{ icon: <FiTv />, href: '/series', text: 'Сериалы' },
	{ icon: <BiMovie />, href: '/cartoons', text: 'Мультфильмы' },
	{ icon: <FiHeart />, href: '/favourites', text: 'Избранное' }
]