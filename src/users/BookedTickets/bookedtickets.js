import Navbar from "../Navbar/Navbar";
import '../BookedTickets/bookedtickets.css'
import Footer from "../footer/footer";

function BookedTickets(){
    return(
        <div>
            <Navbar></Navbar>
            <div class="bookedtickets-container">
        <h1>Booked Tickets</h1>
        <ul class="ticket-list">
            <li class="ticket-item">
                <div class="ticket-info">
                    <h2>Event 1</h2>
                    <p><strong>Date:</strong> October 15, 2024</p>
                    <p><strong>Seat:</strong> 12A</p>
                    <p><strong>Status:</strong> Confirmed</p>
                </div>
                <div class="ticket-image-container">
                    <img src="https://www.centerstageevents.in/images/home/2.jpg" alt="Flight to New York" class="ticket-image"/>
                    <button class="cancel-button">Cancel</button>
                </div>
            </li>
            <li class="ticket-item">
                <div class="ticket-info">
                    <h2>Event 2</h2>
                    <p><strong>Date:</strong> October 15, 2024</p>
                    <p><strong>Seat:</strong> 12A</p>
                    <p><strong>Status:</strong> Confirmed</p>
                </div>
                <div class="ticket-image-container">
                    <img src="https://www.eventsindustryforum.co.uk/images/articles/about_the_eif.jpg" alt="Flight to New York" class="ticket-image"/>
                    <button class="cancel-button">Cancel</button>
                </div>

            </li>
            <li class="ticket-item">
                <div class="ticket-info">
                    <h2>Concert: Coldplay</h2>
                    <p><strong>Date:</strong> November 20, 2024</p>
                    <p><strong>Section:</strong> B, Row: 5, Seat: 8</p>
                    <p><strong>Status:</strong> Confirmed</p>
                </div>
                <div class="ticket-image-container">
                    <img src="https://cdn-ggidb.nitrocdn.com/bfHabXVinmoBBHpgMaCVILzexbAsCqLy/assets/images/optimized/rev-44a5fcb/www.mazeevents.in/wp-content/uploads/2024/04/event-management-companies-in-bangalore.jpg" alt="Coldplay Concert" class="ticket-image"/>
                    <button class="cancel-button">Cancel</button>
                </div>

            </li>
        </ul>
    </div>

    <Footer></Footer>
        </div>
    );
}

export default BookedTickets;