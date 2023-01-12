import React from "react";
import PageHeader from "../commoncomponents/PageHeader";
import Footer_v1 from "../global-components/footer";
import OwnNav from "../global-components/OwnNav";
import ContactUs from "./ContactUs";


const ContactMain=()=>{
    return(
        <>
        <OwnNav />
        <PageHeader pageTitle="Contact Us" />
        <br />
        <ContactUs />
        <Footer_v1 />
        </>
    )
}

export default ContactMain