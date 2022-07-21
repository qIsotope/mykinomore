import { ICatalogData } from "../../types/catalogDataTypes";
import { CatalogBody } from "./CatalogBody/CatalogBody";
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom'
import { resetFilters } from "../../redux/slices/filter";
import { useAppDispatch } from "../../hooks/reduxHooks";




export const Catalog = (props: ICatalogData) => {
	const location = useLocation()
	const dispatch = useAppDispatch()
	useEffect(() => {
		dispatch(resetFilters())
	}, [location.pathname])



	return (

		<div className="App">

			<CatalogBody data={props.data} isFetching={props.isFetching} isLoading={props.isLoading} />

		</div >
	)
}
