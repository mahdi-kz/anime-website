import React, {useState, useEffect} from 'react';
import './App.css';
import Home from './screens/Home';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Products from './screens/Products';
import Services from './screens/Services';
import Awards from './screens/Awards';

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
				<Route path='/services' >
					<Services />
				</Route>
				<Route path='/awards' >
					<Awards />
				</Route>
			</Switch>
		</Router>
	</>
  );
}

export default App;
