
import { CatalogButton } from '../CatalogButton/CatalogButton'
import { CurrentFilters } from '../CurrentFilters/CurrentFilters'
import { Filters } from '../Filters/Filters'
import styles from './catalogSidebar.module.css'


export const CatalogSidebar = () => {
	
	return (
		<div className={styles.catalog__sidebar}>
			<CurrentFilters />
			<Filters />
			<CatalogButton filter>
				Применить
			</CatalogButton >
			<CatalogButton white>
				Сбросить
			</CatalogButton>
		</div>
	)
}
