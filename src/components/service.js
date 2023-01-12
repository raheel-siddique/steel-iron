import React from "react";
import Navbar from "./global-components/navbar";
import PageHeader from "./commoncomponents/PageHeader";

// import AboutV5 from "./section-components/about-v5";
import ServiceV1 from "./section-components/service-v1";
// import BlogSlider from "./pages/home/blog-slider-v1";
// import CallToActionV1 from "./section-components/call-to-action-v1";
import Footer from "./global-components/footer";
import OwnNav from "./global-components/OwnNav";
import { motion } from "framer-motion";

const Service_V1 = () => {
  return (
    <motion.div 
    initial={{opacity:0}}
    animate={{opacity:1}}
    exit={{opacity:0}}

     
    >
      <OwnNav />
      <PageHeader pageTitle="Services" />

      {/* <AboutV5 /> */}
      <ServiceV1 />
      {/* <BlogSlider sectionClass="pt-120" /> */}
      {/* <CallToActionV1 /> */}
      <Footer />
    </motion.div>
  );
};

export default Service_V1;
