import styles from './itemTitle.module.css'

export const ItemTitle = ({ name, year }: { name: string | undefined, year?: number | undefined }) => {
	return (
		<>
			{year
				? <div className={styles.item__title}>
					{name} ({year})
				</div>
				: <div className={styles.item__title}>
					{name}
				</div>
			}

		</>
	)
}
