import { IGenre } from "../redux/slices/filter"

export interface IFilterObject {
	rating: number[]
	year: number[]
	genre: IGenre
	sort: string
}