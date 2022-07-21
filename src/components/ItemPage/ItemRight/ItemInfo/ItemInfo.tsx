import styles from './itemInfo.module.css'

export const ItemInfo = ({ caption, value }: any) => {
	return (
		<div className={styles.item__info}>
			<div className={styles.item__infoItem}>
				<div className={styles.item__caption}>
					{caption}
				</div>
				<div className={styles.item__value}>
					{value}
				</div>
			</div>
		</div>
	)
}
