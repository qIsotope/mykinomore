
import { useAppSelector } from '../../../hooks/reduxHooks';
import { IFilterObject } from '../../../types/filterObjects';
import { getCurrentYear } from '../../../utils/getCurrentYear';
import styles from './filters.module.css'
import { RadioFilter } from './RadioFilter/RadioFilter';
import { SelectFilter } from './SelectFilter/SelectFilter';
import { SliderFilter } from './SliderFilter/SliderFilter';


export const filterObject: IFilterObject = {
	genre: {
		label: "Все жанры",
		value: ""
	},
	rating: [1, 10],
	year: [1887, getCurrentYear()],
	sort: '-1'
}


export const Filters = () => {
	const resetting = useAppSelector(state => state.filter.resetting);
	return (
		<div className={styles.catalog__sidebarFilters}>
			<SliderFilter name={'Рейтинг'} values={filterObject.rating} min={1} max={10} filterObj={filterObject} resetting={resetting} />
			<SliderFilter name={'Года производства'} values={filterObject.year} min={1887} max={getCurrentYear()} filterObj={filterObject} resetting={resetting} />
			<SelectFilter filterObj={filterObject} resetting={resetting} />
			<RadioFilter filterObj={filterObject} resetting={resetting} />
		</div>
	)
}
