import styles from './itemSubtitle.module.css'

export const ItemSubtitle = ({ children }: { children: string }) => {
	return (
		<div className={styles.item__subtitle}>
			{children}
		</div>
	)
}
