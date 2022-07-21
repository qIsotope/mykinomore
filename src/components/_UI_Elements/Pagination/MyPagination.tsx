import styles from './myPagination.module.css'
import {
	AiOutlineDoubleLeft, AiOutlineDoubleRight,
	AiOutlineLeft, AiOutlineRight,
} from 'react-icons/ai';
import { useAppDispatch } from '../../../hooks/reduxHooks';
import { firstPage, lastPage, nextPage, prevPage } from '../../../redux/slices/pagination';

export const MyPagination = (props: { pages: number | undefined, page: number | undefined }) => {
	const dispatch = useAppDispatch()

	return (
		<div className={styles.pagination}>
			<button disabled={props.page === 1} className={styles.pagination__itemLeft} onClick={() => dispatch(firstPage())}>
				<AiOutlineDoubleLeft />
			</button>
			<button disabled={props.page === 1} className={styles.pagination__itemLeft} onClick={() => dispatch(prevPage())}>
				<AiOutlineLeft />
			</button>
			<div className={styles.pagination__info}>
				{props.page}/{props.pages}
			</div>
			<button disabled={props.page === props.pages} className={styles.pagination__itemRight} onClick={() => dispatch(nextPage())}>
				<AiOutlineRight />
			</button>
			<button disabled={props.page === props.pages} className={styles.pagination__itemRight} onClick={() => dispatch(lastPage(props.pages))}>
				<AiOutlineDoubleRight />
			</button>
		</div>
	)
}
