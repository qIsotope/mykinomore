import './selectFilter.css'
import Select from 'react-select'
import { genres } from '../../../../data/genres'
import { IGenre } from '../../../../redux/slices/filter'
import { useEffect, useState } from 'react'
import { IFilterObject } from '../../../../types/filterObjects'
import { FiltersToggle } from '../FiltersToggle/FiltersToggle'

interface ISelectFilter {
	filterObj: IFilterObject
	resetting: boolean | undefined
}

export const SelectFilter = (props: ISelectFilter) => {
	const [val, setVal] = useState<IGenre>({ value: '', label: 'Все жанры' })
	const [open, setOpen] = useState(true)
	const onChange = (v: IGenre) => {
		setVal(v)
		props.filterObj.genre = v
	}
	useEffect(() => {
		if (props.resetting === true) {
			setVal({ value: '', label: 'Все жанры' })
		}
	}, [props.resetting])

	return (
		<>
			<FiltersToggle open={open} setOpen={setOpen} name={'Жанры'} />
			{
				open
				&& <Select defaultValue={val} value={val} onChange={((e: any) => onChange(e))}
					classNamePrefix={'catalog__filterSelect'}
					options={genres} />
			}

		</>
	)
}
