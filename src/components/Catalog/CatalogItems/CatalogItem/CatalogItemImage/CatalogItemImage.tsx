import { LazyLoadImage } from 'react-lazy-load-image-component'
import { Link } from 'react-router-dom'
import styles from './catalogItemImage.module.css'


export const CatalogItemImage = (props: { image: string, id: number }) => {
	return (
		<Link to={`/film/${props.id}`} className={styles.catalog__itemImage}>

			<LazyLoadImage className={styles.catalog__itemImg} src={props.image} placeholderSrc='/assets/placeholder.jpg' />
		</Link>
	)
}
