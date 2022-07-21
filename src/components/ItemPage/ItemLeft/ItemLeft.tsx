import styles from './itemLeft.module.css'


export const ItemLeft = ({ url }: { url: string | undefined }) => {
	return (
		<div className={styles.item__mainLeft}>
			<span className={styles.item__ratingHigh}>7.9</span>
			<img src={url} alt="" />
		</div>
	)
}
