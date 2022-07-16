import styles from './catalogItemRating.module.css'

export const CatalogItemRating = (props: { rating: number }) => {
	return (
		<div className={props.rating < 4 ? styles.catalog__itemRatingLow : styles.catalog__itemRatingHigh}>
			{props.rating}
		</div>
	)
}
