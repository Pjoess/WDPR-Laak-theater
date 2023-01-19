import "./App.css"
import { Routes, Route } from "react-router-dom"
import ContactPage from "./pages/contact/contact-page"
import SignUpPage from "./pages/sign-up/sign-up-page"
import CartPage from "./pages/cart/cart-page"
import IndexPage from "./pages/index/index-page"
import AboutUs from "./pages/about-us/about-us-page"
import Tickets from "./pages/ticket/ticket-page"
import LoginPage from "./pages/login/login-page"
import Programming from "./pages/programming/programming"
import EmployeeBoard from "./pages/employee/employee"
import CardContainerArtists from "./pages/employee/artists"
import CardContainerBands from "./pages/employee/bands"
import LogoutPage from "./pages/logout/logout-page"


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<IndexPage />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="cart" element={<CartPage />} />
        <Route path="aboutus" element={<AboutUs />} />
        <Route path="tickets" element={<Tickets />} />
        <Route path="signup" element={<SignUpPage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="logout" element={<LogoutPage/>}/>
        <Route path="programmering" element={<Programming />} />
        <Route path="employee" element={<EmployeeBoard/>}/>
        <Route path="artists" element={<CardContainerArtists/>}/>
        <Route path="bands" element={<CardContainerBands/>}/>
      </Routes>
    </div>
  )
}

export default App
