import { Col, Row } from "antd";
import React from "react";
import { Link } from "react-router-dom";


const Banner=()=>{
    return(
        <>
  <Row>
    <Col lg={12} xs={24} className='hero_left_box'>

                      <div className="slide-video mb-50 d-none">
                        <a
                          className="ltn__video-icon-2 ltn__video-icon-2-border"
                          href="https://www.youtube.com/embed/tlThdr3O5Qo"
                          data-rel="lightcase:myCollection"
                        >
                          <i className="fa fa-play" />
                        </a>
                      </div>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "start",
                        }}
                      >
                        <div>
                          <img
                            src="./logo_Design 2.png"
                            alt="logi"
                            width="30"
                            height="30"
                          />
                        </div>
                        <div style={{ marginTop: 5, marginLeft: 10 }}>
                          <h6 className="slide-sub-title white-color--- animated">
                            Smart Crowd
                          </h6>
                        </div>
                      </div>
                      <h1 className="slide-title animated text-capitalize ">
                        Fractional real
                        <br /> estate investing
                      </h1>
                      <div className="slide-brief animated">
                        <p>
                          For the first time, investors around the globe can buy
                          into the US real estate market through
                          fully-compliant, fractional, tokenized ownership.
                          Powered by blockchain.
                        </p>
                      </div>
                      <div className="btn-wrapper animated ">
                        <Link
                          to="/marketplace"
                          className="theme-btn-1 btn btn-effect-1"
                          style={{
                            backgroundColor: "#6610f2",
                          }}
                        >
                          Get Started
                        </Link>
                      </div>
        
    </Col>
    <Col lg={12} xs={24} className='hero_right_sec_img'>
    {/* <div */}
                    {/* // className="slide-item-img"
                    // style={{ position: "relative", bottom: 20 }} */}
                  {/* > */}
                    <img
                      alt="banner"
                      src={
                       
                        "assets/img/banner/identity.png"
                      }
                      className="img-fluid banner-img"
                    />
                  {/* </div> */}
    </Col>

  </Row>
        </>
    )
}
export default Banner