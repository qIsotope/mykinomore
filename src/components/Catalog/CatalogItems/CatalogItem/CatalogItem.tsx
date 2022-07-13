import { FiBookmark } from 'react-icons/fi'
import styles from './catalogItems.module.css'



export const CatalogItem = () => {
	return (
		<div className={styles.catalog__item}>
			<div className={styles.catalog__itemLeft}>
				<div className={styles.catalog__itemImage}>
					<img src="./assets/films/film.webp" alt="" />
				</div>
				<div className={styles.catalog__itemInfo}>
					<div className={styles.catalog__itemName}>
						Баста. Суперигра
					</div>
					<div className={styles.catalog__itemDigits}>
						2022, 102 мин.
					</div>
					<div className={styles.catalog__itemDescription}>
						Как Баста подходит к работе и творчеству, откуда он черпает вдохновение для музыкального материала? Об этом и многом
					</div>
				</div>
			</div>
			<div className={styles.catalog__itemRight}>
				<div className={styles.catalog__itemRating}>
					6.8
				</div>
				<div className={styles.catalog__itemFavourite}>
					<span className={styles.catalog__itemFavouriteIconContainer}>
						<FiBookmark className={styles.catalog__itemFavouriteIcon} /></span>	Буду смотреть
				</div>
			</div>
		</div>
	)
}
