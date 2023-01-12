import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import Slider from './Slider';

class Slider extends Component {

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'
        let imagealt = 'image'

    return  <div style={{backgroundColor:'white', position:'relative', top:50}} className="ltn__slider-area ltn__slider-11  ltn__slider-11-slide-item-count-show--- ltn__slider-11-pagination-count-show--- section-bg-1">
			  <div className="ltn__slider-11-inner" >
			    <div className="ltn__slider-11-active" >
			      {/* slide-item */}
			      <div className="ltn__slide-item ltn__slide-item-2 ltn__slide-item-3-normal ltn__slide-item-3 ltn__slide-item-11">
			        <div className="ltn__slide-item-inner">
			          <div className="container">
			            <div className="row">
			              <div className="col-lg-12 align-self-center">
			                <div className="slide-item-info">
			                  <div className="slide-item-info-inner ltn__slide-animation">
			                    <div className="slide-video mb-50 d-none">
			                      <a className="ltn__video-icon-2 ltn__video-icon-2-border" href="https://www.youtube.com/embed/tlThdr3O5Qo" data-rel="lightcase:myCollection">
			                        <i className="fa fa-play" />
			                      </a>
			                    </div>
			                   
                          <h6 className="slide-sub-title white-color--- animated"><span><i className="fas fa-home" /></span> Jav Traders</h6>
                          <div className="slide-brief animated">
			                      <p>Making Homes Extra Secures with This Bar</p>
			                    </div>
                          <h1 className="slide-title animated ">Specification</h1>
			                    <div className="slide-brief animated">
			                      {/* <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore.</p> */}
			                    
                            <ul style={{lineHeight:1}} className="ltn__list-item-half">
                       <li>
			              {/* <i className="flaticon-home-2" /> */}
                    Minimum Tensile Strength
			            </li>
			            <li style={{color:'black'}}>
			              {/* <i className="flaticon-mountain" /> */}
                    8,000 PSI (500 MpA)


			            </li>
                  <li>
			              {/* <i className="flaticon-home-2" /> */}
                    Minimum Yeild Strength
			            </li>
			            <li style={{color:'black'}}>
			              {/* <i className="flaticon-mountain" /> */}
                    60,000 PSI (420 MpA)


			            </li>

                  <li>
			              {/* <i className="flaticon-home-2" /> */}
                    Maximum Yeild Strength
			            </li>
			            <li style={{color:'black'}}>
			              {/* <i className="flaticon-mountain" /> */}
                    78,000 PSI (520 MpA)


			            </li>
              
			           
			        
			          </ul>
                          </div>
			                    <div className="btn-wrapper animated">
			                      <Link style={{backgroundColor:"#FABF3A", color:'black'}} to="/services" className="theme-btn-1 btn btn-effect-1">Our Services</Link>
			                     
			                    </div>
			                  </div>
			                </div>
			                <div className="slide-item-img">
			                  <img src={"/assets/img/property/41b2uNRaOWL.jpg"} alt="#" />
			                </div>
			              </div>
			            </div>
			          </div>
			        </div>
			      </div>
			      {/* slide-item */}
			      <div className="ltn__slide-item ltn__slide-item-2 ltn__slide-item-3-normal ltn__slide-item-3 ltn__slide-item-11">
			        <div className="ltn__slide-item-inner">
              <div className="container">
			            <div className="row">
			              <div className="col-lg-12 align-self-center">
			                <div className="slide-item-info">
			                  <div className="slide-item-info-inner ltn__slide-animation">
			                    <div className="slide-video mb-50 d-none">
			                      <a className="ltn__video-icon-2 ltn__video-icon-2-border" href="https://www.youtube.com/embed/tlThdr3O5Qo" data-rel="lightcase:myCollection">
			                        <i className="fa fa-play" />
			                      </a>
			                    </div>
			                   
                          <h6 className="slide-sub-title white-color--- animated"><span><i className="fas fa-home" /></span> Jav Traders</h6>
                          <div className="slide-brief animated">
			                      <p>Making Homes Extra Secures with This Bar</p>
			                    </div>
                          <h1 className="slide-title animated ">Specification</h1>
			                    <div className="slide-brief animated">
			                      {/* <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore.</p> */}
			                    
                            <ul style={{lineHeight:1}} className="ltn__list-item-half">
                       <li>
			              {/* <i className="flaticon-home-2" /> */}
                    Minimum Tensile Strength
			            </li>
			            <li style={{color:'black'}}>
			              {/* <i className="flaticon-mountain" /> */}
                    8,000 PSI (500 MpA)


			            </li>
                  <li>
			              {/* <i className="flaticon-home-2" /> */}
                    Minimum Yeild Strength
			            </li>
			            <li style={{color:'black'}}>
			              {/* <i className="flaticon-mountain" /> */}
                    60,000 PSI (420 MpA)


			            </li>

                  <li>
			              {/* <i className="flaticon-home-2" /> */}
                    Maximum Yeild Strength
			            </li>
			            <li style={{color:'black'}}>
			              {/* <i className="flaticon-mountain" /> */}
                    78,000 PSI (520 MpA)


