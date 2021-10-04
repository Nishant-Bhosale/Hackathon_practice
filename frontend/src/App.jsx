import styles from './App.module.css';
import {
	BrowserRouter as Router,
	Switch,
	Route,
} from 'react-router-dom';

//Importing container (stateful) components
import Home from './containers/Home/Home';
import Login from './containers/Account/Login';
import Posted from './containers/Posted/Posted';

//Importing presentational (stateless) components
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Profile from './components/Profile/Profile';
import Saved from './components/Saved/Saved';

function App() {
	return (
		<div id={styles.mainContainer}>
			<Router>
				<Navbar />
				<div id={styles.contentWrap}>
					<Switch>
						<Route exact path='/'>
							<Home />
						</Route>
						<Route exact path='/account'>
							<Login />
						</Route>
						<Route exact path='/userContent'>
							<Posted />
						</Route>
						<Route exact path='/saved'>
							<Saved />
						</Route>
						<Route exact path='/profile'>
							<Profile />
						</Route>
					</Switch>
				</div>
				<Footer />
			</Router>
		</div>
	)
}

export default App;
