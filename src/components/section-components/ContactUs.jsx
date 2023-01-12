import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import parse from 'html-react-pars <span>er';
import {  HomeOutlined, MessageOutlined, PhoneOutlined, RightOutlined } from '@ant-design/icons';

class ContactUs extends Component {

    render() {

        // let publicUrl = process.env.PUBLIC_URL+'/'

    return <div className="ltn__about-us-area  pb-90 ">
			  <div className="container">
			    <div className="row">
			      <div className="col-lg-6 align-self-center">
			        <div className="about-us-img-wrap about-img-left">
					<img
					style={{height:400, width:'100%'}}
                                className="img-fluid imgprop"
                                alt="properties"
								src={
                       
									"assets/img/banner/depositphotos_322160786-stock-photo-racial-trader-using-laptop-sitting.jpg"
								  }
                              />
			          <div className="about-us-img-info about-us-img-info-2 about-us-img-info-3">
			           
			          </div>
			        </div>
			      </div>
			      <div className="col-lg-6 align-self-center">
			        <div className="about-us-info-wrap">
			          <div className="section-title-area ltn__section-title-2--- mb-20">
			            <h6 className="section-subtitle section-subtitle-2 " style={{backgroundColor:'#FABF3A', color:'black'}}>Contact Us</h6>
			            <h1 style={{color:'white'}} className="section-title">Let's work together.
</h1>
<h1 style={{color:'white', fontSize:22}} className="section-title">Head office <span style={{position:"relative", bottom:8, left:5}}> <HomeOutlined  /></span></h1>
			            <p style={{color:'silver', fontSize:18}}>L-8 2,Al Naseer Suare F.B Area Karachi
infrastructure projects in Pakistan ,While we produce rebars in standard length of 12 meters</p>



  {/* sec */}

<h1 style={{color:'white', fontSize:22, paddingTop:20}} className="section-title">Phone Number </h1>
			            <p style={{color:'silver', fontSize:18}} className='section-title'>0300-3693228 <span style={{position:"relative", bottom:5, left:5}}><PhoneOutlined /></span> </p>


{/* third */}
<h1 style={{color:'white', fontSize:22, paddingTop:20}} className="section-title">Email Address</h1>
			          <a href="mailto:muhammediqbal383@gmail.com">  <p style={{color:'silver', fontSize:18}} className='section-title'>muhammediqbal383@gmail.com <span style={{position:"relative", bottom:5, left:5}}><MessageOutlined /></span></p></a>

  

			          </div>
			        
					  <div className="btn-wrapper animated ">
                   
                            <a href="mailto:muhammediqbal383@gmail.com" 
                            className="theme-btn-1 btn btn-effect-1 own_btn_getStart"
                            >

                          Send Email<RightOutlined style={{position:'relative', bottom:4}} />

                            </a>
                      </div>
			        </div>
			      </div>
			    </div>
			  </div>
			</div>
        }
}

export default ContactUs