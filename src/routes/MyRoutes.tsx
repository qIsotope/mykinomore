import { HomePage } from '../pages/HomePage';
import { AllCartoonsPage } from "../pages/AllCartoonsPage";
import { AllFilmsPage } from '../pages/AllFilmsPage';
import { FavouritesPage } from '../pages/FavouritesPage';
import { AllSeriesPage } from '../pages/AllSeriesPage';
import { ItemPage } from '../pages/ItemPage';
import { PersonPage } from '../pages/PersonPage';
import { SearchedFilmsPage } from '../pages/SearchedFilmsPage';
import { RoomPage } from '../pages/RoomPage';
import { NotFoundPage } from '../pages/NotFoundPage';




export const routes = [
	{ path: '', component: <HomePage /> },
	{ path: '/films', component: <AllFilmsPage /> },
	{ path: '/series', component: <AllSeriesPage /> },
	{ path: '/cartoons', component: <AllCartoonsPage /> },
	{ path: '/favourites', component: <FavouritesPage /> },
	{ path: '/film/:id', component: <ItemPage /> },
	{ path: '/name/:id', component: <PersonPage /> },
	{ path: '/search/:query', component: <SearchedFilmsPage /> },
	{ path: '/room/:id', component: <RoomPage /> },
	{ path: '/*', component: <NotFoundPage /> },
]