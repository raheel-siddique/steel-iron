import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import { Col, Row } from "antd";
import { useState, useEffect } from "react";
// import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
// import { sliderData } from "../../slider-data";
import "./Slider.css";
import { Link } from 'react-router-dom';

export const sliderData = [
   
    {
        image:  
        `assets/img/property/iron1.webp`
  ,
  name:'Bar 1',
  specifiations:[
      {head:'Minimum Tensile Strength', value:"8,000 PSI (500 MpA)"},
      {head:'Minimum Yeild Strength', value:"60,000 PSI (420 MpA)"},
      {head:'Maximum Yeild Strength', value:"78,000 PSI (520 MpA)"}


  ]
      // heading: "Bar one",
      // desc: "This is the description of slide two Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi quos quas, voluptatum nesciunt illum exercitationem.",
    },
    {
        image:  
        `assets/img/property/41b2uNRaOWL.jpg`,
        name:'Bar 2',
        specifiations:[
            {head:'Minimum Tensile Strength', value:"83,375 PSI (575 MpA)"},
            {head:'Minimum Yeild Strength', value:"72,500 PSI (420 MpA)"},
      
      
        ]
    },
    

  
    // {
    //     image:  
    //     `assets/img/property/big-iron-rod-pack-isolated-concept-industrial-d-rendering-big-iron-rod-pack-isolated-computer-generated-industrial-d-rendering-216882632.jpg`,
    //     name:'Bar 1',
    //     specifiations:[
    //         {head:'Minimum Tensile Strength', value:"8,000 PSI (500 MpA)"},
    //         {head:'Minimum Yeild Strength', value:"60,000 PSI (420 MpA)"},
    //         {head:'Maximum Yeild Strength', value:"78,000 PSI (520 MpA)"}
      
      
    //     ]
    // },
    
   
  
   
  


  ];
  
