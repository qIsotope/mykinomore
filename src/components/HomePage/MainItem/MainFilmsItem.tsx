import { FiStar } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import styles from './mainFilmsItem.module.css'

interface IMainFilmsItem {
	name: string,
	year: number,
	image: string,
	type: string,
	rating: number
	id: number
}

export const MainFilmsItem = ({ name, year, image, type, rating, id }: IMainFilmsItem) => {
	return (
		<Link to={`/film/${id}`} className={styles.films__item}>
			<div className={styles.films__itemImage}>
				<img className={styles.films__image} src={image} alt="#" />
				<div className={styles.films__itemStars}>
					<FiStar /> <span>{rating}</span>
				</div>
			</div>
			<div className={styles.films__itemInfo}>
				<div className={styles.films__itemTitle}>
					{name}
				</div>
				<div className={styles.films__itemSubtitle}>
					{year}, {type}
				</div>
			</div>
		</Link>
	)
}
