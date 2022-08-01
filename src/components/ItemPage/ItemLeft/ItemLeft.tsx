import styles from './itemLeft.module.css'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';


export const ItemLeft = ({ url, rating }: { url: string | undefined, rating?: number | undefined }) => {
	return (
		<div className={styles.item__mainLeft}>
			<span className={styles.item__ratingHigh}>{rating}</span>
			<LazyLoadImage src={url} placeholderSrc='/assets/placeholder.jpg'
				width="300" height="450"
			/>
		</div>
	)
}
