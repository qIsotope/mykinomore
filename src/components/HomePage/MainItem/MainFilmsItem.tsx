import { FiStar } from 'react-icons/fi'
import styles from './mainFilmsItem.module.css'

interface IMainFilmsItem {
	name: string,
	year: number,
	image: string,
	type: string,
	rating: number

}

export const MainFilmsItem = ({ name, year, image, type, rating }: IMainFilmsItem) => {
	return (
		<div className={styles.films__item}>
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
		</div>
	)
}
