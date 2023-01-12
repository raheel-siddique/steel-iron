import { Col, Row } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import './Navbar.css';




const OwnNav=()=>{
    // let publicUrl = process.env.PUBLIC_URL + "/";
 
    return(
        <>
        {/* <h1>Navbar</h1> */}
        <Row className="main_nav_row" style={{backgroundColor:"black"}}>

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
            <Col lg={12}>
            <ul className="list_menu_nav" >
                          <li className="link_nav">
                            <Link to="/"> <span className="link_nav"> Home</span> </Link>
                          </li>
                          <li className="link_nav">
                            <Link to="/marketplace">
                            <span className="link_nav"> Marketplace</span>
                              </Link>
                          </li>

                          {/* <li className="link_nav">
                            <Link to="/about-us">
                            <span className="link_nav"> About Us</span>

                              </Link>
                          </li> */}
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
            <Col lg={7} className='btn_box'>
            <Link to="/faq">
                            <button className="link_nav_btn_about">About Us</button>
    
                              </Link>
            <Link to="/faq">
                            <button className="link_nav_btn">Contact Us</button>
    
                              </Link>
            </Col>

        </Row>
        </>
    )
}
export default OwnNav

.link_nav {
    color: silver;
    font-family: "Gumela";
    font-weight: normal;
    font-size: 20px;
    /* font-weight: normal; */
    /* position: relative;
    right: ; */
    /* position: relative; */
    /* right: 40px; */
    /* top: 4px; */

}

.link_nav_btn {
    /* background: linear-gradient(180deg, #fdc50f 26.71%, #fb982f 99.36%); */
    background-color: #FABF3A;
    box-shadow: 2px 2px 15px silver;
    border-radius: 34px;
    border: none;
    color: white;
    font-size: 16px;
    padding: 11px 26px 11px 26px;
}

.link_nav_btn_about {
    /* background: linear-gradient(180deg, #fdc50f 26.71%, #fb982f 99.36%); */
    background-color: white;
    box-shadow: 2px 2px 15px silver;
    border-radius: 34px;
    border: none;
    color: black;
    font-size: 16px;
    padding: 11px 26px 11px 26px;
}


.link_nav_btn_about:hover {
    background: #FABF3A;
    cursor: pointer;
    border: 1px solid silver;
    color: black;
}

.link_nav_btn:hover {
    background: white;
    cursor: pointer;
    border: 1px solid silver;
    color: black;
}

.link_nav:hover {
    color: #fb982f;

}

.main_nav_row {
    padding-top: 13px;
    padding-bottom: 15px;
    padding-left: 40px;
    padding-right: 40px;
}

.list_menu_nav {
    display: flex;
    justify-content: center;
    align-items: center;
    column-gap: 30px;
    list-style-type: none;
}

.img_box {
    display: flex;
    justify-content: left;
    align-items: center;
}

.btn_box {
    display: flex;
    justify-content: right;
    align-items: center;
    gap: 15px;

}

/* .nav_row {
    box-shadow: 2px 2px 10px red;

} */

@media screen and (max-width: 1000px) {
    .main_nav_row {
        display: none;

    }
}