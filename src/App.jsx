// import React from "react";

import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import Card from './components/Card.jsx';
import Data from './data.jsx';

export default function App() {

  const cardData = Data.map(elem => {
    return (
      <Card
        key={elem.id}
        {...elem}
      />
    )
  })
  // console.log(cardData);
  return (
    <div className="container">
      <Navbar />
      <Hero />
      <section className="cards-list">
        {cardData}
      </section>
    </div>
  )
}