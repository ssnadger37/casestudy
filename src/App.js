import './App.css';
import Events from './users/HomePage/Events/Events';
import Homepage from './users/HomePage/Banner/BannerPage';
import Login from '../src/Auth/Login/login';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import EventDetails from './users/EventDetails/eventdetails';
import Booking from './users/EventDetails/Booking/booking';
import BookedTickets from './users/BookedTickets/bookedtickets';
import AboutUs from './users/AboutUs/aboutUs';
import ContactUs from './users/ContactUs/contactUs';
import Dashboard from './Admin/admin/dashboard';
import EventAddForm from './Admin/admin/eventAddForm';
import EventEditForm from './Admin/admin/eventEditForm';
import EventView from './Admin/admin/eventView';
import Users from './Admin/admin/users';
import Event from './Admin/admin/event';
import AdminBooking from './Admin/admin/booking';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route index element={<Homepage />}></Route>
          <Route path='/home' element={<Homepage />}></Route>
          <Route path='/events' element={<Events />}></Route>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/eventdetail' element={<EventDetails />}></Route>
          <Route path='/booking' element={<Booking />}></Route>
          <Route path='/bookedtickets' element={<BookedTickets />}></Route>

          <Route path='/aboutus' element={<AboutUs />}></Route>
          <Route path='/contactus' element={<ContactUs />}></Route>

          {/* Admin Routing */}

          <Route path="/admin" element={<Dashboard />} />
          <Route path="/admin/event" element={<Event />} />
          <Route path="/admin/booking" element={<AdminBooking />} />
          <Route path="/admin/users" element={<Users />}></Route>
          <Route path="/admin/addEvent" element={<EventAddForm />} />
          <Route path="/admin/editEvent/:eventId" element={<EventEditForm />} />
          <Route path="/admin/viewEvent/:eventId" element={<EventView />} />

        </Routes>
      </BrowserRouter>


    </div>
  );
}

export default App;
