import { memo, } from 'react'
import { useAppSelector } from '../../../hooks/reduxHooks'
import { useGetFilmsQuery } from '../../../redux/services/kinopoisk.services'
import { MyLoader } from '../../_UI_Elements/MyLoader/MyLoader'
import { MySkeleton } from '../../_UI_Elements/MySkeleton/MySkeleton'
import { CatalogItem } from './CatalogItem/CatalogItem'
import styles from './catalogItems.module.css'


export const CatalogItems = memo(() => {
	const options = useAppSelector(state => state.filter)

	const { data, isFetching, isLoading } = useGetFilmsQuery(options)

	return (
		<>

			{isFetching || isLoading
				? <div className={styles.catalog__listOfItems}>
					{[...new Array(10)].map((_, index) => <MySkeleton key={index} />)}
				</div>
				: <div className={styles.catalog__listOfItems}>
					{data?.docs.map(i => <CatalogItem key={i.id} id={i.id} name={i.name} description={i.description}
						rating={i.rating.kp} year={i.year} movieLength={i.movieLength} image={i.poster.url}
					/>)}
				</div>


			}

		</>
	)
})
