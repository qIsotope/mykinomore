import styles from './currentFilter.module.css'

interface ICurrentFilter {
	children: string
}

export const CurrentFilter = (props: ICurrentFilter) => {
	return (
		<div className={styles.catalog__CurrentFiltersItem}>
			{props.children}
		</div>
	)
}
