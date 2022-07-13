import { FC } from 'react'
import { MyButton } from '../../_UI_Elements/MyButton/MyButton';

import styles from './mainFilmsButton.module.css'

interface IMainFilms {
	setPage: (v: number) => void;
	page: number;
	fetching: boolean;
	hide: boolean;
}

export const MainFilmsButton: FC<IMainFilms> = (props,) => {

	return (
		<>
			{!props.hide &&
				<div className={styles.film__button}>
					<MyButton disabled={props.fetching} className={styles.film__customButton} onClick={() => props.setPage(props.page + 1)}>
						{props.fetching ? 'Загрузка...' : "Показать ещё"}
					</MyButton>
				</div>
			}
		</>
	)
}
