
import { FC, useEffect, useState } from 'react'
import { useGetFilmsForYearQuery } from '../../../../redux/services/kinopoisk.services'
import { Doc } from '../../../../types/IFilms'
import { MainFilmsItem } from '../../MainItem/MainFilmsItem'
import styles from './mainFilmsListOfFilms.module.css'

interface IMainFilmsListOfFilms {
	movies: Doc[]
}

export const MainFilmsListOfFilms: FC<IMainFilmsListOfFilms> = (props) => {
	


	return (
		<div className={styles.films__block}>
			{props.movies?.map((m) => <MainFilmsItem key={m.id} id={m.id} name={m.name} year={m.year} image={m.poster.url} type={m.type} rating={m.rating.kp} />)}
		</div>
	)
}
