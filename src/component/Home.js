import OurnavBar from './navbar';
import Profile from './Profile';
import AboutUs from './homeabout';
import './Home.css';
import Skills from './Skills';
import Footer from './Footer';

function Home(){
    return(
        <>
        <div className='home_design'>
        <OurnavBar/>
        <Profile/>
        <AboutUs/>
        <Skills/>
        <Footer/>
        </div>
        </>
    );

}
export default Home;

