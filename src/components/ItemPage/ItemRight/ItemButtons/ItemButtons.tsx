import { FiBookmark, FiCheck, FiPlay } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import { useFavourite } from '../../../../hooks/useFavourite'
import styles from './itemButtons.module.css'


export const ItemButtons = ({ id }: { id: number | undefined }) => {

	const { toggleFavourites, favourites } = useFavourite()
	const isFavourite = favourites.includes(id!)

	return (
		<div className={styles.item__buttons}>
			<Link to={'/room/' + id} className={styles.item__buttonsWatch}>
				<FiPlay className={styles.item__buttonsWatchIcon} />
				Смотреть
			</Link>
			<button className={styles.item__buttonsFavourite} onClick={() => toggleFavourites(id!)}>
				{isFavourite
					? <FiCheck className={styles.item__buttonChecked} />
					: <FiBookmark className={styles.item__buttonsFavouriteIcon} />
				}

				Буду смотреть
			</button>
		</div>
	)
}
