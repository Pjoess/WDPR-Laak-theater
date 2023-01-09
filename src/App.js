import './App.css';
import { Routes, Route } from "react-router-dom"
import ContactPage from "./pages/index/contact-page";
import SignupPage from './pages/signup/signup-page';
import IndexPage from './pages/index/index-page';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<IndexPage/>} />
        <Route path="contact" element={ <ContactPage/> } />
        <Route path="signup" element={ <SignupPage/> } />
      </Routes>
    </div>
  );
}

export default App;
