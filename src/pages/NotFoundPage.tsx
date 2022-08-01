import { Link } from 'react-router-dom'
import { MyButton } from '../components/_UI_Elements/MyButton/MyButton'
import styles from '../components/NotFoundPage/notFoundPage.module.css'

export const NotFoundPage = () => {
	console.log('123')
	return (
		<section className={styles.notfound}>
			<div className={styles.notfound__body}>
				<h1 className={styles.notfound__title}>404. Страница не найдена</h1>
				<p className={styles.notfound__subtitle}>Возможно, она была перемещена, или вы просто неверно указали адрес страницы.</p>
				<Link to={''}>
					<MyButton className={styles.notfound__back}>Вернуться на главную</MyButton>
				</Link>
			</div>
		</section>
	)
}
