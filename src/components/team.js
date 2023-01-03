import React from "react";
import Navbar from "./global-components/navbar";
import TeamV1 from "./section-components/team-v2";
import CallToActionV1 from "./section-components/call-to-action-v1";
import Footer from "./global-components/footer";
import PageHeader from "./commoncomponents/PageHeader";

const Team_V1 = () => {
  return (
    <div>
      <Navbar />
      <PageHeader pageTitle="Team" />
      <TeamV1 />
      <CallToActionV1 />
      <Footer />
    </div>
  );
};

export default Team_V1;
