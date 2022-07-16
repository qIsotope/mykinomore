import { RiArrowDownSLine } from 'react-icons/ri'
import styles from './filtersToggle.module.css'

interface IFiltersToggle {
	open: boolean;
	setOpen: (value: boolean) => void
	name: string;
}

export const FiltersToggle = (props: IFiltersToggle) => {
	return (
		<div className={styles.catalog__filterItem} onClick={() => props.setOpen(!props.open)}>
			{props.name}
			<span className={styles.catalog__filterItemIcon} >
				<RiArrowDownSLine className={props.open ? styles.catalog__filterItemRotate : styles.catalog__filterItemDefault} />
			</span>
		</div>
	)
}
