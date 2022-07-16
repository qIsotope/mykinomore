import styles from './myLoader.module.css'

export const MyLoader = () => {
	return (
		<div className={styles.loader}>
			<div className={styles.loader__body}>
				<img src="./assets/Loader.gif" alt="" />
			</div>
		</div>
	)
}
