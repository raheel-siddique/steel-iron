import { Col, Row } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import { RightOutlined } from "@ant-design/icons";


const Banner=()=>{
    return(
        <>
  <Row style={{marginTop:40}}>
  <Col
          lg={11}
          md={24}
          xs={24}
          className='hero_left_box'
        >
          {/* <div className="slide-item-info-inner ltn__slide-animation"> */}
          <div className='imgae_hero_content_box '>
          <h1 style={{color:'white'}} className="section-title slide-sub-title white-color--- animated">Company Profile
			             </h1>
    
            <p className='imgae_hero_description_first slide-title animated '>
            Established in 1972, a company strived to be at its
foremost, a solution to individuals, local and
international businesses. the company has always
believed in staying ahead of the curve.
               </p>
               {/* </div> */}
                          <div className="btn-wrapper animated ">
                        <Link
                          to="/marketplace"
                          className="theme-btn-1 btn btn-effect-1 own_btn_getStart"
                        
                        >
                          Learn more  <RightOutlined style={{position:'relative', bottom:4}} />
                        </Link>
                      </div>
                          
          </div>

        </Col>
        <Col lg={1}></Col>
    <Col lg={12} xs={24} className='hero_right_sec_img'>
    {/* <div */}
                    {/* // className="slide-item-img"
                    // style={{ position: "relative", bottom: 20 }} */}
                  {/* > */}
                    <img
                    // style={{width:"95%", height:400}}
                      alt="banner"
                      src={
                       
                        "assets/img/banner/hero-block-stacking.png"
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