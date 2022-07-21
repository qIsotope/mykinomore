import { IFilm } from "./IFilms";

export interface ICatalogData {
	isLoading: boolean;
	isFetching: boolean;
	data: IFilm | undefined;
}