
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import { IMoviePerson } from '../../../../types/IFilmsById';
import styles from './itemActors.module.css'
import { Link } from 'react-router-dom';

export default ({ actors }: { actors: IMoviePerson[] | undefined; }) => {
	const onlyActors = actors?.filter(actor => actor.enProfession === 'actor' && actor.name !== '')
	console.log(onlyActors);

	return (
		<>
			<div className={styles.actors__title}>Актеры <span className={styles.actors__digit}>({onlyActors?.length})</span> </div>
			<Swiper
				slidesPerView={5}
			>
				{onlyActors?.map(a => <SwiperSlide>
					<div className={styles.actors__swiperItem}>
						<div className={styles.actors__swiperImage}>
							<img className={styles.actors__swiperImg} src={a.photo} alt="" />
						</div>
						<Link to={`/name/${a.id}`} className={styles.actors__name}>{a.name}</Link>
						<div className={styles.actors__proffesion}>{a.description}</div>
					</div>
				</SwiperSlide>)}

			</Swiper>
		</>
	);
};