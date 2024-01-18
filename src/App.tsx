
import { Link, Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Login from './containers/Login/Login'
import React from 'react';
import AboutUs from './containers/AboutUs/AboutUs';
import Home from './containers/Home/HomePage';
import Register from './containers/Register/Register';




class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <nav>
            <Link to="/HomePage">HomePage</Link>
            <Link to="/Login">Login</Link>
            <Link to="/AboutUs">AboutUs</Link>
            <Link to="/Register">Register</Link>
          </nav>
          <Routes>
            <Route path="/HomePage" element={<Home />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/AboutUs" element={<AboutUs />} />
            <Route path="/Register" element={<Register />} />
          </Routes>
        </div>
      </Router>
    );
  }
}


export default App