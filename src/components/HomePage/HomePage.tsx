import { Footer } from "../Footer/Footer"
import { Header } from "../Header/Header"
import { Home } from "./Home/Home"
import { MainFilms } from "./MainFilms/MainFilms"
import { MainSeries } from "./MainSeries/MainSeries"




export const HomePage = () => {
  return (
	<div className="App">
			<Header />
			<Home />
			<section className='movies-block'>
				<div className="container">
					<MainFilms />
					<MainSeries />
				</div>
			</section>
			<Footer />
		</div>
  )
}
