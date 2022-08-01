import { FiChevronLeft } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import styles from './roomHeader.module.css'

export const RoomHeader = ({ name, id }: { name: string | undefined, id: string | undefined }) => {

	return (
		<div className={styles.room__header}>
			<Link to={'/film/' + id} className={styles.room__headerButton}>
				<FiChevronLeft />
			</Link>
			<div className={styles.room__headerTitle}>
				{name}
			</div>
		</div>
	)
}
