import { BiLike, BiDislike } from 'react-icons/bi'
import styles from './itemButtons.module.css'

export const ItemButtons = ({ likes, dislikes }: { likes: number, dislikes: number }) => {
	return (
		<div className={styles.item__footerButtons}>
			<button className={styles.item__footerLike}>
				<BiLike />	<span>Полезно {likes}</span>
			</button>
			<button className={styles.item__footerDislike}>
				<BiDislike />	<span>Нет {dislikes}</span>
			</button>
		</div>
	)
}
