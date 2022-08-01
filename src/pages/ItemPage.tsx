import { useParams } from "react-router-dom"
import { ItemLeft } from "../components/ItemPage/ItemLeft/ItemLeft"
import { ItemRight } from "../components/ItemPage/ItemRight/ItemRight"
import { ItemTop } from "../components/ItemPage/ItemTop/ItemTop"
import { useGetFilmForIdQuery } from "../redux/services/kinopoisk.services"
import styles from '../components/ItemPage/itemPage.module.css'
import { ItemTabs } from "../components/ItemPage/ItemTabs/ItemTabs"
import { SimilarFilms } from "../components/ItemPage/SimilarFilms/SimilarFilms"
import { ItemReviews } from "../components/ItemPage/ItemReviews/ItemReviews"


export const ItemPage = () => {
	const { id } = useParams()
	const { data } = useGetFilmForIdQuery(Number(id))

	return (
		<section className={styles.item}>
			<div className="container">
				<ItemTop />
				<div className={styles.item__main}>
					<ItemLeft url={data?.poster.url} rating={data?.rating.kp} />
					<ItemRight data={data} />
				</div>
				<ItemTabs description={data?.description} actors={data?.persons} facts={data?.facts} />
				{data?.similarMovies?.length !== 0 && <SimilarFilms films={data?.similarMovies} />}
				<ItemReviews id={id} />
			</div>
		</section>

	)
}
