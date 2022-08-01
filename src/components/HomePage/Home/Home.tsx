import { FC } from "react"
import { MyButton } from "../../_UI_Elements/MyButton/MyButton"
import styles from './home.module.css'
import { FiArrowRight } from 'react-icons/fi';
import { Link } from "react-router-dom";


export const Home: FC = () => {
	return (
		<section className={styles.home}>
			<div className="container">
				<div className={styles.home__textBlock}>
					<div className={styles.home__title}>Тор: Любовь и гром</div>
					<div className={styles.home__info}>Джейн Фостер берет на себя обязанности Бога-громовержца и становится обладательницей молота Мьёльнира.</div>
					<div className={styles.home__button}>
						<Link to='/film/1282688'>
							<MyButton>
								Подробнее <FiArrowRight className={styles.home__buttonIcon} />
							</MyButton>
						</Link>
					</div>
				</div>
			</div>
		</section>
	)
}
