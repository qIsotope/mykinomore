import { Link } from 'react-router-dom'
import styles from './catalogItemInfo.module.css'


export const CatalogItemInfo = (props: { description: string, name: string, year: number, movieLength: number, id: number }) => {
	return (
		<div className={styles.catalog__itemInfo}>
			<Link to={`/film/${props.id}`} className={styles.catalog__itemName}>
				{props.name}
			</Link>
			<div className={styles.catalog__itemDigits}>
				{props.year}, {props.movieLength} мин.
			</div>
			<Link to={`/film/${props.id}`} className={styles.catalog__itemDescription}>
				{props.description}
			</Link>
		</div>
	)
}
