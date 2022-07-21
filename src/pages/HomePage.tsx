
import { Home } from "../components/HomePage/Home/Home"
import { MainFilms } from "../components/HomePage/MainFilms/MainFilms"
import { MainSeries } from "../components/HomePage/MainSeries/MainSeries"




export const HomePage = () => {
	return (
		<>
			<Home />
			<section className='movies-block'>
				<div className="container">
					<MainFilms />
					<MainSeries />
				</div>
			</section>
		</>
	)
}
