import React from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import Ticket from './components/ticket';

function App() {
  return (
    <div>
      <Header/>
      <Ticket name="SuperBowl Tickets"/>
      <Footer/>
    </div>
  );
}

export default App;
