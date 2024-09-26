/* eslint-disable jsx-a11y/img-redundant-alt */
import '../EventDetails/eventdetail.css';
import Footer from '../footer/footer';
import Navbar from '../Navbar/Navbar';
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';



function EventDetails() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  // Check if the user is already logged in from localStorage
  useEffect(() => {
    const loggedIn = localStorage.getItem('loggedIn');
    if (loggedIn === 'true') {
      setIsLoggedIn(true);
    }
  }, []);

  const handleBookNow = () => {
    if(isLoggedIn) {
      navigate('/booking');
    } else {
      navigate('/login')
    }
  };

  return (
      <div>
        <Navbar></Navbar>
        <div class="event-container">
          <div class="event-image">
            <img src="https://www.centerstageevents.in/images/home/2.jpg" alt="Event Image"/>
          </div>
          <div class="event-details">
            <h1>Event Name</h1>
            <div class="additional-details">
              <p><strong>Date:</strong> October 10, 2024</p>
              <p><strong>Time:</strong> 7:00 PM - 10:00 PM</p>
              <p><strong>Venue:</strong> Banglore, Karnataka,India</p>
              <p><strong>Price:</strong> 500Rs per person</p>
              <p><strong>Available Seats:</strong> 200</p>
            </div>      
            <button onClick={handleBookNow} class="book-now">Book Now</button>
          </div>
        </div>
        
        <hr class="separator"/>

        <div class="about-event">
          <h2>About the Event</h2>
          <p>This event is a unique opportunity to experience world-class speakers, entertainment, and interactive activities. It is designed to bring together like-minded individuals to share knowledge and have an enjoyable experience. Whether you're attending for personal or professional reasons, this event promises to be both enlightening and fun.</p>
          <p>Expect workshops, keynote sessions, and networking opportunities that will help you grow and connect with others in the industry. Be prepared for an evening of inspiration, learning, and entertainment.</p>
        </div>
        <Footer></Footer>
      </div>
    );
}

export default EventDetails;
