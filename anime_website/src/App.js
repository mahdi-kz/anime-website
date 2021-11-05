import React from 'react';
import './App.css';
import Home from './screens/Home';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Customers from './screens/Customers';
import Products from './screens/services/Products';
import Training from './screens/services/Training';
import SocialMedia from './screens/services/Social_Media';
import GraphicsDesign from './screens/services/Graphic_Design'
import Awards from './screens/Awards';
import ContactUs from './screens/Contact_Us';
import AboutUs from './screens/About_Us';
import Teams from './screens/Team';
import Admin from './admin/Admin'
import './index.css';

function App() {
  return (
    <>
		<Router>
			<Switch>
				<Route path='/' exact >
					<Home />
				</Route>
				<Route path='/customers' >
					<Customers />
				</Route>
				<Route path='/products' >
					<Products />
				</Route>
				<Route path='/graphicDesign' >
					<GraphicsDesign />
				</Route>
				<Route path='/socialMedia' >
					<SocialMedia />
				</Route>
				<Route path='/training' >
					<Training />
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
				<Route path='/admin'>
				    <Admin />
				</Route>
			</Switch>
		</Router>
	</>
  );
}

export default App;
