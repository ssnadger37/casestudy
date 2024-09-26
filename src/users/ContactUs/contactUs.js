/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./contactus.css"; // Use a separate CSS file for ContactUs if needed
import Navbar from "../Navbar/Navbar";
import Footer from "../footer/footer";
 
 
const ContactUs = () => {
 
 
  return (
    <div className="contact-us">
      <Navbar />
      <div className="contact about">
        <img
          src="https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt="Girl"
          className="pic"
        />
        <div className="contact text">
          <h2>Contact Us</h2>
         
          {/* Contact Details Section */}
          <div className="contact-bigbox">
            <div className="contact-box">
              <div className="phone-box text-box">
                <img className="icon-img" src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/ET21.jpg" alt="Phone Icon" />
                <p className="contact-info">+1258 3258 5679</p>
              </div>
              <div className="email-box text-box">
                <img className="icon-img" src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/ET22.jpg" alt="Email Icon" />
                <p className="contact-info">hello@workik.com</p>
              </div>
              <div className="address-box text-box">
                <img className="icon-img" src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/ET23.jpg" alt="Address Icon" />
                <p className="contact-info">102 street, y cross 485656</p>
              </div>
            </div>
           
            {/* Social Links Section - Placed Below Location */}
            <div className="social-links">
              <a href="">
                <img className="social-img" src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/gray-mail.svg" alt="Email Icon" />
              </a>
              <a href="">
                <img className="social-img" src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/gray-twitter.svg" alt="Twitter Icon" />
              </a>
              <a href="">
                <img className="social-img" src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/gray-insta.svg" alt="Instagram Icon" />
              </a>
              <a href="">
                <img className="social-img" src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/gray-fb.svg" alt="Facebook Icon" />
              </a>
            </div>
          </div>
        </div>
      </div>
 
      <Footer />
    </div>
  );
};
 
export default ContactUs;
 