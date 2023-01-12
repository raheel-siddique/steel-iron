import { CloseOutlined, MenuOutlined } from '@ant-design/icons'
import {
  Col,
  Drawer,
  DrawerProps,
  Dropdown,
  MenuProps,
  Popover,
  Row, 
  Space,
} from 'antd'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import "./Navbar.css"
// import ArrowIcon from './ArrowIcon'
// import MainImage from './MainImage'

const OwnNav = () => {
  const [open, setOpen] = useState(false)
  const [placement, setPlacement] = useState('left')
  
  const [hideFirstNavbar, setHideFirstNavbar] = useState('')

  useEffect(() => {
    const handleScroll = (event) => {
      console.log('window.scrollY', window.scrollY)
      setHideFirstNavbar(window.scrollY)
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])
  const showDrawer = () => {
    setOpen(true)
  }

  const onClose = () => {
    setOpen(false)
  }

  




  
  return (
    <>
      <div className="removeScreenMargin">
    
        <div className="mobile_navbar">
          <div className="main_toggle_img_box">
            <MenuOutlined
              onClick={showDrawer}
              style={{ fontSize: 30, color: 'black' }}
            />
            <Link href="/">
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

        {/* Mobile Responsive */}
        <Drawer
          placement={placement}
          closable={false}
          onClose={onClose}
          open={open}
          key={placement}
        >
          <ul className="list_content_mb_nav">
            <li style={{ display: 'flex', gap: 85 }} onClick={onClose}>
              <Link href="/">
              <img
                          style={{ width: 200 }}
                          className="img-fluid"
                          src={
                       
                            "assets/img/banner/amreli-logo.png"
                          }
                          alt="Logo"
                        />
              </Link>
              <CloseOutlined
                onClick={onClose}
                style={{
                  fontSize: 18,
                  color: 'black',
                  position: 'relative',
                  top: 10,
                }}
              />
            </li>
            <li
              className="list_content_center_mb"
              style={{fontSize:24}}
            >
               <a href="/">Home</a>
              
             
            </li>
        

            <li className="list_content_center_mb" onClick={onClose}
              style={{fontSize:24}}
            
            >
              <Link to="/services">Services</Link>
            </li>

            <li
              className="list_content_center_mb"
              style={{fontSize:24}}

            >
              <Link to="/team">
                Team
               
              </Link>
            </li>
    

            
            <li
              className="list_content_center_mb"
              style={{fontSize:24}}

            >
              <Link to="/faqs">

              Faqs
              </Link>
              
            </li>

          
          


         
          </ul>
        </Drawer>

        <div>
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
              <li className="link_nav" >
                <a href="/"> <span className="link_nav"> Home</span> </a>
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
<Col lg={7} className='btn_box'>
<Link to="/about-us">
                <button className="link_nav_btn_about">About Us</button>

                  </Link>
<Link to="/contact-us">
                <button className="link_nav_btn">Contact Us</button>

                  </Link>
</Col>

</Row>
        </div>
      </div>
    </>
  )
}
export default OwnNav
