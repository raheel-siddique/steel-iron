import React from "react";
import PageHeader from "../../commoncomponents/PageHeader";
import Footer_v1 from "../../global-components/footer";
import OwnNav from "../../global-components/OwnNav";
import AboutV1 from "../../section-components/about-v1";
import "./Home.css";

const About = () => {

  return (
   <>
<OwnNav />
<PageHeader pageTitle='About Us' />
<AboutV1 />
<Footer_v1 />
   </>
  );
};

export default About;
