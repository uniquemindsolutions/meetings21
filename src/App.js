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
      </Routes>
      
      <Outlet />
      {/* <Footer /> */}
    </>
  );
}

export default App;
