import "./App.css"
import { Routes, Route } from "react-router-dom"
import ContactPage from "./pages/guest-pages/contact/contact-page"
import SignUpPage from "./pages/guest-pages/sign-up/sign-up-page"
import CartPage from "./pages/cart/cart-page"
import IndexPage from "./pages/guest-pages/index/index-page"
import AboutUsPage from "./pages/guest-pages/about-us/about-us-page"
import Tickets from "./pages/guest-pages/ticket/ticket-page"
import LoginPage from "./pages/guest-pages/login/login-page"
import ProgrammingPage from "./pages/guest-pages/programming/programming"
import EmployeePage from "./pages/employee-pages/employee/employee"
// import ArtistPage from "./pages/employee-pages/artist/artists"
import BandsPage from "./pages/employee-pages/band/bands"
import LogoutPage from "./pages/universal-logged-in-pages/logout/logout-page"
import AdminPage from "./pages/admin-pages/admin/admin-page";
import RoomManagementPage from "./pages/admin-pages/room/room-management";
import UserManagementPage from "./pages/admin-pages/user/user-management";
import EmployeeManagementPage from "./pages/admin-pages/employee/employee-management";
import SeatPickerPage from "./components/widgets/seat-picker/seat-picker-page"
import ArtistPage from "./pages/universal-logged-in-pages/artist/artist-page"
import Artists from "./pages/employee-pages/artist/artists"
import Bands from "./pages/employee-pages/band/bands"

function App() {
  return (
    <div className="App">
      <Routes>
        {/* Guest/User section*/}
        <Route path="/" element={<IndexPage />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="cart" element={<CartPage />} />
        <Route path="aboutus" element={<AboutUsPage/>} />
        <Route path="tickets" element={<Tickets />} />
        {/* Guest only section*/}
        <Route path="registreer" element={<SignUpPage />} />
        <Route path="login" element={<LoginPage />} />
        {/* Universal Logged-in user only*/}
        <Route path="logout" element={<LogoutPage/>}/>
        <Route path="seatpicker/:showId" element={<SeatPickerPage />} />
        <Route path="artist" element={<ArtistPage/>}/>
        {/*--------------------*/}
        <Route path="programma" element={<ProgrammingPage/>} />
        <Route path="employee" element={<EmployeePage/>}/>
        <Route path="employee/artist" element={<Artists/>}/>
        <Route path="employee/group" element={<Bands/>}/>
        {/* <Route path="artists" element={<ArtistPage/>}/> */}
        <Route path="bands" element={<BandsPage/>}/>
        {/* Admin section */}
        <Route path="admin" element={<AdminPage/>}/>
        <Route path="admin/zalen" element={<RoomManagementPage/>}/>
        <Route path="admin/gebruikers" element={<UserManagementPage/>}/>
        <Route path="admin/medewerkers" element={<EmployeeManagementPage/>}/>

      </Routes>
    </div>
  )
}

export default App