const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideLength = sliderData.length;

  const autoScroll = true;
  let slideInterval;
  let intervalTime =2000;

  const nextSlide = () => {
    // setTimeout(()=>{
      setCurrentSlide(currentSlide === slideLength - 1 ? 0 : currentSlide + 1);
    console.log("next");
    // },300)
    
  };

  const prevSlide = () => {
    // setTimeout(()=>{
      setCurrentSlide(currentSlide === 0 ? slideLength - 1 : currentSlide - 1);
      console.log("prev");
    // },300)
 
  };

  function auto() {
    slideInterval = setInterval(nextSlide, intervalTime);
  }

  useEffect(() => {
    setCurrentSlide(0);
  }, []);

  useEffect(() => {
    if (autoScroll) {
      auto();
    }
    return () => clearInterval(slideInterval);
  }, [currentSlide]);

  return (
    <div className="slider">
      <LeftOutlined  className="arrow prev" onClick={prevSlide} />
      <RightOutlined className="arrow next" onClick={nextSlide} />
      {sliderData.map((slide, index) => {
        return (
       
        <>
         {index === currentSlide && (
<>
        <Row className='nav_row' style={{ backgroundColor:'white'}}>

        <Col style={{position:'relative',paddingLeft:120, marginTop:100}} lg={10} xs={0}>
        <div className="about-us-info-wrap">
			          <div className="section-title-area ltn__section-title-2---">
                  
			            <h6 className="section-subtitle section-subtitle-2 " style={{backgroundColor:'#FABF3A', color:'black'}}>Jav Traders</h6>
			            {/* <h1 style={{color:'black', fontSize:20}} className="section-title">Jav Traders</h1> */}
			            
                  <h1 style={{color:'black',  fontSize:30, height:20}} className="section-title">{slide.name}

</h1>
			            <p style={{color:'gray', fontSize:22}}>Making Homes Extra Secures with This Bar  </p>
                  <h1 style={{color:'#FABF3A', fontWeight:"bold", fontSize:20}} className="section-title">Specification
			           </h1>
			          </div>
                <div style={{position:'relative', bottom:50}}>
			          <ul style={{lineHeight:1}} className="ltn__list-item-half">
                  {slide.specifiations.map((specification)=>{
                    return(
                      <>
                       <li>
			              {/* <i className="flaticon-home-2" /> */}
			              {specification.head} 
			            </li>
			            <li style={{color:'black'}}>
			              {/* <i className="flaticon-mountain" /> */}
                    {specification.value} 


			            </li>
                      </>
                    )
                  })}
			           
			        
			          </ul>
			          </div>

                <div style={{position:'relative', bottom:50}}>
                <h1 style={{color:'#FABF3A', fontWeight:"bold", fontSize:20}} className="section-title">Key Features
</h1>
                  <ul style={{lineHeight:1}}>
                    <li style={{color:'black'}}>Special Earthquake Resistance Bars</li>
                    <li style={{color:'black'}}>Suitable For Contstructions in Seimisic zone </li>
                    <li style={{color:'black'}}>Manufactured from High Quality</li>
                    <li style={{color:'black'}}>Strong & Flexible</li>
                    

                  </ul>
                </div>
					
			        </div>
        </Col>
        <Col lg={14} xs={0}>
         <img src={slide.image} alt="slide" className="mine_slider_img" />

        </Col>
        {/* <Col lg={6} xs={0}></Col> */}

        </Row>




<Row  style={{ backgroundColor:'white'}} className='mb_slider'>
<img src={slide.image} alt="slide" className="mine_slider_img" />

<Col style={{position:'relative',bottom:600, paddingLeft:20}}  >
<div className="about-us-info-wrap">
			          <div className="section-title-area ltn__section-title-2---">
                  
			            <h6 className="section-subtitle section-subtitle-2 " style={{backgroundColor:'#FABF3A', color:'black'}}>Jav Traders</h6>
			            {/* <h1 style={{color:'black', fontSize:20}} className="section-title">Jav Traders</h1> */}
			            
                  <h1 style={{color:'black', fontSize:30}} className="section-title">{slide.name}

</h1>
			            <p style={{color:'red', fontSize:22, fontWeight:'bold'}}>Making Homes Extra Secures with This Bar  </p>
                  <h1 style={{color:'#FABF3A', fontWeight:"bold", fontSize:20}} className="section-title">Specification
			           </h1>
			          </div>
                <div style={{position:'relative', bottom:50}}>
			          <ul style={{lineHeight:1}} className="ltn__list-item-half">
                  {slide.specifiations.map((specification)=>{
                    return(
                      <>
                       <li style={{color:"#FABF3A", fontWeight:'bold'}}>
			              {/* <i className="flaticon-home-2" /> */}
			              {specification.head} 
			            </li>
			            <li style={{color:'black'}}>
			              {/* <i className="flaticon-mountain" /> */}
                    {specification.value} 


			            </li>
                      </>
                    )
                  })}
			           
			            {/* <li >
			              Maximum Yeild Strength 
			            </li>
			            <li style={{color:'black'}}>
			            78,000 PSI(570 MPA)
			            </li>

                  <li >
			              Minimum Yeild Strength 
			            </li>
			            <li style={{color:'black'}}>
			            6,000 PSI(420 MPA)
			            </li>
                  <li >
			              Minimum Yeild Strength 
			            </li>
			            <li style={{color:'black'}}>
			            6,000 PSI(420 MPA)
			            </li>
                  <li >
			              Minimum Yeild Strength 
			            </li>
			            <li style={{color:'black'}}>
			            6,000 PSI(420 MPA)
			            </li> */}
			          </ul>
			          </div>

                <div style={{position:'relative', bottom:50}}>
                <h1 style={{color:'#FABF3A', fontWeight:"bold", fontSize:20}} className="section-title">Key Features
</h1>
                  <ul style={{lineHeight:1}}>
                    <li style={{color:'black'}}>Special Earthquake Resistance Bars</li>
                    <li style={{color:'black'}}>Suitable For Contstructions in Seimisic zone </li>
                    <li style={{color:'black'}}>Manufactured from High Quality</li>
                    <li style={{color:'black'}}>Strong & Flexible</li>
                    

                  </ul>
                </div>
					
			        </div>
</Col>

</Row>
</>
            )}

        </>
        );
      })}
    </div>
  );
};

export default Slider;
