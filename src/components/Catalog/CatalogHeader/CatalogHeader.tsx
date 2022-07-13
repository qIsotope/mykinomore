
import styles from './catalogHeader.module.css'

export const CatalogHeader = () => {
	return (
		<div className={styles.catalog__header}>
			<div className={styles.catalog__headerTitle}>
				Все фильмы
			</div>
			<div className={styles.catalog__headerSubtitle}>
				Фильмы всего мира
			</div>
		</div>
	)
}
