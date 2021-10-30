import React from 'react';
import './App.css';
import Home from './screens/Home';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Products from './screens/Products';
import Customers from './screens/Customers';
import Services from './screens/Services';
import Awards from './screens/Awards';
import ContactUs from './screens/Contact_Us';
import AboutUs from './screens/About_Us';
import Teams from './screens/Team';
import './index.css';

function App() {
  return (
    <>
		<Router>
			<Switch>
				<Route path='/' exact >
					<Home />
				</Route>
				<Route path='/products' >
					<Products />
				</Route>
				<Route path='/customers' >
					<Customers />
				</Route>
				<Route path='/services' >
					<Services />
				</Route>
				<Route path='/awards' >
					<Awards />
				</Route>
				<Route path='/contact_us' >
					<ContactUs />
				</Route>
				<Route path='/about_us' >
					<AboutUs />
				</Route>
				<Route path='/team' >
					<Teams />
				</Route>
			</Switch>
		</Router>
	</>
  );
}

export default App;
