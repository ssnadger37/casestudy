import React from "react";
import "./aboutUs.css";
import Navbar from "../Navbar/Navbar";
import Footer from "../footer/footer";
import { useNavigate } from 'react-router-dom';

const AboutUs = () => {
  const navigate = useNavigate(); // Initialize navigate here

  return (
    <div className="about-us">
      <Navbar />
      <div className="about">
        
        <img
          src="https://images.pexels.com/photos/698907/pexels-photo-698907.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt="Girl"
          className="pic"
        />
        <div className="text">
          <h2>About Us</h2>
          <p>
            QuickSeats is a user-friendly platform that streamlines the process of booking movie,
            theater, and event tickets. Our goal is to make seat reservations simple, fast, and
            hassle-free, offering real-time availability and secure payments, ensuring you never miss
            out on your favorite entertainment experiences.
          </p>
          <div className="data">
            <button className="hire" onClick={() => navigate("/events")}>
              Book Now
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AboutUs;
