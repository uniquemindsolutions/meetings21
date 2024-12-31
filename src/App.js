import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import './App.css';
import Header from './Header/Header';
import Home from './Screens/Home';
import AboutUs from './Screens/AboutUs';
import Meetings from './Screens/Meetings';
import Policies from './Screens/Policies';
import CodeOfConduct from './Screens/CodeOfConduct';
import Contacts from './Screens/Contacts';
import Footer from './Footer/footer';
import Events from './Screens/events';
import "@fortawesome/fontawesome-free/css/all.min.css";
import 'swiper/swiper.min.css';
import Blogs from './Screens/Blogs';
import Committee from './Screens/Committee';
import Topics from './Screens/Topics';
import Abstract from './Screens/Abstract';
// import '../node_modules/swiper/swiper.min.css';




function App() {
 
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/meetings" element={<Meetings />} />
        <Route path="/policies" element={<Policies />} />
        <Route path="/code-of-conduct" element={<CodeOfConduct />} />
        <Route path="/contact" element={<Contacts />} />
        <Route path="/events" element={<Events />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/committee" element={<Committee />} />
        <Route path="/topics" element={<Topics />} />
        <Route path="/abstract" element={<Abstract />} />
      </Routes>
      
      <Outlet />
      {/* <Footer /> */}
    </>
  );
}

export default App;
