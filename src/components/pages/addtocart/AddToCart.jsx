import React, { useState } from "react";
import "./AddToCart.css";
// import { toast } from "react-toastify";
// import AddIcon from "@mui/icons-material/Add";
// import RemoveIcon from "@mui/icons-material/Remove";
// import ShoppingCartCheckoutOutlinedIcon from "@mui/icons-material/ShoppingCartCheckoutOutlined";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

toast.configure();

const AddToCart = () => {
  const history = useHistory();



  const [numberOfTokens, setNumberOfTokens] = useState(1);

  const [feedback] = useState("");

 

  return (
    <div className="widget ltn__author-widget bg-light mt-5">
      <div className="ltn__author-widget-inner text-center">
        <h4>Bahria</h4>
        <br />
        <h6>
          Total Investment: $
         10000
        </h6>
        <h6>
         
          tokens left out of{" "}
          19
        </h6>

        <small>
          Minimum Investment: $
         5000
        </small>
          <div className="row">
            <div className="col-md-12">
              <label>Add tokens to your cart:</label>
              <div>
                <button className="icbtn" >
                  <span>
                    <AddIcon />
                  </span>
                </button>
                <input
                  id="input-item-to-add-to-cart"
                  style={{ position: "relative", top: 1 }}
                  type="number"
                  min={1}
                  name="ltn__name"
                  // placeholder="Enter here"
                  className="tokeninptfld"
                  value='4'
                />
                <button className="icbtn">
                  <span>
                    <RemoveIcon />
                  </span>
                </button>
              </div>

              {feedback.length > 0 && <p>{feedback}</p>}
            </div>
          </div>
      </div>
        <div className="btn-wrapper btnaddtocart">
            <button
              className="btn theme-btn-1 btn-effect-1 text-uppercase col-md-12"
            >
           
                <>
                  <span className="mr-2 ">Add To Cart</span>
                  <ShoppingCartCheckoutOutlinedIcon />
                </>
            </button>
          
          <br />
          <br />
            <button
              className="btn btn-dark bg-dark theme-btn-1 btn-effect-1 text-uppercase col-md-12"
              onClick={() => {
                history.push("/cart");
              }}
            >
              View cart
            </button>
        </div>
        
      <br />
     
    </div>
  );
};

export default AddToCart;
