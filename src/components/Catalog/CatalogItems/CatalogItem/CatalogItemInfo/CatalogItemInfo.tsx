import styles from './catalogItemInfo.module.css'


export const CatalogItemInfo = (props: { description: string, name: string, year: number, movieLength: number }) => {
	return (
		<div className={styles.catalog__itemInfo}>
			<div className={styles.catalog__itemName}>
				{props.name}
			</div>
			<div className={styles.catalog__itemDigits}>
				{props.year}, {props.movieLength} мин.
			</div>
			<div className={styles.catalog__itemDescription}>
				{props.description}
			</div>
		</div>
	)
}
