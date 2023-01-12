import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./components/pages/home/Home";
// import Marketplace from "./components/pages/marketplace/Marketplace";
// import Propertydetails from "./components/pages/marketplace/Propertydetails";
// import Register from "./components/pages/auth/register/Register";
// import Login from "./components/pages/auth/login/Login";
// import ViewCart from "./components/pages/addtocart/ViewCart";
// import Checkout from "./components/pages/addtocart/Checkout";
import Faq from "./components/pages/faq/Faq";
import Team_V1 from "./components/team";
// import "react-toastify/dist/ReactToastify.css";
// import About from "./components/pages/home/counter-v1";
// import PrivatePolicy from "./components/pages/privatepolicy/PrivatePolicy";
// import TermsCondition from "./components/pages/terms$cond/TermsCondition";
// import ErrorPage from "./components/404";
// import Product_Details from './components/product-details';
import Service_V1 from "./components/service";
import About_v1_Own from "./components/about";
import { AnimatePresence } from "framer-motion";
import About from "./components/pages/home/counter-v1";
import ContactMain from "./components/section-components/ContactMain";

const Root = () => {




  return (
    <BrowserRouter basename="/">
      <div>
<AnimatePresence>
        <Switch>
          <Route exact path="/" component={Home} />
          {/* <Route exact path="/marketplace" component={Marketplace} /> */}
          


          <Route exact path="/faq" component={Faq} />
          <Route exact path="/team" component={Team_V1} />
          <Route exact path="/about-us" component={About} />
          <Route exact path="/contact-us" component={ContactMain} />

      
          <Route exact path="/services" component={Service_V1} />

          {/* <Route path="/error" exact component={ErrorPage} /> */}

        </Switch>
        </AnimatePresence>

        {/* <ToastContainer autoClose={1000} /> */}
      </div>
    </BrowserRouter>
  );
};

export default Root;

ReactDOM.render(
  <React.StrictMode>
      <Root />
  </React.StrictMode>,
  document.getElementById("quarter")
);
