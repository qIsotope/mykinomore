
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import styles from './similarFilms.module.css'
import { Link } from 'react-router-dom';
import { Poster } from '../../../types/IFilms';


interface ISimilarFilms {
	alternativeName: string
	enName: string
	id: number
	name: string
	poster: Poster
	_id: string
}

export const SimilarFilms = ({ films }: { films: ISimilarFilms[] | undefined; }) => {
	console.log(films);

	return (
		<>
			<div className={styles.films__title}>Похожее кино <span className={styles.films__digit}>({films?.length})</span> </div>
			<Swiper
				slidesPerView={5}
			>
				{films?.map(a => <SwiperSlide>
					<Link to={`/film/${a.id}`} className={styles.films__swiperItem}>
						<div className={styles.films__swiperImage}>
							<img className={styles.films__swiperImg} src={a.poster.url} alt="" />
						</div>
						<Link to={`/film/${a.id}`} className={styles.films__name}>{a.name}</Link>
					</Link>
				</SwiperSlide>)}

			</Swiper>
		</>
	);
};