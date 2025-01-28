import OurnavBar from "./navbar";
import Profile from "./Profile";
import './Home.css';
import AboutUs from "./homeabout";
import Skills from "./Skills";

function Home(){
    return(
        <>
        <div className="home_design">
        <OurnavBar/>
        <Profile/>
        <AboutUs/>
        <Skills/>
        </div>
        </>
    );
}
export default Home;