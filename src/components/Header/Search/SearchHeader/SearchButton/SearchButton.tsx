import { useAppDispatch, useAppSelector } from '../../../../../hooks/reduxHooks'
import { setActive } from '../../../../../redux/slices/query'
import styles from './searchButton.module.css'
export const SearchButton = ({ value, label }:
	{ value: string, label: string }) => {
	const classnames = require('classnames')
	const dispatch = useAppDispatch()
	const active = useAppSelector(state => state.query.value)

	return (
		<div className={classnames(styles.search__button, { [styles.red]: value === active })}
			onClick={() => dispatch(setActive(value))}
		>
			{label}
		</div>
	)
}
