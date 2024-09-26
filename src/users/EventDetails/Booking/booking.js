import React, { useState } from 'react';
import './booking.css'; // Import the CSS file
import Navbar from '../../Navbar/Navbar';
 
const Booking = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
 
  // Function to open modal
  const openModal = () => {
    setIsModalOpen(true);
  };
 
  // Function to close modal
  const closeModal = () => {
    setIsModalOpen(false);
  };
 
  return (
    <div>
      <Navbar></Navbar>
      <div className="booking form-container">
        <h2>Ticket Details :</h2>
        <form onSubmit={(e) => { e.preventDefault(); openModal(); }}>
          <label htmlFor="name1">Name</label>
          <input type="text" id="name1" placeholder="Type here" />
 
          <label htmlFor="name2">Name</label>
          <input type="text" id="name2" placeholder="Type here" />
 
          <label htmlFor="name3">Name</label>
          <input type="text" id="name3" placeholder="Type here" />
 
          <label htmlFor="name4">Name</label>
          <input type="text" id="name4" placeholder="Type here" />
 
          <label htmlFor="name5">Name</label>
          <input type="text" id="name5" placeholder="Type here" />
 
          <div className="booking button-container">
            <button type="submit">BOOK</button>
          </div>
        </form>
      </div>
 
      {/* Success Modal */}
      {isModalOpen && (
        <div id="successModal" className="custom-modal">
          <div className="modal-content">
            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 130.2 130.2">
              <circle className="path circle" fill="none" stroke="#198754" strokeWidth="6" strokeMiterlimit="10" cx="65.1" cy="65.1" r="62.1" />
              <polyline className="path check" fill="none" stroke="#198754" strokeWidth="6" strokeLinecap="round" strokeMiterlimit="10" points="100.2,40.2 51.5,88.8 29.8,67.5" />
            </svg>
            <h4 className="text-success">Oh Yeah!</h4>
            <p>You have successfully booked the Ticket.</p>
            <button className="custom-btn close-btn" onClick={closeModal}>Ok</button>
          </div>
        </div>
      )}
 
     
    </div>
  );
};
 
export default Booking;