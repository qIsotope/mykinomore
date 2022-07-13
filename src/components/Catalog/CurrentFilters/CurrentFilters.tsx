import { CurrentFilter } from "./CurrentFilter/CurrentFilter"
import styles from './currentFilters.module.css'

export const CurrentFilters = () => {
	return (
		<div className={styles.catalog__sidebarCurrentFilters}>
			<CurrentFilter>
				Рейтинг: 1 - 10
			</CurrentFilter>
			<CurrentFilter>
				Года производства: 1960 - 2022
			</CurrentFilter>
			<CurrentFilter>
				Жанр: Все жанры
			</CurrentFilter>
			<CurrentFilter>
				Год выхода: Сначала новые
			</CurrentFilter>
		</div>
	)
}
