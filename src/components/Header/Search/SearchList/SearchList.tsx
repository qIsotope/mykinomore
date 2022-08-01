import { Doc } from '../../../../types/IFilms'
import { Loading } from '../../../_UI_Elements/Loading/Loading'
import { SearchItem } from '../SearchItem/SearchItem'
import styles from './searchList.module.css'


export const SearchList = ({ movies, isLoading, isFetching }: { movies: Doc[] | undefined, isLoading: boolean, isFetching: boolean }) => {



	return (

		<>
			{isFetching || isLoading
				? <div className={styles.search__list}>
					<div className={styles.search__listLoader}>
						<Loading />
					</div>
				</div>
				: <div className={styles.search__list}>
					{movies?.length === 0
						? <div className={styles.search__listNothing}> По вашему запросу ничего не найдено</div>
						: <>{movies?.map(i => <SearchItem key={i.id} name={i.name} year={i.year} len={i.movieLength} rating={i.rating} id={i.id}
							photo={i.poster.url} />)}</>
					}
				</div>
			}
		</>
	)
}
