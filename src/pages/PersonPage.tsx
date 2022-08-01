import { useParams } from 'react-router-dom'
import { ItemTop } from '../components/ItemPage/ItemTop/ItemTop'
import styles from '../components/PersonPage/personPage.module.css'
import { useGetPersonByIdQuery } from '../redux/services/kinopoisk.services'
import { ItemLeft } from '../components/ItemPage/ItemLeft/ItemLeft'
import { ItemTitle } from '../components/ItemPage/ItemRight/ItemTitle/ItemTitle'
import { ItemOriginalTitle } from '../components/ItemPage/ItemRight/ItemOriginalTitle/ItemOriginalTitle'
import { ItemSubtitle } from '../components/ItemPage/ItemRight/ItemSubtitle/ItemSubtitle'
import { createPersonInfo } from '../utils/createPersonInfo'
import { ItemInfo } from '../components/ItemPage/ItemRight/ItemInfo/ItemInfo'
import { ItemTabs } from '../components/ItemPage/ItemTabs/ItemTabs'

export const PersonPage = () => {

	const params = useParams()
	const { data } = useGetPersonByIdQuery(Number(params?.id))


	const objWithInfo = createPersonInfo(data)
	return (
		<section className={styles.item}>
			<div className="container">
				<ItemTop />
				<div className={styles.item__main}>
					<ItemLeft url={data?.photo} />
					<div>
						<ItemTitle name={data?.name} />
						<ItemOriginalTitle name={data?.enName!} />
						<ItemSubtitle>
							О персоне
						</ItemSubtitle>
						{objWithInfo.map(i => <ItemInfo key={i.label} caption={i.label} value={i.value} />)}
					</div>
				</div>
				<ItemTabs filmsWithPerson={data?.movies} facts={data?.facts} />
			</div>
		</section>
	)
}
