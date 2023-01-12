import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Social from "../section-components/social";
import Copyright from "./copyright";
import "./Footer.css";

const Footer_v1 = () => {

  useEffect(() => {
    const $ = window.$;

    let publicUrl = process.env.PUBLIC_URL + "/";
    const minscript = document.createElement("script");
    minscript.async = true;
    minscript.src = publicUrl + "assets/js/main.js";

    document.body.appendChild(minscript);

    $(".go-top")
      .find("a")
      .on("click", function () {
        $(".quarter-overlay").fadeIn(1);

        $(window).scrollTop(0);

        setTimeout(function () {
          $(".quarter-overlay").fadeOut(300);
        }, 800);
      });

    $(document).on("click", ".theme-btn-1 ", function () {
      $("div").removeClass("modal-backdrop");
      $("div").removeClass("show");
      $("div").removeClass("fade");
      $("body").attr("style", "");
    });
  }, []);
  let publicUrl = process.env.PUBLIC_URL + "/";
  return (
    <>
      <footer style={{padding:0}} className="ltn__footer-area">
        <div  style={{backgroundColor:"white", border:"1px solid silver", marginLeft:10,marginRight:10}} className="footer-top-area  section-bg-2 plr--5">
          <div className="container">
            <div className="row">
              <div className="col-xl-4 col-md-6 col-sm-6 col-12">
                <div className="footer-widget footer-about-widget">
                  <div className="site-logo-wrap">
                    <div className="site-logo go-top">
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
                    </div>
                  </div>
                  <p className="justify-text mt-2" style={{color:'gray'}}>
                  Jav Traders Maxima bars are perfect for all types of residential
                  </p>
                  <div className="footer-address">
                    <ul>
                      <li>
                    <div className="footer-address-icon">
                          <i className="icon-placeholder" style={{color:'gold'}} />
                        </div> 
                        <div className="footer-address-info">
                          <p style={{color:'black'}}>L-8 2,Al Naseer Suare F.B Area Karachi</p>
                        </div> 
                      </li>
                      <li>
                        <div className="footer-address-icon">
                          <i className="icon-call" style={{color:'red'}} />
                        </div>
                        <div className="footer-address-info">
                          <p style={{color:'black'}}>
                            0300-3693228
                          </p>
                        </div>
                      </li>
                      <li>
                        <div className="footer-address-icon">
                          <i className="icon-mail" style={{color:'gold'}} />
                        </div>
                        <div className="footer-address-info">
                          <p style={{color:'black'}}>
                            <a href="mailto:muhammediqbal383@gmail.com">
                            muhammediqbal383@gmail.com
                            </a>
                          </p>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div className="ltn__social-media mt-20">
                    <Social />
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-md-6 col-sm-6 col-12" style={{margin:'auto'}}>
                <div className="footer-widget footer-menu-widget clearfix">
                  <h4 className="footer-title" style={{color:'black'}}>Company</h4>
                  <div className="footer-menu go-top">
                    <ul>
                      <li style={{color:'black'}}>
                        <Link to="/about">About</Link>
                      </li>
                      
                      <li style={{color:'black'}}>
                        <Link to="/shop">Products</Link>
                      </li>
                      <li style={{color:'black'}}>
                        <Link to="/contact">Contact</Link>
                      </li>
                      <li style={{color:'black'}}>
                        <Link to="/faq">FAQs</Link>
                      </li>
                     
                      <li style={{color:'black'}}>
                        <Link to="/contact">Contact us</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-md-6 col-sm-6 col-12" style={{margin:'auto'}}>
                <div className="footer-widget footer-menu-widget clearfix">
                  <h4 className="footer-title" style={{color:'black'}}>Services</h4>
                  <div className="footer-menu go-top">
                    <ul>
                      <li style={{color:'black'}}>
                        <Link to="/services">Services</Link>
                      </li>
                      
                      <li style={{color:'black'}}>
                        <Link to="/">Products</Link>
                      </li>
                      <li style={{color:'black'}}>
                        <Link to="/contact">Contact</Link>
                      </li>
                      <li style={{color:'black'}}>
                        <Link to="/faq">FAQs</Link>
                      </li>
                     
                      <li style={{color:'black'}}>
                        <Link to="/contact">Contact us</Link>
                      </li>
                    </ul>
                  </div>
                 
                </div>
              </div>
          
            
            </div>
          </div>
        </div>
        <Copyright />
      </footer>
    </>
  );
};
export default Footer_v1;
