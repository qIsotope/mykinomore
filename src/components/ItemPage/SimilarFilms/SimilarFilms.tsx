
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import styles from './similarFilms.module.css'
import { Link } from 'react-router-dom';
import { Poster } from '../../../types/IFilms';
import { LazyLoadImage } from 'react-lazy-load-image-component';


interface ISimilarFilms {
	alternativeName: string
	enName: string
	id: number
	name: string
	poster: Poster
	_id: string
}

export const SimilarFilms = ({ films }: { films: ISimilarFilms[] | undefined; }) => {

	return (
		<>
			<div className={styles.films__title}>Похожее кино <span className={styles.films__digit}>({films?.length})</span> </div>
			<Swiper
				slidesPerView={5}
			>
				{films?.map(a => <SwiperSlide key={a.id}>
					<Link to={`/film/${a.id}`} className={styles.films__swiperItem}>
						<div className={styles.films__swiperImage}>
							<LazyLoadImage className={styles.films__swiperImg} src={a.poster.url}
								placeholderSrc='/assets/placeholder.jpg' height='318' width='212' />
						</div>
					</Link>
					<Link to={`/film/${a.id}`} className={styles.films__name}>{a.name}</Link>
				</SwiperSlide>)}

			</Swiper>
		</>
	);
};