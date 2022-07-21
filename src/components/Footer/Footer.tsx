import { Link } from 'react-router-dom'
import styles from './footer.module.css'

export const Footer = () => {
	return (
		<footer className={styles.footer}>
			<div className="container">
				<div className={styles.footer__wrapper}>
					<Link to="" className={styles.footer__logo}>
						<img src="./assets/header/logo.svg" alt="" />
					</Link>
					<div className={styles.footer__links}>
						<span className={styles.footer__linksItem}>
							Фильмы
						</span>
						<span className={styles.footer__linksItem}>
							Сериалы
						</span>
						<span className={styles.footer__linksItem}>
							Мультфильмы
						</span>
					</div>
					<div className={styles.footer__signature}>
						© 2022 Kinomore
					</div>
				</div>
			</div>

		</footer>
	)
}
