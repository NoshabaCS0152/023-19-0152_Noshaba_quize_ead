import Navbar from "./Components/NavBar";
import Footer from "./Components/Footer";
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Welcome from "./Components/Welcome";
import Offerings from "./Components/Offerings";
import {ContactUs} from "./Components/Contact Us";
import {AboutUs} from "./Components/About Us";


function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" exact component={Welcome} />
          <Route path="/about" component={AboutUs} />
          <Route path="/offerings" component={Offerings} />
          <Route path="/contactus" component={ContactUs}/>
          </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
