import { CatalogItemFavourite } from './CatalogItemFavourite/CatalogItemFavourite'
import { CatalogItemImage } from './CatalogItemImage/CatalogItemImage'
import { CatalogItemInfo } from './CatalogItemInfo/CatalogItemInfo'
import { CatalogItemRating } from './CatalogItemRating/CatalogItemRating'
import styles from './catalogItems.module.css'

interface ICatalogItemProps {
	name: string
	description: string
	rating: number
	year: number
	movieLength: number
	image: string
	id: number
}

export const CatalogItem = (props: ICatalogItemProps) => {

	return (
		<div className={styles.catalog__item}>
			<div className={styles.catalog__itemLeft}>
				<CatalogItemImage image={props.image} />
				<CatalogItemInfo description={props.description} year={props.year} movieLength={props.movieLength} name={props.name} />
			</div>
			<div className={styles.catalog__itemRight}>
				<CatalogItemRating rating={props.rating} />
				<CatalogItemFavourite id={props.id} />
			</div>
		</div>
	)
}
