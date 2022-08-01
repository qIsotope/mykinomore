import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';
import './styles/App.css';
import { Routes, Route, useLocation } from 'react-router-dom'
import { routes } from './routes/MyRoutes';
import ScrollToTop from './utils/ScrollToTop';
import NProgress from 'nprogress'
import 'nprogress/nprogress.css';
import { useEffect } from 'react';


function App() {
	const location = useLocation()
	const isRoomPage = location.pathname.includes('room')
	NProgress.configure({
		showSpinner: false,
	})


	useEffect(() => {
		NProgress.start();
		NProgress.done();
	}, [location.pathname]);




	return (
		<>
			<ScrollToTop />
			{!isRoomPage && <Header />}
			<Routes>
				{routes.map(r => <Route key={r.path} path={r.path} element={r.component} />)}
			</Routes>
			{!isRoomPage && <Footer />}
		</>
	);
}


export default App