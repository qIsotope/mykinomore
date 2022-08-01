import { useEffect, useRef, useState } from 'react'
import { FiSearch, FiX } from 'react-icons/fi'
import { Link, useLocation } from 'react-router-dom'
import { useDebounce, useOnClickOutside } from 'usehooks-ts'
import { useAppSelector } from '../../../hooks/reduxHooks'
import { useGetFilmsByQueryQuery } from '../../../redux/services/kinopoisk.services'
import styles from './search.module.css'
import { SearchHeader } from './SearchHeader/SearchHeader'
import { SearchList } from './SearchList/SearchList'

export const Search = () => {
	const ref = useRef<HTMLDivElement>(null)
	const [value, setValue] = useState<string>('')
	const [show, setShow] = useState(false)
	const debouncedValue = useDebounce<string>(value, 600)
	const active = useAppSelector(state => state.query.value)
	const location = useLocation()
	const { refetch, data, isLoading, isFetching } = useGetFilmsByQueryQuery({ query: debouncedValue.trim(), type: active, limit: 40 })

	useOnClickOutside(ref, () => setShow(false))

	useEffect(() => {
		refetch()
		if (debouncedValue === '') {
			setShow(false)
		} else {
			setShow(true)
		}
	}, [debouncedValue])

	useEffect(() => {
		setValue('')
		setShow(false)
	}, [location.pathname])


	const clearInput = () => {
		setValue('')
		setShow(false)
	}

	const focus = () => {
		if (debouncedValue !== '') {
			setShow(true)
		}
	}


	return (
		<div className={styles.header__search} ref={ref}>
			<input value={value} onFocus={focus} onChange={(e) => setValue(e.target.value)} type="text"
				placeholder="Поиск..." />
			{value &&
				<FiX onClick={clearInput} className={styles.reset__value} />
			}
			<span><FiSearch className={styles.searchIcon} /></span>
			{show &&
				<div className={styles.search}>
					<SearchHeader />
					<SearchList movies={data} isFetching={isFetching} isLoading={isLoading} />
					<Link to={`/search/${value}`} className={styles.search__showAll}>Показать все</Link>
				</div>
			}
		</div>
	)
}
