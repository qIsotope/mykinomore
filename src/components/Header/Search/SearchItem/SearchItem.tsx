import styles from './searchItem.module.css'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { Rating } from '../../../../types/IFilms'
import { Link } from 'react-router-dom'

interface ISearchItem {
	name: string
	year: number
	len: number
	rating: Rating
	photo: string
	id: number
}

export const SearchItem = (props: ISearchItem) => {
	const classnames = require('classnames')
	return (
		<Link to={`film/${props.id}`} className={styles.search__listItem}>
			<div className={styles.item__left}>
				<div className={styles.item__image}>
					<LazyLoadImage src={props.photo}
						placeholderSrc='/assets/placeholder.jpg' />
				</div>
				<div className={styles.item__info}>
					<div className={styles.item__name}>
						{props.name}
					</div>
					<div className={styles.item__year}>
						{props.year}, {props.len} мин.
					</div>
				</div>
			</div>
			<div className={classnames(styles.item__right, { [styles.red]: props.rating.kp ? props.rating.kp < 5 : props.rating.imdb < 5 })}>
				{props.rating.kp || props.rating.imdb}
			</div>
		</Link>
	)
}
