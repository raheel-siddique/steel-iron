import React, { useEffect } from "react";
// import Banner from "./banner";
import Counter from "./counter-v1";
// import Featuresv1 from "./features-v1";
import Properties from "../marketplace/Properties";
// import Navbar from "../../global-components/navbar";
import Footer_v1 from "../../global-components/footer";
import Testimonial from './testimonial-v1';
// import PropertySlider from '../marketplace/PropertySlider';
// import BlogSlider from './blog-slider-v1';
// import AboutV4 from "../../section-components/about-v4";
// import About_v1 from '../../about';
import AboutV1 from '../../section-components/about-v1';
import ContactForm from "../../section-components/contact-form";
// import Service_V1 from "../../service";
import ServiceV5 from "../../section-components/service-v1";
import OwnNav from "../../global-components/OwnNav";
import Banner from "./Banner";
import "./Home.css";
import ContactUs from "../../section-components/ContactUs";
// import PortfolioV1 from "../../section-components/portfolio-v2";
import PortfolioV2 from '../../portfolio-v2';
import BlogSlider from "./blog-slider-v1";
import Sponsor from '../../section-components/sponsor-v1';
import PortfolioV1 from '../../section-components/portfolio-v1';
import WishList from "../../section-components/wishlist";
import WishlistPage from '../../wishlist';
import Client from "../marketplace/Client";
import BannerV2 from '../../section-components/banner-v2';
import BannerV3 from '../../section-components/banner-v3';
import BannerV5 from '../../section-components/banner-v5';
import Slider from "./Slider";
import { motion } from "framer-motion";

const Home = () => {
 

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  
 

  return (
    <>

    <div className="home_main_box" >


       
      
      <OwnNav />
      {/* <AnimatePresence initial={false} mode={"wait"}> */}
      
     
      <Slider />
      {/* </AnimatePresence> */}
      {/* <Banner/> */}
      

      <Counter />

      {/* <Featuresv1 customClass="ltn__feature-area section-bg-1 pt-120 pb-90 mb-120---" /> */}
      {/* <Testimonial /> */}
    <ServiceV5 />
      <AboutV1 />
      <Client />

      {/* <Properties limit={3} /> */}
      <ContactUs />

      </div>

      {/* <ContactForm /> */}
  
      {/* <PropertySlider /> */}
      {/* <BlogSlider customClass="section-subtitle-2" /> */}
      {/* { */}
        {/* // eslint-disable-next-line */}
        <Footer_v1 />
      {/* } */}
    </>
  );
};

export default Home;
