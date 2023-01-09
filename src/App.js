import './App.css';
import { Routes, Route } from "react-router-dom"
import ContactPage from "./pages/contact-page";
import SignupPage from './pages/signup/signup-page';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="contact" element={ <ContactPage/> } />
        <Route path="signup" element={ <SignupPage/> } />
      </Routes>
    </div>
  );
}

export default App;
