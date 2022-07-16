import { ReactNode } from 'react'
import styles from './currentFilter.module.css'

interface ICurrentFilter {
	children: ReactNode
}

export const CurrentFilter = (props: ICurrentFilter) => {
	return (
		<div className={styles.catalog__CurrentFiltersItem}>
			{props.children}
		</div>
	)
}
