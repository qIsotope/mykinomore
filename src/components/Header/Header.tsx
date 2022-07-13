import { GiHamburgerMenu } from 'react-icons/gi';
import { FiSearch } from 'react-icons/fi';
import styles from './header.module.css'

export const Header = () => {
	return (
		<header className={styles.header}>
			<div className="container">
				<div className={styles.header__wrapper}>
					<div className={styles.header__left}>
						<GiHamburgerMenu className={styles.header__menuBars} />
						<div className={styles.header__logo}>
							<img src="./assets/header/logo.svg" alt="" />
						</div>
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
