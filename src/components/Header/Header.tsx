import styles from './header.module.css'
import { MyMenu } from '../_UI_Elements/MyMenu/MyMenu';
import { Link } from 'react-router-dom';
import { Search } from './Search/Search';
import { useAppSelector } from '../../hooks/reduxHooks';


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
					<Search />
					<div className={styles.header__login}>
						Войти
					</div>
				</div>
			</div>
		</header>
	)
}