			            </li>
              
			           
			        
			          </ul>
                          </div>
                          <div className="btn-wrapper animated">
			                      <Link style={{backgroundColor:"#FABF3A", color:'black'}} to="/services" className="theme-btn-1 btn btn-effect-1">Our Services</Link>
			                     
			                    </div>
			                  </div>
			                </div>
			                <div className="slide-item-img">
			                  <img src={"assets/img/property/iron1.webp"} alt="#" />
			                </div>
			              </div>
			            </div>
			          </div>
			        </div>
			      </div>
			      {/* slide-item */}
			      <div className="ltn__slide-item ltn__slide-item-2 ltn__slide-item-3-normal ltn__slide-item-3 ltn__slide-item-11">
			        <div className="ltn__slide-item-inner">
              <div className="container">
			            <div className="row">
			              <div className="col-lg-12 align-self-center">
			                <div className="slide-item-info">
			                  <div className="slide-item-info-inner ltn__slide-animation">
			                    <div className="slide-video mb-50 d-none">
			                      <a className="ltn__video-icon-2 ltn__video-icon-2-border" href="https://www.youtube.com/embed/tlThdr3O5Qo" data-rel="lightcase:myCollection">
			                        <i className="fa fa-play" />
			                      </a>
			                    </div>
			                   
                          <h6 className="slide-sub-title white-color--- animated"><span><i className="fas fa-home" /></span> Jav Traders</h6>
                          <div className="slide-brief animated">
			                      <p>Making Homes Extra Secures with This Bar</p>
			                    </div>
                          <h1 className="slide-title animated ">Specification</h1>
			                    <div className="slide-brief animated">
			                      {/* <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore.</p> */}
			                    
                            <ul style={{lineHeight:1}} className="ltn__list-item-half">
                       <li>
			              {/* <i className="flaticon-home-2" /> */}
                    Minimum Tensile Strength
			            </li>
			            <li style={{color:'black'}}>
			              {/* <i className="flaticon-mountain" /> */}
                    8,000 PSI (500 MpA)


			            </li>
                  <li>
			              {/* <i className="flaticon-home-2" /> */}
                    Minimum Yeild Strength
			            </li>
			            <li style={{color:'black'}}>
			              {/* <i className="flaticon-mountain" /> */}
                    60,000 PSI (420 MpA)


			            </li>

                  <li>
			              {/* <i className="flaticon-home-2" /> */}
                    Maximum Yeild Strength
			            </li>
			            <li style={{color:'black'}}>
			              {/* <i className="flaticon-mountain" /> */}
                    78,000 PSI (520 MpA)


			            </li>
              
			           
			        
			          </ul>
                          </div>
			                    <div className="btn-wrapper animated">
			                      <Link to="/services" className="theme-btn-1 btn btn-effect-1">Our Services</Link>
			                      <a className="ltn__video-play-btn bg-white" href="/services" data-rel="lightcase">
			                        <i className="icon-play  ltn__secondary-color" />
			                      </a>
			                    </div>
			                  </div>
			                </div>
			                <div className="slide-item-img">
			                  <img src={"assets/img/property/iron1.webp"} alt="#" />
			                </div>
			              </div>
			            </div>
			          </div>
			        </div>
			      </div>
			      {/* slide-item */}
			  
			    </div>
			    {/* slider-4-pagination */}
			    <div className="ltn__slider-11-pagination-count">
			      <span className="count" />
			      <span className="total" />
			    </div>
			    {/* slider-sticky-icon */}
			    <div className="slider-sticky-icon-2">
			      <ul>
			        <li><a href="#" title="Facebook"><i className="fab fa-facebook-f" /></a></li>
			        <li><a href="#" title="Twitter"><i className="fab fa-twitter" /></a></li>
			        <li><a href="#" title="Linkedin"><i className="fab fa-linkedin" /></a></li>
			      </ul>
			    </div>
			    {/* slider-4-img-slide-arrow */}
			    <div className="ltn__slider-11-img-slide-arrow">
			      <div className="ltn__slider-11-img-slide-arrow-inner">
			        <div className="ltn__slider-11-img-slide-arrow-active">
			          <div className="image-slide-item">
			            <img src={"/assets/img/property/41b2uNRaOWL.jpg"} 
                  style={{height:80, width:80}}
                  
                  alt="Flower Image" />
			          </div>
			          <div className="image-slide-item">
			            <img src={"assets/img/property/iron1.webp"} 
                                  style={{height:80, width:80}}

        
                  
                  alt="Flower Image" />
			          </div>
			          {/* <div className="image-slide-item">
			            <img src={"/assets/img/property/41b2uNRaOWL.jpg"} alt="Flower Image" />
			          </div>
			          <div className="image-slide-item">
			            <img src={"/assets/img/property/41b2uNRaOWL.jpg"} alt="Flower Image" />
			          </div> */}
			        </div>
			        {/* slider-4-slide-item-count */}
			        <div className="ltn__slider-11-slide-item-count">
			          <span className="count" />
			          <span className="total" />
			        </div>
			      </div>
			    </div>
			  </div>
			</div>

        }
}

export default Slider;