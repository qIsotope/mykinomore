import { memo, } from 'react'
import { ICatalogData } from '../../../types/catalogDataTypes'
import { MySkeleton } from '../../_UI_Elements/MySkeleton/MySkeleton'
import { MyPagination } from '../../_UI_Elements/Pagination/MyPagination'
import { CatalogItem } from './CatalogItem/CatalogItem'
import { useLocation } from 'react-router-dom'
import styles from './catalogItems.module.css'
import { useFavourite } from '../../../hooks/useFavourite'


export const CatalogItems = memo((props: ICatalogData) => {
	const location = useLocation()
	const { favourites } = useFavourite()

	if (props.data?.docs?.length === 0 || (location.pathname === '/favourites' && favourites.length === 0)) {
		return (
			<div className={styles.catalog__listOfItems}>
				<div className={styles.catalog__emptyList}>
					{location.pathname === '/favourites' ? 'Список избранного пуст' : 'Ничего не найдено!'}
				</div>
			</div>
		)
	}

	return (
		<>
			<div className='catalog__listOfItems'>
				{props.isFetching || props.isLoading
					? <>
						{[...new Array(10)].map((_, index) => <MySkeleton key={index} />)}
					</>
					: <>
						{props.data?.docs?.map(i => <CatalogItem key={i.id} id={i.id} name={i.name} description={i.description}
							rating={i.rating.kp} year={i.year} movieLength={i.movieLength} image={i.poster.url} />)}
					</>
				}
				<MyPagination pages={props.data?.pages} page={props.data?.page} />
			</div>
		</>
	)
})
