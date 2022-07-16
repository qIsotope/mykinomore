import { FiBookmark } from 'react-icons/fi'
import styles from './catalogItemFavourite.module.css'

export const CatalogItemFavourite = (props: {id: number}) => {
	return (
		<div className={styles.catalog__itemFavourite}>
			<span className={styles.catalog__itemFavouriteIconContainer}>
				<FiBookmark className={styles.catalog__itemFavouriteIcon} /></span>	Буду смотреть
		</div>
	)
}
