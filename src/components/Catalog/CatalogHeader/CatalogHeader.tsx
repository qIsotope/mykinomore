
import { Link, useLocation, useParams } from 'react-router-dom'
import styles from './catalogHeader.module.css'

export const CatalogHeader = () => {
	const params = useParams()
	const location = useLocation()
	return (
		<div className={styles.catalog__header}>
			<div className={styles.catalog__headerTitle}>
				{location.pathname.includes('/search') ? `Результаты поиска по запросу: ${params.query}` : 'Все фильмы'}
			</div>
			<div className={styles.catalog__headerSubtitle}>
				{location.pathname.includes('/search')
					?
					<>
						Ничего не нашли? <Link to={'/films'}>Список всех фильмов</Link>
					</> :
					'Фильмы всего мира'}

			</div>
		</div>
	)
}
