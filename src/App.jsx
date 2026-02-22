import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Navbar from './components/layout/Navbar'; // You can create a simple navbar later
import Studio from './pages/Studio/Studio';
import Footer from './components/Layout/Footer';
import { InquiryForm } from './pages/Home/components/InquiryForm';
function App() {
  return (
    <>
      <Navbar /> 
      <Home />
      <Footer />
    </>
  )
}

export default App;