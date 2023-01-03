import { Button } from "antd";
import React from "react";

import { Link } from "react-router-dom";
// import { toast } from "react-toastify";
import './Navbar.css';

// toast.configure();
const Navbar = () => {
 
  let publicUrl = process.env.PUBLIC_URL + "/";

  return (
    <>
      <>
        
            <div className="container">
              <div className="row">
                <div className="col-lg-3">
                  <div className="site-logo-wrap">
                    <div className="site-logo go-top">
                      <Link to="/">
                        <img
                          style={{ width: 200 }}
                          className="img-fluid"
                          src={publicUrl + "assets/img/logo-smart-crowd.png"}
                          alt="Logo"
                        />
                      </Link>
                    </div>
                    <div className="get-support clearfix d-none">
                      <div className="get-support-icon">
                        <i className="icon-call" />
                      </div>
                      <div className="get-support-info">
                        <h6>Get Support</h6>
                        <h4>
                          <a href="tel:+123456789">123-456-789-10</a>
                        </h4>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  
                        <ul className="" style={{display:'flex', listStyleType:'none', justifyContent:'space-around'}}>
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
                </div>

                <div className="col-lg-3">
                <Link to="/faq">
                            <Button type="primary" className="">Primary Button</Button>
    
                              </Link>
                </div>
               
              </div>
            </div>
          {/* </div> */}
 
      </>
    </>
  );
};

export default Navbar;
