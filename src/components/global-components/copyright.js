import React, { Component } from "react";
import { Link } from "react-router-dom";

class CopyRight extends Component {
  render() {
    return (
      <div className="ltn__copyright-area ltn__copyright-2 section-bg-2  plr--5">
        <div className="container-fluid ltn__border-top-2">
          <div className="row">
            <div className="col-md-12 col-12" style={{textAlign:'center'}}>
              <div className="ltn__copyright-design clearfix">
                <p>
                  All Rights Reserved - Jav Traders
                  <span className="current-year" />
                </p>
              </div>
            </div>
        
          </div>
        </div>
      </div>
    );
  }
}

export default CopyRight;
