import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useGetFilmForIdQuery } from '../redux/services/kinopoisk.services';
import { RoomHeader } from '../components/RoomPage/RoomHeader/RoomHeader';
import styles from '../components/RoomPage/roomPage.module.css'


export const RoomPage = () => {
	const { id } = useParams()
	const { data } = useGetFilmForIdQuery(Number(id)!)

	useEffect(() => {
		const script = document.createElement("script");
		script.src = "/player.js";
		document.body.appendChild(script);
		return () => {
			script.remove();
		};
	}, []);

	return (
		<div className={styles.room}>
			<RoomHeader name={data?.name} id={id} />
			<div className={styles.room__film}>
				<div className={styles.video} id="kinobd" data-resize="1" data-bg="#000" data-kinopoisk={id}></div>
			</div>
		</div>
	)
}
