import { CatalogItems } from '../CatalogItems/CatalogItems'
import { CatalogSidebar } from '../CatalogSidebar/CatalogSidebar'

import styles from './catalogContent.module.css'

export const CatalogContent = () => {


	return (
		<div className={styles.catalog__content}>
			<CatalogSidebar />
			<CatalogItems />
		</div>
	)
}
