import { Doc } from '../../../types/IFilms';
import { MyButton } from '../../_UI_Elements/MyButton/MyButton';
import styles from './mainFilmsHeader.module.css'

interface IMainFilmsHeader {
	setMovies: (v:Doc[]) => void;
}

export const MainFilmsHeader = (props:IMainFilmsHeader) => {
	
	return (
		<div className={styles.film__header}>
			<div className={styles.films__headerText}>
				Новые фильмы
			</div>
			<div className={styles.films__headerButton}>
				<MyButton>
					Смотреть все
				</MyButton>
			</div>
		</div>
	)
}
