import { ICatalogData } from '../../../types/catalogDataTypes'
import { CatalogContent } from '../CatalogContent/CatalogContent'
import { CatalogHeader } from '../CatalogHeader/CatalogHeader'

import styles from './catalogBody.module.css'


export const CatalogBody = (props: ICatalogData) => {
	return (
		<section className={styles.catalog}>
			<div className="container">
				<CatalogHeader />
				<CatalogContent data={props.data} isFetching={props.isFetching} isLoading={props.isLoading}/>
			</div>
		</section >
	)
}
