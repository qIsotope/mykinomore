import { ICatalogData } from '../../../types/catalogDataTypes'
import { CatalogItems } from '../CatalogItems/CatalogItems'
import { CatalogSidebar } from '../CatalogSidebar/CatalogSidebar'

import styles from './catalogContent.module.css'

export const CatalogContent = (props: ICatalogData) => {


	return (
		<div className={styles.catalog__content}>
			<CatalogSidebar />
			<CatalogItems data={props.data} isFetching={props.isFetching} isLoading={props.isLoading} />
		</div>
	)
}
