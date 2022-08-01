import { FiStar } from 'react-icons/fi'
import { LazyLoadImage } from 'react-lazy-load-image-component'
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
				<LazyLoadImage className={styles.films__image} src={image} placeholderSrc='/assets/placeholder.jpg' />
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
