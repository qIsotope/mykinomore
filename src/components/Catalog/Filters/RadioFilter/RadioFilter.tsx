import styles from './radioFilter.module.css'
import { RadioGroup, Radio } from 'react-radio-group'
import { useEffect, useState } from 'react'
import { FiltersToggle } from '../FiltersToggle/FiltersToggle'



interface IRadioFilter {
	filterObj: any
	resetting: boolean | undefined
}


export const RadioFilter = (props: IRadioFilter) => {
	const [val, setVal] = useState('-1')
	const [open, setOpen] = useState(true)

	const onChange = (v: string) => {
		setVal(v)
		props.filterObj.sort = v
	}
	useEffect(() => {
		if (props.resetting === true) {
			setVal('-1')
		}
	}, [props.resetting])
	return (
		<>
			<FiltersToggle open={open} setOpen={setOpen} name={'Год выхода'} />
			{open && <RadioGroup name="fruit" onChange={(v) => onChange(v)} selectedValue={val}>
				<label className={styles.catalog__radioItem}>
					<Radio value="-1" /> <span>Сначала новые</span>
				</label>
				<label className={styles.catalog__radioItem}>
					<Radio value="1" /> <span>Сначала старые</span>
				</label>
			</RadioGroup>}
		</>
	)
}
