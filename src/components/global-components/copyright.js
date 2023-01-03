import React, { Component } from "react";
import { Link } from "react-router-dom";

class CopyRight extends Component {
  render() {
    return (
      <div className="ltn__copyright-area ltn__copyright-2 section-bg-2  plr--5">
        <div className="container-fluid ltn__border-top-2">
          <div className="row">
            <div className="col-md-6 col-12">
              <div className="ltn__copyright-design clearfix">
                <p>
                  All Rights Reserved - Smart Crowd Management{" "}
                  <span className="current-year" />
                </p>
              </div>
            </div>
            <div className="col-md-6 col-12 align-self-center">
              <div className="ltn__copyright-menu text-end">
                <ul className="go-top">
                  <li>
                    <Link to="/terms">Terms &amp; Conditions</Link>
                  </li>
                  <li>
                    <Link to="/privacy-policy">Privacy-Policy</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CopyRight;
