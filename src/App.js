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
        <Route path="/:name/:id/events" element={<Events />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/blog-details/:id" element={<BlogDetails />} />
        <Route path="/:name/:id/contact-us" element={<ContactsEvent />} />
        <Route path="/:name/:id/committee" element={<Committee />} />
        <Route path="/:name/:id/topics" element={<Topics />} />
        <Route path="/:name/:id/call-for-Abstracts" element={<Abstract />} />
        <Route path="/:name/:id/submit-abstract" element={<SubmitAbstract />} />
        <Route path="/:name/:id/awards" element={<Awards />} />
        <Route path="/:name/:id/sponsors" element={<Sponsors />} />
        <Route path="/:name/:id/venue" element={<Venue />} />
        <Route path="/:name/:id/speakers" element={<Speakers />} />
        <Route path="/:name/:id/programs" element={<Programs />} />
        <Route path="/:name/:id/registration_form" element={<RegistrationForm />} />
        <Route path="/:name/:id/presentation-guidelines" element={<PresentationGuidelines />} />
        <Route path="/:name/:id/online-registration" element={<OnlineRegistration />} />
        <Route path="/:name/:id/discount-form" element={<DiscountForm />} />
      </Routes>
      
      <Outlet />
      {/* <Footer /> */}
    </>
  );
}

export default App;
