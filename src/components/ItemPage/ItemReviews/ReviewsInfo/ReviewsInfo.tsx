import { findPercentage } from '../../../../utils/findPercentage'
import styles from './reviewsInfo.module.css'

export const ReviewsInfo = ({ goodReviews, badReviews, neutralReviews, allReviews }:
	{ goodReviews: number | undefined, badReviews: number | undefined, neutralReviews: number | undefined, allReviews: number | undefined }) => {

	let classNames = require('classnames');

	return (
		<div className={styles.reviews__info}>
			<div className={styles.reviews__infoItem}>
				<div className={styles.reviews__infoDigit}>
					{allReviews}
				</div>
				<div className={styles.reviews__infoCaption}>
					Всего
				</div>
			</div>
			<div className={styles.reviews__infoItem}>
				<div className={classNames(styles.reviews__infoDigit, styles.red)}>
					{goodReviews}
					<span className={styles.reviews__percentage}>{findPercentage(goodReviews, allReviews)}%</span>
				</div>
				<div className={styles.reviews__infoCaption}>
					Положительные
				</div>
			</div>
			<div className={styles.reviews__infoItem}>
				<div className={classNames(styles.reviews__infoDigit, styles.green)}>
					{badReviews}
					<span className={styles.reviews__percentage}>{findPercentage(badReviews, allReviews)}%</span>
				</div>
				<div className={styles.reviews__infoCaption}>
					Отрицательные
				</div>
			</div>
			<div className={styles.reviews__infoItem}>
				<div className={classNames(styles.reviews__infoDigit, styles.gray)}>
					{neutralReviews}
					<span className={styles.reviews__percentage}>{findPercentage(neutralReviews, allReviews)}%</span>
				</div>
				<div className={styles.reviews__infoCaption}>
					Нейтральные
				</div>
			</div>
		</div>
	)
}
