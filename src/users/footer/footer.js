/* eslint-disable jsx-a11y/anchor-is-valid */
import '../footer/footer.css';

function Footer() {
    return (
        <footer class="footer">
            <div class="container">
                <div class="section">
                    <h2>QuickSeats</h2>
                    <p>Welcome to QuickSeats, your go-to platform for seamless event ticket booking. Whether it's a concert, theater show, sports event, or festival, we've got you covered with easy access to the best seats in the house.</p>
                    <div class="social">
                        <a href="#"><img src="https://upload.wikimedia.org/wikipedia/commons/6/6c/Facebook_Logo_2023.png" alt="Facebook"/></a>
                        <a href="#"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Coast_twitter.png/640px-Coast_twitter.png" alt="Twitter"/></a>
                        <a href="#"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/LinkedIn_PNG16.png/640px-LinkedIn_PNG16.png" alt="LinkedIn"/></a>
                    </div>
                </div>
    
                <div class="section">
                    <h3>Plan Events</h3>
                    <ul>
                        <li><a href="#">Create and Set Up</a></li>
                        <li><a href="#">Sell Tickets</a></li>
                        <li><a href="#">Online RSVP</a></li>
                        <li><a href="#">Online Events</a></li>
                    </ul>
                </div>
    
                <div class="section">
                    <h3>Eventick</h3>
                    <ul>
                        <li><a href="#">About Us</a></li>
                        <li><a href="#">Contact Us</a></li>
                        <li><a href="#">Help Center</a></li>
                        <li><a href="#">Privacy</a></li>
                        <li><a href="#">Terms</a></li>
                    </ul>
                </div>
    
            </div>
    
            <div class="copyright">
                <p>Copyright &copy; QuickSeats</p>
            </div>
        </footer>
    )
}

export default Footer;
