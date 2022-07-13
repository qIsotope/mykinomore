import { FC } from "react"
import { MyButton } from "../../_UI_Elements/MyButton/MyButton"
import styles from './home.module.css'
import { FiArrowRight } from 'react-icons/fi';


export const Home: FC = () => {
	return (
		<section className={styles.home}>
			<div className="container">
				<div className={styles.home__textBlock}>
					<div className={styles.home__title}>Доктор Стрэндж: В мультивселенной безумия</div>
					<div className={styles.home__info}>Продолжение магических приключений Доктора Стрэнджа в новых мистических мирах и в противостоянии с новыми врагами.</div>
					<div className={styles.home__button}>
						<MyButton>
							Подробнее <FiArrowRight className={styles.home__buttonIcon} />
						</MyButton>
					</div>
				</div>
			</div>
		</section>
	)
}
