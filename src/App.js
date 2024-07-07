import AboutMePage from './component/AboutMePage';
import Home from './component/Home'
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import PortfolioPage from './component/PortfolioPage';
import ContactPage from './component/contactpage';
import ServicesPage from './component/ServicesPage';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/my_portfolioweb' element={<Home/>}></Route>
      <Route path='my_portfolioweb/home' element={<Home/>}></Route>
      <Route path='my_portfolioweb/about' element={<AboutMePage/>}></Route>
      <Route path='my_portfolioweb/portfolio' element={<PortfolioPage/>}></Route>
      <Route path='my_portfolioweb/contact' element={<ContactPage/>}></Route>
      <Route path='my_portfolioweb/services' element={<ServicesPage/>}></Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
