import React from "react";
import PageHeader from "../../commoncomponents/PageHeader";
import Footer_v1 from "../../global-components/footer";
import OwnNav from "../../global-components/OwnNav";
import Page_header from "../../global-components/page-header";
import FaqContent from "./FaqContent";
import { motion } from "framer-motion";

const Faq = () => {
  return (
    <>
    <motion.div 
  initial={{opacity:0}}
  animate={{opacity:1}}
  exit={{opacity:0}}
       
      >
      <OwnNav />
      <PageHeader pageTitle="FAQs" />
      <FaqContent />
      </motion.div>
      {
        // eslint-disable-next-line
        <Footer_v1 />
      }
    </>
  );
};
export default Faq;
