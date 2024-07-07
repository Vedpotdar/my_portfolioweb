import React from 'react';
import AboutMePage from './component/AboutMePage';
import Home from './component/Home'
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import PortfolioPage from './component/PortfolioPage';
import ContactPage from './component/contactpage';
import ServicesPage from './component/ServicesPage';

function App() {
  return (
    <Router>
    <Switch>
      <Route path='/my_portfolioweb' component={<Home/>}></Route>
      <Route path='/home' component={<Home/>}></Route>
      <Route path='/about' component={<AboutMePage/>}></Route>
      <Route path='/portfolio' component={<PortfolioPage/>}></Route>
      <Route path='/contact' component={<ContactPage/>}></Route>
      <Route path='/services' component={<ServicesPage/>}></Route>
    </Switch>
    </Router>
  );
}

export default App;
