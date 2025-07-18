// src/App.jsx

import { useState } from "react";
import './App.css';


const App = () => {
const [team, setTeam ] = useState([]);
const [money, setMoney] = useState(100)
const [zombieFighters, setFighters] = useState([
  {
    id: 1,
    name: 'Survivor',
    price: 12,
    strength: 6,
    agility: 4,
    img: 'https://img.freepik.com/free-vector/creepy-green-zombie-cartoon-style_1308-132924.jpg',
  },
  {
    id: 2,
    name: 'Scavenger',
    price: 10,
    strength: 5,
    agility: 5,
    img: 'https://i.pinimg.com/736x/df/b7/17/dfb71789a47c71c7665fc241c0a6ab3c.jpg',
  },
  {
    id: 3,
    name: 'Shadow',
    price: 18,
    strength: 7,
    agility: 8,
    img: 'https://static.vecteezy.com/system/resources/previews/049/688/922/non_2x/cute-cartoon-illustration-of-little-halloween-zombie-unique-design-halloween-mascot-png.png',
  },
  {
    id: 4,
    name: 'Tracker',
    price: 14,
    strength: 7,
    agility: 6,
    img: 'https://img.freepik.com/premium-vector/scary-zombie-cartoon-clipart_991386-32.jpg',
  },
  {
    id: 5,
    name: 'Sharpshooter',
    price: 20,
    strength: 6,
    agility: 8,
    img: 'https://img.freepik.com/premium-vector/cartoon-zombie-boy_1151371-2257.jpg',
  },
  {
    id: 6,
    name: 'Medic',
    price: 15,
    strength: 5,
    agility: 7,
    img: 'https://img.freepik.com/premium-vector/cartoon-zombie_61878-792.jpg',
  },
  {
    id: 7,
    name: 'Engineer',
    price: 16,
    strength: 6,
    agility: 5,
    img: 'https://previews.123rf.com/images/sararoom/sararoom1407/sararoom140700089/30568030-illustration-of-cartoon-zombie.jpg',
  },
  {
    id: 8,
    name: 'Brawler',
    price: 11,
    strength: 8,
    agility: 3,
    img: 'https://previews.123rf.com/images/sararoom/sararoom1509/sararoom150900056/45934368-illustration-of-cartoon-zombie.jpg',
  },
  {
    id: 9,
    name: 'Infiltrator',
    price: 17,
    strength: 5,
    agility: 9,
    img: 'https://previews.123rf.com/images/austler/austler2309/austler230900138/212162570-zombie-kids-vector-illustration-cartoon-zombie-kids-halloween-characters.jpg',
  },
  {
    id: 10,
    name: 'Leader',
    price: 22,
    strength: 7,
    agility: 6,
    img: 'https://img.freepik.com/premium-vector/cartoon-zombie_61878-301.jpg',
  },
])

// const newFighters = [...zombieFighters]
//     setFighters(newFighters)
const handleAddFighter = (fighter) => {
  setTeam([...team, fighter]);

  const fighters = zombieFighters.filter(zombie => zombie.id !== fighter.id);
    setFighters(fighters);
  }

  const removeFighter = (fighter) => {
    const 
  }
  return (
    <>
    <h1>zombieFighters</h1>
     <h2>zombieFighters...</h2>
      <ul>
        {zombieFighters.map((zombieFighter, index) => (<li key={index}>{zombieFighter.name},  {zombieFighter.price}$, strength: {zombieFighter.strength}, agility: {zombieFighter.agility} <img
        src={zombieFighter.img}
      /> <button onClick={() => handleAddFighter(zombieFighter)}>Add a new fighter</button> 
      </li>))}
      </ul>
      <h2>Your Team</h2>
      <div>
      <ul>
        {team.map((fighter,index) => (
          <li key={index}>{fighter.name}, 
          <div className="fighter-img-wrapper">
          <img src={fighter.img}/>
          </div> </li>
        ))}
      </ul>
      </div>
</> 
  );
}





export default App