import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';
import { RightOutlined } from '@ant-design/icons';

class AboutV1 extends Component {

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'

    return <div className="ltn__about-us-area pt-120 pb-90 ">
			  <div className="container">
			    <div className="row">
			      <div className="col-lg-6 align-self-center">
			        <div className="about-us-img-wrap about-img-left">
					<img
					style={{height:400, width:'100%'}}
                                className="img-fluid imgprop"
                                alt="properties"
                                src={
									"assets/img/banner/construction-materials-isolated-on-white-260nw-637229398.webp"

                                }
                              />
			          <div className="about-us-img-info about-us-img-info-2 about-us-img-info-3">
			           
			          </div>
			        </div>
			      </div>
			      <div className="col-lg-6 align-self-center">
			        <div className="about-us-info-wrap">
			          <div className="section-title-area ltn__section-title-2--- mb-20">
			            <h6 className="section-subtitle section-subtitle-2 " style={{backgroundColor:'#FABF3A', color:'black'}}>About Us</h6>
			            <h1 style={{color:'white'}} className="section-title">Iron & Steel Dealers, General Order Suppliers
</h1>
			            <p style={{color:'silver', fontSize:23}}>we work to build your dreams into reality</p>
			            <p style={{color:'white', fontSize:18}}>Noor and campanys Maxima bars are perfect for all types of residential, commercial & mega
infrastructure projects in Pakistan ,While we produce rebars in standard length of 12 meters</p>

			          </div>
			          <ul className="ltn__list-item-half clearfix">
			            <li>
			              <i className="flaticon-home-2" />
			              Smart Home Design
			            </li>
			            <li>
			              <i className="flaticon-mountain" />
			              Beautiful Scene Around
			            </li>
			            <li>
			              <i className="flaticon-heart" />
			              Exceptional Lifestyle
			            </li>
			            <li>
			              <i className="flaticon-secure" />
			              Complete 24/7 Security
			            </li>
			          </ul>
			          <div className="ltn__callout bg-overlay-theme-05  mt-30">
			            <p style={{color:'silver', fontSize:23}}>"risk a deal embrace a bigger target" </p>
			          </div>
			        
					  <div className="btn-wrapper animated ">
                        <Link
                          to="/marketplace"
                          className="theme-btn-1 btn btn-effect-1 own_btn_getStart"
                        
                        >
                          Our Services  <RightOutlined style={{position:'relative', bottom:4}} />
                        </Link>
                      </div>
			        </div>
			      </div>
			    </div>
			  </div>
			</div>
        }
}

export default AboutV1