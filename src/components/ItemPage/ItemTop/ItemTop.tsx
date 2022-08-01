import { AiOutlineLeft } from 'react-icons/ai'
import { useNavigate } from 'react-router-dom'
import styles from './itemTop.module.css'

export const ItemTop = () => {

	let navigate = useNavigate();
	console.log(navigate)

	return (
		<span onClick={() => navigate(-1)}
			className={styles.item__top}>
			<span > <AiOutlineLeft className={styles.item__topSVG} /> </span>
			Назад
		</span>
	)
}
