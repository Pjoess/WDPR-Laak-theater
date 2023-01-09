import './App.css';
import { Route } from "react-router-dom";
import ContactPage from "./pages/contact-page";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
      <div>
        <Route path="/contact">
            <ContactPage/>
        </Route>
      </div>
  );
}

export default App;
