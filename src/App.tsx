import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';
import './styles/App.css';
import { Routes, Route } from 'react-router-dom'
import { routes } from './routes/MyRoutes';
import ScrollToTop from './utils/ScrollToTop';



function App() {



	return (
		<>
			<ScrollToTop />
			<Header />
			<Routes>
				{routes.map(r => <Route key={r.path} path={r.path} element={r.component} />)}
			</Routes>
			<Footer />
		</>
	);
}

export default App;
