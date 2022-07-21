import { IMovie } from '../../../types/IFilmsById'
import { createFilmInfo } from '../../../utils/createFilmInfo'
import { ItemButtons } from './ItemButtons/ItemButtons'
import { ItemInfo } from './ItemInfo/ItemInfo'
import { ItemOriginalTitle } from './ItemOriginalTitle/ItemOriginalTitle'
import { ItemSubtitle } from './ItemSubtitle/ItemSubtitle'
import { ItemTitle } from './ItemTitle/ItemTitle'
import styles from './itemRight.module.css'

interface IItemRight {
	data: IMovie | undefined

}

export const ItemRight = (props: IItemRight) => {

	const info = createFilmInfo(props.data)

	return (
		<div className={styles.item__mainRight}>
			<ItemTitle name={props.data?.name} year={props.data?.year} />
			<ItemOriginalTitle name={props.data?.alternativeName} />
			<ItemButtons />
			<ItemSubtitle />
			{info.map((item) => <ItemInfo key={item.label} caption={item.label} value={item.value} />)}

		</div>
	)
}
