import { Link } from 'react-router-dom'
import styles from './footer.module.css'

export const Footer = () => {
	return (
		<footer className={styles.footer}>
			<div className="container">
				<div className={styles.footer__wrapper}>
					<Link to="" className={styles.footer__logo}>
						<img src="/assets/header/logo.svg" alt="" />
					</Link>
					<div className={styles.footer__links}>
						<Link to={'/films'} className={styles.footer__linksItem}>
							Фильмы
						</Link>
						<Link to={'/series'} className={styles.footer__linksItem}>
							Сериалы
						</Link>
						<Link to={'/cartoons'} className={styles.footer__linksItem}>
							Мультфильмы
						</Link>
					</div>
					<div className={styles.footer__signature}>
						© 2022 Kinomore
					</div>
				</div>
			</div>

		</footer>
	)
}
