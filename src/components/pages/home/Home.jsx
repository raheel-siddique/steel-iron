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
      <Banner/>
      

      <Counter />

      {/* <Featuresv1 customClass="ltn__feature-area section-bg-1 pt-120 pb-90 mb-120---" /> */}
      {/* <Testimonial /> */}
    <ServiceV5 />
      <AboutV1 />
      <Properties limit={3} />
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
