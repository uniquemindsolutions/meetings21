import React, {useEffect} from 'react';
import BannerSection from './Home/banner-section';
import AboutSection from './Home/about-section';
import "bootstrap/dist/css/bootstrap.min.css";
import { SwiperSlide } from 'swiper/react';
import AOS from "aos";
import "aos/dist/aos.css";
import EventSection from './Home/event-section';
import SpeakerSection from './Home/speakers-section';
import PricingSection from './Home/pricing-section';
import Footer from '../Footer/footer';
import Services from './Home/services';
import SubscribeSection from './Home/subscribe-section';
import Header from '../Header/Header';




const Home = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      once: true,     // Whether animation should happen only once
    });
  }, []);
  return (
    <div className='home-p'>
      <Header />
      <BannerSection />
      <AboutSection />
      <Services />
      {/* <EventSection /> */}
      {/* <SpeakerSection /> */}
     
      <SubscribeSection />
      <PricingSection />
      <Footer />
    </div>
  )
}

export default Home