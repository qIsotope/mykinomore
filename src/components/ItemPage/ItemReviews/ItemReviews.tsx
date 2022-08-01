import { useEffect, useState } from 'react';
import { IReviews, useGetReviewsByIdQuery } from '../../../redux/services/kinopoisk.services'
import { IReview } from '../../../types/IReview';
import { MyButton } from '../../_UI_Elements/MyButton/MyButton';
import { ItemPageButton } from '../ItemPageButton/ItemPageButton';
import styles from './itemReviews.module.css'
import { ReviewItem } from './ReviewItem/ReviewItem';
import { ReviewsInfo } from './ReviewsInfo/ReviewsInfo';


export const ItemReviews = ({ id }: { id: string | undefined }) => {
	const { data } = useGetReviewsByIdQuery({ id, limit: 9999 })
	const goodReviews = data?.docs?.filter(rev => rev?.type === 'Позитивный' || !rev.type).length;
	const badReviews = data?.docs?.filter(rev => rev?.type === 'Негативный').length;
	const neutralReviews = data?.docs?.filter(rev => rev?.type === 'Нейтральный').length;

	const [reviews, setReviews] = useState<IReview[] | undefined>([])
	const [limit, setLimit] = useState(3)
	useEffect(() => setReviews(data?.docs?.filter((r, i) => i < limit)), [data, limit])



	return (
		<>
			{data?.docs.length !== 0 &&
				<div className={styles.item__reviews}>
					<div className={styles.reviews__title}>Рецензии критиков</div>
					<div className={styles.review__content}>
						<div className={styles.reviews__body}>
							{reviews?.map((r) => <ReviewItem key={r.id} title={r.title} body={r.review} date={r.date}
								likes={r.reviewLikes} dislikes={r.reviewDislikes} type={r.type} />)}
						</div>
						<ReviewsInfo goodReviews={goodReviews} badReviews={badReviews} neutralReviews={neutralReviews} allReviews={data?.docs.length} />
					</div>
					<ItemPageButton update={setLimit} limit={limit} total={data?.total}>
						Показать еще
					</ItemPageButton>
				</div>
			}
		</>
	)
}
