import React from "react";
import Navbar from "./global-components/navbar";
import PageHeader from "./global-components/page-header";
// import AboutV4 from "./section-components/about-v4";
// import Features from "./pages/home/features-v1";
// import Team from "./section-components/team-v1";
// import Testimonial from "./pages/home/testimonial-v1";
// import BlogSlider from "./pages/home/blog-slider-v1";
// import CallToActionV1 from "./section-components/call-to-action-v1";
import Footer from "./global-components/footer";
import About_v1 from './about';
import OwnNav from "./global-components/OwnNav";

const About_v1_Own = () => {
  return (
    <div>
      <OwnNav />
      <PageHeader headertitle="About Us" />
      <About_v1 />
     
      <Footer />
    </div>
  );
};

export default About_v1_Own;
