import styles from './reviewItem.module.css'
import { ItemButtons } from './ItemButtons/ItemButtons'
import { convertTimestampToDate } from '../../../../utils/convertDate';
import { useState } from 'react';

export const ReviewItem = ({ title, body, date, likes, dislikes, type }:
	{ title: string, body: string, date: string | Date, likes: number, dislikes: number, type: string }) => {
	let classnames = require('classnames');

	const [show, setShow] = useState(false)


	return (
		<div className=
			{classnames(styles.reviews__item, { [styles.positive]: type === 'Позитивный' || !type },
				{ [styles.negative]: type === 'Негативный' }
			)}>
			<div className={styles.item__title}>
				{title}
			</div>
			<div className={classnames(styles.item__body, { [styles.item__bodyHide]: !show })}>
				{body}
			</div>
			<button className={styles.item__button} onClick={() => setShow(!show)}>
				{show ? "Скрыть рецензию" : "Показать всю рецензию"}
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
