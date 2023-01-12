import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ServiceV5 extends Component {

    render() {


    return <div className="ltn__service-area section-bg-1 pt-115 pb-70 go-top">
				<div className="container">
				<div className="row">
					<div className="col-lg-12">
					<div className="section-title-area ltn__section-title-2--- text-center">
						<h6 style={{backgroundColor:'#FABF3A', color:'black'}} className="section-subtitle section-subtitle-2 ">Our Services</h6>
						<h1 className="section-title" style={{color:'white'}}>Our Core Services</h1>
					</div>
					</div>
				</div>
				<div className="row  justify-content-center" >
					<div  className="col-lg-4 col-sm-6 col-12" >
					<div  className="ltn__feature-item ltn__feature-item-6 text-center   box-shadow-1" style={{backgroundColor:'silver', height:250}}>
						<div   className="ltn__feature-icon">
						<span><i className="flaticon-house" /></span>
						</div>
						<div className="ltn__feature-info">
						<h3 style={{color:'black'}}><Link to="/service-details">Construction</Link></h3>
						<p style={{color:'black'}}>We Prepare Everything you need for your next house</p>
						</div>
					</div>
					</div>
					<div className="col-lg-4 col-sm-6 col-12">
					<div style={{backgroundColor:'silver',height:250}} className="ltn__feature-item ltn__feature-item-6 text-center  box-shadow-1">
						<div className="ltn__feature-icon">
						<span><i className="flaticon-mortgage" /></span>
						</div>
						<div className="ltn__feature-info">
						<h3 style={{color:'black'}}><Link to="/service-details">Supply Iron And Steel</Link></h3>
						<p style={{color:'black'}}>We Supply best material in modest price which makes our company a top tier</p>
						</div>
					</div>
					</div>
					<div className="col-lg-4 col-sm-6 col-12">
					<div style={{backgroundColor:'silver',height:250}} className="ltn__feature-item ltn__feature-item-6 text-center   box-shadow-1">
						<div className="ltn__feature-icon">
						<span><i className="flaticon-operator" /></span>
						</div>
						<div className="ltn__feature-info">
						<h3 style={{color:'black'}}><Link to="/service-details">Wealth management</Link></h3>
						<p style={{color:'black'}}>We Deliver thoughtful investment advisory services related iron and steel</p>
						</div>
					</div>
					</div>
					
				
					
				</div>
				</div>
			</div>
        }
}

export default ServiceV5