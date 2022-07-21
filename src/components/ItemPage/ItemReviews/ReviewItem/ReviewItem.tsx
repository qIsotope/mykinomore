import styles from './reviewItem.module.css'
import { ItemButtons } from './ItemButtons/ItemButtons'
import { convertTimestampToDate } from '../../../../utils/convertDate';

export const ReviewItem = ({ title, body, date, likes, dislikes, type }:
	{ title: string, body: string, date: any, likes: number, dislikes: number, type: string }) => {

	if (type) {

	}

	let classnames = require('classnames');
	return (
		<div className=
			{classnames(styles.reviews__item, { [styles.positive]: type === 'Позитивный' || !type },
				{ [styles.negative]: type === 'Негативный' }
			)}>
			<div className={styles.item__title}>
				{title}
			</div>
			<div className={styles.item__body}>
				{body}
			</div>
			<button className={styles.item__button}>
				Показать всю рецензию
			</button>
			<div className={styles.item__footer}>
				<div className={styles.item__footerDate}>
					{convertTimestampToDate(date, 'D MMMM YYYY')}
				</div>
				<ItemButtons likes={likes} dislikes={dislikes} />
			</div>
		</div>
	)
}
