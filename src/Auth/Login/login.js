import React, { useState} from 'react';
import { useNavigate } from 'react-router-dom';
import '../Login/login.css';


function Login() {


  const USERNAME = "user";
  const PASSWORD = "1234";

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    if (username === USERNAME && password === PASSWORD) {
      localStorage.setItem('loggedIn', 'true');
      localStorage.setItem('username', username);
      navigate('/eventdetail');
    } else if (username === "admin" && password === "admin") {
      navigate('/admin');
    } else {
      setError('Invalid username or password');
    }

    
  
  };
    return (
      <body class="login">

        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"/>
        <div class="container">
        <span class="colored-arrow" onClick={() => navigate("/home")}>&larr;</span>

          <input type="checkbox" id="flip"/>
            <div class="cover">
              <div class="front">
                <img src="https://i1.pickpik.com/photos/476/803/578/event-party-events-night-party-celebration-thumb.jpg" alt=""/>
                  <div class="text">
                    <span class="text-1">Every new Event is a <br/> new adventure</span>
                    <span class="text-2">Let's get connected</span>
                  </div>
              </div>
              <div class="back">
                <img class="backImg" src="https://goodintents.co.uk/wp-content/uploads/2015-10-07-20.27.41-1.jpg" alt=""/>
                  <div class="text">
                    <span class="text-1">Complete miles of journey <br/> with one step</span>
                    <span class="text-2">Let's get started</span>
                  </div>
              </div>
        </div>
        <div class="forms">
          <div class="form-content">
            <div class="login-form">
              <div class="title">Login</div>
                <form action="#">
                  <div class="input-boxes">
                    <div class="input-box">
                      <i class="fas fa-envelope"></i>
                      <input type="text" placeholder="Enter your email" value={username} onChange={(e) => setUsername(e.target.value)} required/>
                    </div>
                    {error && <p style={{ color: 'red', fontSize:'10px' }}>{error}</p>}
                    <div class="input-box">
                      <i class="fas fa-lock"></i>
                      <input type="password" placeholder="Enter your password" value={password} onChange={(e) => setPassword(e.target.value)} required/>
                    </div>
                    {/* <div class="text"><a href="#">Forgot password?</a></div> */}
                    <div class="button input-box">
                      <input type="submit" onClick={handleLogin} value="Sumbit"/>
                    </div>
                    <div class="text sign-up-text">Don't have an account? <label for="flip">Sigup now</label>
                    </div>
                  </div>
                </form>
              </div>
              <div class="signup-form">
                <div class="title">Signup</div>
                  <form action="#">
                    <div class="input-boxes">
                      <div class="input-box">
                        <i class="fas fa-user"></i>
                        <input type="text" placeholder="Enter your name" required/>
                      </div>
                      <div class="input-box">
                        <i class="fas fa-envelope"></i>
                        <input type="text" placeholder="Enter your email" required/>
                      </div>
                      <div class="input-box">
                        <i class="fas fa-lock"></i>
                        <input type="password" placeholder="Enter your password" required/>
                      </div>
                      <div class="button input-box">
                        <input type="submit" value="Sumbit"/>
                      </div>
                      <div class="text sign-up-text">Already have an account? <label for="flip">Login now</label>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
      </body>
    );
}

export default Login;




