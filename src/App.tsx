import './styles/App.css';
import { Header } from './components/Header/Header';
import { Home } from './components/Home/Home';
import { MainFilms } from './components/MainFilms/MainFilms';
import { MainSeries } from './components/MainSeries/MainSeries';
import { Footer } from './components/Footer/Footer';



function App() {

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
	);
}

export default App;
