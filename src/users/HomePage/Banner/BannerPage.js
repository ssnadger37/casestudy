/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/anchor-is-valid */
import Navbar from '../../Navbar/Navbar';
import { useNavigate } from 'react-router-dom';
import './BannerPage.css'
// import Events from '../Events/Events';
import Footer from '../../footer/footer';

function Homepage() {

    const navigate = useNavigate();
    return (
        <body>
            <Navbar></Navbar>
            <section class="hero-section">
                <div class="content">
                    <h1>Your ticket to unforgettable moments, just a click away!</h1>
                    <div class="btn-container">
                        <button onClick={() => navigate("/events")} class="btn">Get Ticket</button>
                    </div>
                </div>
            </section>

            <div className="App">
                <div class="container">
                    <h1>UpcomingEvents</h1>
                    <div class="filters">
                        <button class="filter-btn">Music Festival</button>
                        <button class="filter-btn">Tournament</button>
                        <button class="filter-btn">Sports</button>
                        <button class="filter-btn">Meet Up</button>
                    </div>

                    <div class="event-grid">
                        <div class="event-card">
                            <img src="https://cdn-ggidb.nitrocdn.com/bfHabXVinmoBBHpgMaCVILzexbAsCqLy/assets/images/optimized/rev-44a5fcb/www.mazeevents.in/wp-content/uploads/2024/04/event-management-companies-in-bangalore.jpg" alt="Event Image 1"/>
                            <div class="event-details">
                                <span class="date">APR 14</span>
                                <h3>Wonder Girls 2010 Wonder Girls World Tour San Francisco</h3>
                                <p>We’ll get you directly seated and inside for you to enjoy the show.</p>
                            </div>
                        </div>

                        <div class="event-card">
                            <img src="https://images.jdmagicbox.com/comp/ernakulam/m4/0484px484.x484.140206113128.a9m4/catalogue/we-create-events-panampilly-nagar-ernakulam-event-management-companies-nsobpzm660.jpg?clr=" alt="Event Image 2"/>
                            <div class="event-details">
                                <span class="date">AUG 20</span>
                                <h3>JVJ 2011 JVJ Worldwide Concert Barcelona</h3>
                                <p>Directly seated and inside for you to enjoy the show.</p>
                            </div>
                        </div>

                        <div class="event-card">
                            <img src="https://www.eventsindustryforum.co.uk/images/articles/about_the_eif.jpg" alt="Event Image 3"/>
                            <div class="event-details">
                                <span class="date">SEP 18</span>
                                <h3>2011 Super Junior SM Town Live '10 World Tour New York City</h3>
                                <p>Directly seated and inside for you to enjoy the show.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>           
            <Footer></Footer>    
        </body>
  );
}

export default Homepage;