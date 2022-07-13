import React from 'react'
import { CatalogContent } from '../CatalogContent/CatalogContent'
import { CatalogHeader } from '../CatalogHeader/CatalogHeader'

import styles from './catalogBody.module.css'


export const CatalogBody = () => {
	return (
		<section className={styles.catalog}>
			<div className="container">
				<CatalogHeader />
				<CatalogContent />
			</div>
		</section >
	)
}
