import React, {useState, useEffect} from 'react';
import './App.css';
import Home from './screens/Home';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Products from './screens/Products';
import Customers from './screens/Customers';
import Services from './screens/Services';
import Awards from './screens/Awards';
import Contact_Us from './screens/Contact_Us';

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
					<Contact_Us />
				</Route>
			</Switch>
		</Router>
	</>
  );
}

export default App;
