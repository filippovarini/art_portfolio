import React, { Component } from "react";
import text from "../static/text.json";

export class contacts extends Component {
  render() {
    return (
      <div>
        <p className="page-title">{text.contactTitle}</p>
        <div id="contacts-container">
          <div className="contact-ico-container">
            <i class="contact-ico fab fa-instagram"></i>
            <a
              className="contact-text"
              href="https://www.instagram.com/dovepuntalobiettivo"
            >
              @dovepuntalobiettivo
            </a>
          </div>
          <div className="contact-ico-container">
            <i class="contact-ico far fa-envelope"></i>
            <a href="mailto:zagarielena@yahoo.com" className="contact-text">
              email me
            </a>
          </div>
          <div className="contact-ico-container">
            <i class="contact-ico fas fa-mobile-alt"></i>
            <a href="tel:+393429066058" className="contact-text">
              call me
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default contacts;
