import styles from './itemOriginalTitle.module.css'

export const ItemOriginalTitle = ({ name }: { name: string }) => {
	return (
		<div className={styles.item__originalTitle}>
			{name}
		</div>
	)
}
