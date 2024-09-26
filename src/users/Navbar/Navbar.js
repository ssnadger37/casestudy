/* eslint-disable jsx-a11y/anchor-is-valid */
import './Navbar.css';
import { useNavigate } from 'react-router-dom';
import React, { useState, useEffect } from 'react';


function Navbar() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const navigate = useNavigate();
    const username = localStorage.getItem('username'); // Retrieve username from localStorage
  
    // Check if the user is logged in
    useEffect(() => {
      const loggedIn = localStorage.getItem('loggedIn');
      if (loggedIn === 'true') {
        setIsLoggedIn(true);
      }
    }, []);
  
    const handleLogout = () => {
      localStorage.removeItem('loggedIn');
      localStorage.removeItem('username');
      setIsLoggedIn(false);
      window.location.reload();
      
    };

    return (
        <nav>
            <ul>
                <li><a  onClick={() => navigate('/home')} >Home</a></li>
                <li><a  onClick={() => navigate('/bookedtickets')}>Booked Tickets</a></li>
                <li><a onClick={() => navigate('/events')}>Event</a></li>


                <li><a onClick={() => navigate("/aboutus")}>About Us</a></li>
                <li><a  onClick={() => navigate('/contactus')}>Contact Us</a></li>
                
                {/* <li><a  onClick={() => navigate("/login")} className="login-btn">Login</a></li> */}
                {/* <li><a onClick={handleLogout}  className="login-btn">LogOut</a></li> */}

                {isLoggedIn ? (
                    <>
                    <li><a >Welcome, {username} </a></li>
                    <li><a onClick={handleLogout}  className="login-btn">LogOut</a></li>
                    </>
                    ) : (
                    <li><a  onClick={() => navigate("/login")} className="login-btn">Login</a></li>
                    )}
            </ul>
        </nav>
    );
}

export default Navbar;
