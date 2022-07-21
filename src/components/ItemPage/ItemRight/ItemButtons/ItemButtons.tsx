import { FiBookmark, FiPlay } from 'react-icons/fi'
import styles from './itemButtons.module.css'


export const ItemButtons = () => {
	return (
		<div className={styles.item__buttons}>
			<button className={styles.item__buttonsWatch}>
				<FiPlay className={styles.item__buttonsWatchIcon} />
				Смотреть
			</button>
			<button className={styles.item__buttonsFavourite}>
				<FiBookmark className={styles.item__buttonsFavouriteIcon} />
				Буду смотреть
			</button>
		</div>
	)
}
