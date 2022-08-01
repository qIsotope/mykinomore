import { searchButtons } from '../../../../data/headerSearchButtons'
import { SearchButton } from './SearchButton/SearchButton'
import styles from './searchHeader.module.css'
export const SearchHeader = () => {

	return (
		<div className={styles.search__header}>
			<div className={styles.search__buttons}>
				{searchButtons.map(b => <SearchButton key={b.value} label={b.label} value={b.value} />)}
			</div>
		</div>
	)
}
