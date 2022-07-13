import { useEffect, useState } from 'react'
import { useGetSeriesForYearQuery } from '../../../../redux/services/kinopoisk.services'
import { Doc } from '../../../../types/IFilms'
import { MainFilmsItem } from '../../MainItem/MainFilmsItem'
import styles from './mainFilmsListOfSeries.module.css'

interface IMainFilmsListOfFilms {
	movies: Doc[]
}

export const MainFilmsListOfSeries = (props: IMainFilmsListOfFilms) => {
	
	return (
		<div className={styles.films__block}>
			{props.movies.map((m) => <MainFilmsItem key={m.id} name={m.name} year={m.year} image={m.poster.url} type={m.type} rating={m.rating.kp} />)}
		</div>
	)
}
