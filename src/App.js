import React from 'react';
import { About, Booking, Enlightenment, Header, Navbar, Testimonials } from './Container';

import './App.css';

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Header />
      <About />
      <Enlightenment />
      <Booking />
      <Testimonials />
    </div>
  );
}

export default App;
