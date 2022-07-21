import styles from './myMenu.module.css'
import { GiHamburgerMenu } from 'react-icons/gi';
import { useEffect, useRef, useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai'
import { useOnClickOutside } from 'usehooks-ts'
import { Link, useLocation } from 'react-router-dom'
import { items } from '../../../data/menuItems';



export const MyMenu = () => {
	const location = useLocation()

	const [show, setShow] = useState(false)
	const ref = useRef<HTMLDivElement>(null)
	useOnClickOutside(ref, () => setShow(false))

	useEffect(() => {
		setShow(false)
	}, [location.pathname])

	return (
		<>
			{show
				? <AiOutlineClose className={styles.header__menuBars} onClick={() => setShow(!show)} />
				: <GiHamburgerMenu className={styles.header__menuBars} onClick={() => setShow(!show)} />
			}
			<div ref={ref} className={show ? styles.header__menuOpen : styles.header__menu}>
				<div className={styles.header__menuList}>
					{items.map(item => <Link to={item.href} key={item.text}
						className={location.pathname === item.href ? styles.header__menuItemActive : styles.header__menuItem}>
						<span className={styles.header__menuItemIcon}>{item.icon}</span> {item.text}
					</Link>)}
				</div>
			</div>
		</>
	)
}
