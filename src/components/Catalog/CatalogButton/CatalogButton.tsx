import { useAppDispatch } from '../../../hooks/reduxHooks';
import { getFilterObject, resetFilters } from '../../../redux/slices/filter';
import { MyButton } from '../../_UI_Elements/MyButton/MyButton'
import { filterObject } from '../Filters/Filters';
import styles from './catalogButton.module.css'

interface ICatalogButton {
	filter?: boolean;
	white?: boolean;
	children: string;
}

export const CatalogButton = (props: ICatalogButton) => {
	const dispatch = useAppDispatch()


	return (
		<div>
			<MyButton onClick={props.filter ? () => dispatch(getFilterObject(filterObject)) : () => dispatch(resetFilters())}
				className={props.white ? styles.catalog__buttonWhite : styles.catalog__button}>
				{props.children}
			</MyButton>
		</div>
	)
}
