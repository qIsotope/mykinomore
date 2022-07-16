import styles from './catalogItemImage.module.css'


export const CatalogItemImage = (props: { image: string }) => {
	return (
		<div className={styles.catalog__itemImage}>
			<img className={styles.catalog__itemImg} src={props.image} alt="" />
		</div>
	)
}
