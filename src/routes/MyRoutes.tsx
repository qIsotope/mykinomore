import { HomePage } from '../pages/HomePage';
import { AllCartoonsPage } from "../pages/AllCartoonsPage";
import { AllFilmsPage } from '../pages/AllFilmsPage';
import { FavouritesPage } from '../pages/FavouritesPage';
import { AllSeriesPage } from '../pages/AllSeriesPage';
import { ItemPage } from '../pages/ItemPage';




export const routes = [
	{ path: '*', component: <HomePage /> },
	{ path: '/films', component: <AllFilmsPage /> },
	{ path: '/series', component: <AllSeriesPage /> },
	{ path: '/cartoons', component: <AllCartoonsPage /> },
	{ path: '/favourites', component: <FavouritesPage /> },
	{ path: '/film/:id', component: <ItemPage /> },
]