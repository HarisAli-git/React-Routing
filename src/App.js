import About from './About';
import Contact from './Contact';
import Home from './Home';

import Navbar from './Navbar';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

function App() {

  return (
    <Router>
    <div className="App">
      <Navbar />
      <div className="content">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="*" />
        </Routes>
      </div>
    </div>
    </Router>
  );
}

export default App;