import React, { useEffect, useState } from 'react'
// @ts-ignore
import card from "../assets/Card.png"
import "../components/Card/Card.css"
const initialDeck = require("../cards.json")


function Playground() {
  const populateDeck = () => {
    var id = 0;
    const stateDeck = initialDeck.cards.map((card) => {
      id++;
      return { ...card, id: id };
    });

    return stateDeck;
  };

  const [deck, setDeck] = useState(populateDeck());
  const [hand, setHand] = useState([]);


  return (
    <div>
      <h1>Playground</h1>
      {/* <h2>{deck.toString()}</h2> */}
      <div className="card">
      </div>
    </div>
  )
}

export default Playground
