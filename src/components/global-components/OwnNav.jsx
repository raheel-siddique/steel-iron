import { Col, Row } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import './Navbar.css';




const OwnNav=()=>{
    // let publicUrl = process.env.PUBLIC_URL + "/";
 
    return(
        <>
        {/* <h1>Navbar</h1> */}
        <Row className="main_nav_row">

            <Col lg={5} className='img_box'>
            <Link to="/">
                        <img
                          style={{ width: 200 }}
                          className="img-fluid"
                          src={
                       
                            "assets/img/banner/amreli-logo.png"
                          }
                          alt="Logo"
                        />
                      </Link>
            </Col>
            <Col lg={14}>
            <ul className="list_menu_nav" >
                          <li className="link_nav">
                            <Link to="/"> <span className="link_nav"> Home</span> </Link>
                          </li>
                          <li className="link_nav">
                            <Link to="/marketplace">
                            <span className="link_nav"> Marketplace</span>
                              </Link>
                          </li>

                          <li className="link_nav">
                            <Link to="/about-us">
                            <span className="link_nav"> About Us</span>

                              </Link>
                          </li>
                          <li className="link_nav">
                            <Link to="/services">
                            <span className="link_nav"> Services</span>
                              
                              </Link>
                          </li>
                          <li className="link_nav">
                            <Link to="/team">
                            <span className="link_nav"> Team</span>
                              
                              </Link>
                          </li>
                          <li className="link_nav">
                            <Link to="/faq">
                            <span className="link_nav"> FAQs</span>
                              
                              </Link>
                          </li>
                        
                        </ul>
            </Col>
            <Col lg={5} className='btn_box'>
            <Link to="/faq">
                            <button className="link_nav_btn">Contact Us</button>
    
                              </Link>
            </Col>

        </Row>
        </>
    )
}
export default OwnNav