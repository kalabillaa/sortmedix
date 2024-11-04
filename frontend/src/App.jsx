import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar'
import Home from './Pages/Home'
import AboutUs from './Pages/AboutUs'
import Appointment from './Pages/Appointment';
import Login from './Pages/Login'
import Register from './Pages/Register'
import Footer from './Components/Footer';
import SymptomChecker from './Pages/SymptomChecker'
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useContext, useEffect } from 'react';
import { context } from './index.js';
import axios from 'axios';


function App() {

  const {isAuthenticated, setIsAuthenticated, setUser} = useContext (context);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get(
          "http://localhost:4000/api/v1/user/patient/me",
          {
            withCredentials: true,
          }
        );
        setIsAuthenticated(true);
        setUser(response.data.user);
      } catch (error) {
        setIsAuthenticated(false);
        setUser({});
      }
    };
    fetchUser();
  }, [isAuthenticated, setIsAuthenticated, setUser]);

  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element = { <Home /> } />
          <Route path='/about' element = { <AboutUs /> } />
          <Route path='/appointment' element = { <Appointment /> } />
          <Route path='/login' element = { <Login /> } />
          <Route path='/register' element = { <Register /> } />
          <Route path='/symptomchecker' element = { <SymptomChecker /> } />
        </Routes>
        <ToastContainer position='top-center' />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
