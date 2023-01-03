import React, { Component } from "react";
class Social extends Component {
  render() {

    return (
      <div className="ltn__social-media">
        <ul>
          <li>
            <a href="https://www.facebook.com/tuna-theme" title="Facebook">
              <i className="fab fa-facebook-f" />
            </a>
          </li>
          <li>
            <a href="https://www.twitter.com/SmartCrowd4" title="Twitter" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-twitter" />
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/smartcrowd22" title="Instagram" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram" />
            </a>
          </li>
          <li>
            <a href="https://www.dribble.com/tuna-theme" title="Dribbble">
              <i className="fab fa-dribbble" />
            </a>
          </li>
        </ul>
      </div>
    );
  }
}

export default Social;
