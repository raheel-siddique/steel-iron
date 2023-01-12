import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css";
const Client = () => {

  return (

    <div  
    className="main_client_box"
    >

      {/* Header Content */}
      <div className="section-title-area ltn__section-title-2--- text-center">
                  {/* <h6 style={{backgroundColor:'#FABF3A', color:'black'}} className="section-subtitle section-subtitle-2 ">
               Our Client Roaster
              </h6> */}
              <h1 style={{color:'black', fontSize:38, }} className="section-title">Our Client Roaster</h1>


              <p style={{color:'black', fontSize:22 }}>We've had the honor being the firm of choice of the following corporations
</p>

            	           
                </div>
      <div className="portfolio" id="portfolio" style={{marginBottom:100}}>
      {/* heading */}
    
      {/* slider */}
      <Swiper
        spaceBetween={30}
        slidesPerView={4}
        grabCursor={true}
        className="portfolio-slider"
        
      >
       
        <SwiperSlide >
          <img
        class
        className="newmine"
           src={
            `assets/img/property/aghakhanlogo.png`
           }
          alt=""
        // style={{height:160,width:160 }}
          
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
        className="newmine"
          src={
            `assets/img/property/executivelogo2.png`
           }
          alt=""
        // style={{height:160,width:160 }}
          
          />
        </SwiperSlide>
    <SwiperSlide>
          <img
        className="newmine"
          
           src={
            `assets/img/property/waterboard.jpeg`
           }
          alt=""
        // style={{height:160,width:160 }}
          
          />
        </SwiperSlide>

        <SwiperSlide>
          <img
        className="newmine"

            src={
                `assets/img/property/images (1).jpeg`
               }
          alt="" 
        // style={{height:160,width:160 }}
          
          />
        </SwiperSlide>


        <SwiperSlide>
          <img
        className="newmine"

            src={
                `assets/img/property/sheeheen2.jpeg`
               }
          alt="" 
        // style={{height:160,width:160 }}
          
          />
        </SwiperSlide>

        <SwiperSlide>
          <img
        className="newmine"

            src={
                `assets/img/property/hamrian6.jpg`
               }
          alt="" 
        // style={{height:160,width:160 }}
          
          />
        </SwiperSlide>
    
        <SwiperSlide>
        <img
            className="newmine"

                                alt="properties"
                                src={
                                 `assets/img/property/abdullahbuilders.jpg`
                                }
                              />
        </SwiperSlide>
      </Swiper>
    </div>
    </div>


   
  );
};

export default Client;
