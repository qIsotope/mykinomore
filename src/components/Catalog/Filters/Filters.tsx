import 'rc-slider/assets/index.css';
import { RiArrowDownSLine } from 'react-icons/ri'
import styles from './filters.module.css'
import Slider from 'rc-slider';
import { useState } from 'react';


export const Filters = () => {
	const [values, setValues] = useState<any>([1, 10])

	const onChange = (e: any) => {
		setValues(e)
		console.log(e, 'e')

	}


	return (
		<div className={styles.catalog__sidebarFilters}>
			<div className={styles.catalog__filterItem}>
				Рейтинг
				<span className={styles.catalog__filterItemIcon} ><RiArrowDownSLine /></span>
			</div>
			<div className={styles.catalog__inputs}>
				<input className={styles.catalog__input} type="text" value={values[0]} disabled />
				<input className={styles.catalog__input} type="text" value={values[1]} disabled />
			</div>
			<div>

				<Slider className={styles.catalog__ratio} step={1} range allowCross={false} value={values} onChange={(e) => { onChange(e) }} min={1} max={10} />
			</div>
			<div className={styles.catalog__filterItem}>
				Года производства
				<span className={styles.catalog__filterItemIcon} ><RiArrowDownSLine /></span>
			</div>
			<div className={styles.catalog__filterItem}>
				Жанры
				<span className={styles.catalog__filterItemIcon} ><RiArrowDownSLine /></span>
			</div>
			<div className={styles.catalog__filterItem}>
				Год выхода
				<span className={styles.catalog__filterItemIcon} ><RiArrowDownSLine /></span>
			</div>
		</div>
	)
}
