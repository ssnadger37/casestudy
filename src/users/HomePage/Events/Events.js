/* eslint-disable jsx-a11y/img-redundant-alt */
import './Events.css'
import '../../footer/footer.js'
import Footer from '../../footer/footer.js';
import Navbar from '../../Navbar/Navbar.js';
import { useNavigate } from 'react-router-dom';


function Events() {

    const navigate = useNavigate();

    return (
        <div className="App">
            <Navbar></Navbar>
            <div class="container">
                <h1>Events</h1>
                <div class="filters">
                    <button class="filter-btn">Music Festival</button>
                    <button class="filter-btn">Tournament</button>
                    <button class="filter-btn">Sports</button>
                    <button class="filter-btn">Meet Up</button>
                </div>

                <div class="event-grid">
                    <div onClick={() => navigate("/eventdetail")} class="event-card">
                        <img src="https://cdn-ggidb.nitrocdn.com/bfHabXVinmoBBHpgMaCVILzexbAsCqLy/assets/images/optimized/rev-44a5fcb/www.mazeevents.in/wp-content/uploads/2024/04/event-management-companies-in-bangalore.jpg" alt="Event Image 1"/>
                            <div class="event-details">
                                <span class="date">APR 14</span>
                                <h3>Wonder Girls 2010 Wonder Girls World Tour San Francisco</h3>
                                <p>We’ll get you directly seated and inside for you to enjoy the show.</p>
                            </div>
                    </div>

                    <div onClick={() => navigate("/eventdetail")} class="event-card">
                        <img src="https://images.jdmagicbox.com/comp/ernakulam/m4/0484px484.x484.140206113128.a9m4/catalogue/we-create-events-panampilly-nagar-ernakulam-event-management-companies-nsobpzm660.jpg?clr=" alt="Event Image 2"/>
                            <div class="event-details">
                                <span class="date">AUG 20</span>
                                <h3>JVJ 2011 JVJ Worldwide Concert Barcelona</h3>
                                <p>Directly seated and inside for you to enjoy the show.</p>
                            </div>
                    </div>

                    <div onClick={() => navigate("/eventdetail")} class="event-card">
                        <img src="https://www.eventsindustryforum.co.uk/images/articles/about_the_eif.jpg" alt="Event Image 3"/>
                            <div class="event-details">
                                <span class="date">SEP 18</span>
                                <h3>2011 Super Junior SM Town Live '10 World Tour New York City</h3>
                                <p>Directly seated and inside for you to enjoy the show.</p>
                            </div>
                    </div>

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

                <div class="load-more">
                    <button class="load-more-btn">Load More</button>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
}
  
export default Events;