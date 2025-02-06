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
import TermsAndConditions from './Screens/TermsAndConditions';
import PrivacyPolicy from './Screens/PrivacyPolicy';


function App() {
 
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/upcoming-meetings" element={<Meetings />} />
        <Route path="/completed-meetings" element={<CompletedEvents />} />
        <Route path="/policies" element={<Policies />} />
        <Route path="/code-of-conduct" element={<CodeOfConduct />} />
        <Route path="/contact" element={<Contacts />} />
        <Route path="/contact" element={<Contacts />} />
        <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/:id/:name/" element={<Events />} />
        <Route path="/:name" element={<Events />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/blog-details/:id" element={<BlogDetails />} />
        <Route path="/:name/contact-us" element={<ContactsEvent />} />
        <Route path="/:name/conference-policies" element={<PoliciesEvents />} />
        <Route path="/:name/committee" element={<Committee />} />
        <Route path="/:name/topics" element={<Topics />} />
        <Route path="/:name/call-for-Abstracts" element={<Abstract />} />
        <Route path="/:name/submit-abstract" element={<SubmitAbstract />} />
        <Route path="/:name/awards" element={<Awards />} />
        <Route path="/:name/sponsors" element={<Sponsors />} />
        <Route path="/:name/venue" element={<Venue />} />
        <Route path="/:name/speakers" element={<Speakers />} />
        <Route path="/:name/program" element={<Programs />} />
        <Route path="/:name/registration-fee" element={<RegistrationForm />} />
        <Route path="/:name/presentation-guidelines" element={<PresentationGuidelines />} />
        <Route path="/:name/online-registration" element={<OnlineRegistration />} />
        <Route path="/:name/discount-form" element={<DiscountForm />} />
      </Routes>
      
      <Outlet />
      {/* <Footer /> */}
    </>
  );
}

export default App;
