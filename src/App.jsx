import { HashRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Camping from "./pages/Camping";
import Cabs from "./pages/Cabs";
import Tours from "./pages/Tours";
import Contact from "./pages/Contact";
import Booking from "./pages/Booking";
import Footer from "./components/Footer";
import Resorts from "./pages/Resorts";
import "./App.css";
import Admin from "./pages/Admin";
import { FaWhatsapp } from "react-icons/fa";
import ScrollToTop from "./components/ScrollToTop";
import MyBookings from "./pages/MyBookings";

function App() {
  return (
    <HashRouter>
      <ScrollToTop /> 
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/camping" element={<Camping />} />
        <Route path="/cabs" element={<Cabs />} />
        <Route path="/tours" element={<Tours />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/resorts" element={<Resorts />} />
        <Route path="/my-bookings" element={<MyBookings />}/>
      </Routes>


      <a
        href="https://wa.me/918848738997?text=Hello%20TravelYourWay%20Holidays,%20I%20want%20to%20know%20about%20your%20packages."
        target="_blank"
        rel="noreferrer"
        className="whatsapp-btn"
      >
        <FaWhatsapp />
      </a>
      <a
        href="tel:8848738997"
        className="call-btn"
      >
        📞
      </a>

      <Footer />

    </HashRouter>
  );
}

export default App;