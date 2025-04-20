import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ReadingPage from './pages/ReadingPage';
import OwnedPage from './pages/OwnedPage';
import PaymentPage from './pages/PaymentPage';
import Navbar from './components/Navbar';
import { BookProvider } from './context/BookContext';
import './index.css'; // Atau file CSS global Anda

function App() {
  return (
    <BookProvider>
      <Router>
        <Navbar />
        <div className="container">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/reading" element={<ReadingPage />} />
            <Route path="/owned" element={<OwnedPage />} />
            <Route path="/payment" element={<PaymentPage />} />
          </Routes>
        </div>
      </Router>
    </BookProvider>
  );
}

export default App;