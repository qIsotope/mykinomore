import { Link } from 'react-router-dom';
import { MyButton } from '../../_UI_Elements/MyButton/MyButton';
import styles from './mainFilmsHeader.module.css'



export const MainFilmsHeader = ({ films }: { films?: boolean }) => {

	return (
		<div className={styles.film__header}>
			<div className={styles.films__headerText}>
				Новые фильмы
			</div>
			<div className={styles.films__headerButton}>
				<Link to={films ? '/films' : '/series'}>
					<MyButton>
						Смотреть все
					</MyButton>
				</Link>

			</div>
		</div>
	)
}
