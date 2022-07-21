import { FiBookmark, FiCheck } from 'react-icons/fi'
import { useFavourite } from '../../../../../hooks/useFavourite'
import styles from './catalogItemFavourite.module.css'

export const CatalogItemFavourite = (props: { id: number }) => {

	const { toggleFavourites, favourites } = useFavourite()
	const isFavourite = favourites.includes(props.id)


	return (
		<div className={styles.catalog__itemFavourite} onClick={() => toggleFavourites(props.id)}>
			<span className={styles.catalog__itemFavouriteIconContainer}>
				{isFavourite
					? <FiCheck className={styles.catalog__itemFavouriteIconCheck} />
					: <FiBookmark className={styles.catalog__itemFavouriteIconBookmark} />
				}


			</span>	Буду смотреть
		</div>
	)
}
