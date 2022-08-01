import { IFact } from '../../../../types/IFilmsById';
import styles from './itemFacts.module.css'


export const ItemFacts = ({ facts }: { facts: IFact[] | undefined }) => {

	return (
		<>
			<div className={styles.item__factsTitle}>Знаете ли вы, что...</div>
			{
				facts?.map((f) => <div key={f.value} className={styles.item__factsSingle}
					dangerouslySetInnerHTML={{ __html: f.value }} ></div>)
			}
		</>

	)
}
