import React from "react";
import Navbar from "./global-components/navbar";
import TeamV1 from "./section-components/team-v2";
import CallToActionV1 from "./section-components/call-to-action-v1";
import Footer from "./global-components/footer";
import PageHeader from "./commoncomponents/PageHeader";
import OwnNav from "./global-components/OwnNav";
import { motion } from "framer-motion";

const Team_V1 = () => {
  return (
    <motion.div 
    initial={{opacity:0}}
    animate={{opacity:1}}
    exit={{opacity:0}}s

     
    >
      <OwnNav />
      <PageHeader pageTitle="Team" />
      <TeamV1 />
      {/* <CallToActionV1 /> */}
      <Footer />
    </motion.div>
  );
};

export default Team_V1;
