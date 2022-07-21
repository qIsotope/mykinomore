import { FiSearch, } from 'react-icons/fi';
import styles from './header.module.css'
import { MyMenu } from '../_UI_Elements/MyMenu/MyMenu';
import { Link } from 'react-router-dom';


export const Header = () => {
	return (
		<header className={styles.header}>
			<div className="container">
				<div className={styles.header__wrapper}>
					<div className={styles.header__left}>
						<MyMenu />
						<Link to={''} className={styles.header__logo}>
							<img src="/assets/header/logo.svg" alt="NO LOGO" />
						</Link>
					</div>
					<div className={styles.header__search}>
						<input type="search" placeholder="Поиск..." />
						<span><FiSearch className={styles.searcIcon} /></span>
					</div>
					<div className={styles.header__login}>
						Войти
					</div>
				</div>
			</div>
		</header>
	)
}
