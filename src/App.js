import './App.css';
import { Routes, Route } from "react-router-dom"
import ContactPage from "./pages/contact/contact-page";
import SignupPage from './pages/signup/signup-page';
import CartPage from "./pages/cart/cart-page"
import IndexPage from './pages/index/index-page';
import AboutUs from './pages/index/aboutUs-page';
import Tickets from './pages/index/ticket-page';
import LoginPage from './pages/login/login-page'
import Programming from './pages/Programmering/programming';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<IndexPage/>} />
        <Route path="contact" element={ <ContactPage/> } />
        <Route path="cart" element={ <CartPage/> } />
        <Route path="aboutus" element={ <AboutUs/> } />
        <Route path="tickets" element={ <Tickets/> } />
        <Route path="signup" element={ <SignupPage/> } />
        <Route path="login" element={ <LoginPage/> } />
        <Route path="programmering" element={ <Programming/> } />
      </Routes>
    </div>
  );
}

export default App;
