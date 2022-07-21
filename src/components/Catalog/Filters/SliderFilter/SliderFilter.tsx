import 'rc-slider/assets/index.css';
import Slider from 'rc-slider';
import styles from './sliderFilter.module.css'
import { useEffect, useState } from 'react';
import { IFilterObject } from '../../../../types/filterObjects';
import { FiltersToggle } from '../FiltersToggle/FiltersToggle';


interface ISlicerFilter {
	name: string;
	values: number[],
	min: number;
	max: number;
	filterObj: IFilterObject
	resetting: boolean | undefined;
}

export const SliderFilter = (props: ISlicerFilter) => {

	const [val, setVal] = useState(props.values)
	const [open, setOpen] = useState(true)
	useEffect(() => {
		if (props.resetting === true) {
			setVal([props.min, props.max])
		}
	}, [props.resetting])





	const onChange = (v: any) => {
		setVal(v)
		props.name === 'Рейтинг' ? props.filterObj.rating = v : props.filterObj.year = v
	}

	return (
		<>
			<FiltersToggle open={open} setOpen={setOpen} name={props.name} />
			{open
				&&
				<>
					<div className={styles.catalog__inputs}>
						<input className={styles.catalog__input} type="text" value={val[0]} disabled />
						<input className={styles.catalog__input} type="text" value={val[1]} disabled />
					</div>
					<div>
						<Slider className={styles.catalog__ratio} step={1} range allowCross={false}
							value={val}
							onChange={(v) => { onChange(v) }}
							min={props.min} max={props.max} />
					</div>
				</>
			}

		</>
	)
}
