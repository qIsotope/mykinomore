import { MyButton } from '../../_UI_Elements/MyButton/MyButton';

import styles from './itemPageButton.module.css'



export const ItemPageButton = ({ children, update, limit, total }:
	{ children: string, update: (limit: number) => void, limit: number, total: number | undefined }) => {

	return (
		<>
			<div className={styles.item__pageContainer}>
				<MyButton disabled={!!total && limit >= total} className={styles.item__pageButton} onClick={() => { update(limit + 3) }}>
					{children}
				</MyButton>
			</div>
		</>
	)
}
