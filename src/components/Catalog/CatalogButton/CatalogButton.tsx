import { MyButton } from '../../_UI_Elements/MyButton/MyButton'
import styles from './catalogButton.module.css'

interface ICatalogButton {
	white?: boolean;
	children: string;
}

export const CatalogButton = (props: ICatalogButton) => {
	return (
		<div>
			<MyButton className={props.white ? styles.catalog__buttonWhite : styles.catalog__button}>
				{props.children}
			</MyButton>
		</div>
	)
}
