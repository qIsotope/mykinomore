import { CatalogItem } from './CatalogItem/CatalogItem'
import styles from './catalogItems.module.css'


export const CatalogItems = () => {
	return (
		<div className={styles.catalog__listOfItems}>
			<CatalogItem />
		</div>
	)
}
