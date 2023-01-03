import React from "react";
import AddToCart from "../addtocart/AddToCart";
import Googlemap from "./Googlemap";
import "./propertyDetails.css";
import DetailHiglights from "./DetailHiglights";
import AboutProperty from "./AboutProperty";

const PropertyDescription = () => {



  return (
    <div
      style={{ backgroundColor: "rgb(234, 242, 247)" }}
      className="ltn__shop-details-area pb-10"
    >
      <div className="container">
        <div className="row mb-55">
          <div className="col-lg-2"></div>
          <div className="col-lg-8">
            <AddToCart />
          </div>
          <div className="col-lg-2"></div>
        </div>
        <div>
          <div className="row mt-5">
            <div className="col-lg-1"></div>
            <div className="ltn__shop-details-inner ltn__page-details-inner mb-60 col-lg-10">
              <h1 className="text-capitalize text-center">
                raheel siddique
              </h1>

              <DetailHiglights  />
{/* 
              {singlePropertyDetails?.data?.data.latitude &&
                singlePropertyDetails?.data?.data.longitude && (
                  <>
                    <h4 className="title-2">Location</h4>
                    <div className="property-details-google-map mb-60">
                      <Googlemap
                        lat={singlePropertyDetails?.data?.data.latitude}
                        long={singlePropertyDetails?.data?.data.longitude}
                      />
                    </div>
                  </>
                )} */}

              <br />
              <br />
              <br />
              <AboutProperty  />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyDescription;
