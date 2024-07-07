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
      <Route path='/my_portfolioweb' element={<Home/>}></Route>
      <Route path='/home' element={<Home/>}></Route>
      <Route path='/about' element={<AboutMePage/>}></Route>
      <Route path='/portfolio' element={<PortfolioPage/>}></Route>
      <Route path='/contact' element={<ContactPage/>}></Route>
      <Route path='/services' element={<ServicesPage/>}></Route>
    </Switch>
    </Router>
  );
}

export default App;
