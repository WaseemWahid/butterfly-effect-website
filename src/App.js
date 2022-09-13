import React from 'react';
import { About, Booking, Enlightenment, Header, Navbar } from './Container';

import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <About />
      <Enlightenment />
      <Booking />
    </div>
  );
}

export default App;
