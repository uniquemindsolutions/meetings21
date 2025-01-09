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
import SubmitAbstract from './Screens/SubmitAbstract';
import Awards from './Screens/Awards';
import Sponsors from './Screens/Sponsors';
import Venue from './Screens/Venue';
import Speakers from './Screens/Speakers';
import Programs from './Screens/Programs';
import RegistrationForm from './Screens/registration_form';
import PresentationGuidelines from './Screens/PresentationGuidelines';
import DiscountForm from './Screens/DiscountForm';
import OnlineRegistration from './Screens/OnlineRegistration';
import PoliciesEvents from './Screens/PoliciesEvents';
import CompletedEvents from './Screens/CompletedEvents';
import ContactsEvent from './Screens/ContactsEvent';
import BlogDetails from './Screens/BlogDetails';


function App() {
 
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/upcoming-meetings" element={<Meetings />} />
        <Route path="/completed-meetings" element={<CompletedEvents />} />
        <Route path="/policies" element={<Policies />} />
        <Route path="/policies-event" element={<PoliciesEvents />} />
        <Route path="/code-of-conduct" element={<CodeOfConduct />} />
        <Route path="/contact" element={<Contacts />} />
        <Route path="/contact-us" element={<ContactsEvent />} />
        <Route path="/events" element={<Events />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/blog-details/:id" element={<BlogDetails />} />
        <Route path="/committee" element={<Committee />} />
        <Route path="/topics" element={<Topics />} />
        <Route path="/call-for-Abstracts" element={<Abstract />} />
        <Route path="/submit-abstract" element={<SubmitAbstract />} />
        <Route path="/awards" element={<Awards />} />
        <Route path="/sponsors" element={<Sponsors />} />
        <Route path="/venue" element={<Venue />} />
        <Route path="/speakers" element={<Speakers />} />
        <Route path="/programs" element={<Programs />} />
        <Route path="/registration_form" element={<RegistrationForm />} />
        <Route path="/online-registration" element={<OnlineRegistration />} />
        <Route path="/presentation-guidelines" element={<PresentationGuidelines />} />
        <Route path="/discount-form" element={<DiscountForm />} />
      </Routes>
      
      <Outlet />
      {/* <Footer /> */}
    </>
  );
}

export default App;
