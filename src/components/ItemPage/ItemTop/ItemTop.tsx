import { AiOutlineLeft } from 'react-icons/ai'
import styles from './itemTop.module.css'

export const ItemTop = () => {
	return (
		<div className={styles.item__top}>
			<span> <AiOutlineLeft /> </span>
			Назад
		</div>
	)
}
