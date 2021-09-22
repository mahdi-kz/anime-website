import React, {useState, useEffect} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import './App.css';
import Home from './screens/Home';
import Products from './screens/Products';
import Services from './screens/Services';
import SignUp from './screens/SignUp';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
      <Router>
				<Home />
				<Switch>
					<Route path='/' exact components={Home}/>
					<Route path='/products' exact components={Products}/>
					<Route path='/services' exact components={Services}/>
					<Route path='/sign-up' exact components={SignUp}/>
				</Switch>
			</Router>
    </>
  );
}

export default App;
