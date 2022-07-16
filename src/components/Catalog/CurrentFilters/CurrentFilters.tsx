import { useAppSelector } from "../../../hooks/reduxHooks"
import { CurrentFilter } from "./CurrentFilter/CurrentFilter"
import styles from './currentFilters.module.css'

export const CurrentFilters = () => {
	const currentFilters = useAppSelector(state => state.filter)
	return (
		<div className={styles.catalog__sidebarCurrentFilters}>
			<CurrentFilter>
				Рейтинг: {`${currentFilters.rating[0]} - ${currentFilters.rating[1]}`}
			</CurrentFilter>
			<CurrentFilter>
				Года производства: {`${currentFilters.year[0]} - ${currentFilters.year[1]}`}
			</CurrentFilter>
			<CurrentFilter>
				Жанр: {currentFilters.genre.label}
			</CurrentFilter>
			<CurrentFilter>
				Год выхода: {currentFilters.sort === '1' ? 'Сначала старые' : 'Сначала новые'}
			</CurrentFilter>
		</div>
	)
}
