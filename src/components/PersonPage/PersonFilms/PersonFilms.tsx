import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useGetFilmsByIdQuery } from '../../../redux/services/kinopoisk.services';
import { Movie } from '../../../types/IPerson';
import styles from '../../ItemPage/ItemTabs/ItemActors/itemActors.module.css'

export default ({ movies, len }: { movies: Movie[], len: number }) => {
	const query = movies?.map((el) => `search=${el.id}&field=id`).join('&')
	const { data } = useGetFilmsByIdQuery({ query, limit: len })
	const classnames = require('classnames')

	return (
		<>
			<div className={styles.actors__title}>Фильмы и сериалы <span className={styles.actors__digit}>({len})</span> </div>
			<Swiper
				slidesPerView={5}
			>
				{data?.docs?.map((a) => <SwiperSlide key={a.id}>
					<Link to={`/film/${a.id}`} className={styles.actors__swiperItem}>
						<div className={styles.actors__swiperImage}>
							<div className={classnames(styles.item__ratingHigh,
								{ [styles.red]: a.rating?.kp < 5 }
							)}>{a.rating?.kp}</div>
							<LazyLoadImage className={styles.actors__swiperImg} src={a.poster?.url} placeholderSrc='/assets/placeholder.jpg'
								height='318' width='212' />
						</div>
					</Link>
					<Link to={`/film/${a.id}`} className={styles.actors__name}>{a.name}</Link>
				</SwiperSlide>)}
			</Swiper>
		</>
	);
};