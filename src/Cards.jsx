import "./Cards.css";
import { useState, useEffect } from "react";
import Card from "./Card";

const Cards = () => {
  const [characters, setcharacters] = useState([]);

  useEffect(() => {
    const randomNums = [];
    while (randomNums.length < 12) {
      const r = Math.floor(Math.random() * 826) + 1;
      if (randomNums.indexOf(r) === -1) randomNums.push(r);
    }

    fetch(`https://rickandmortyapi.com/api/character/${randomNums.toString()}`)
      .then((res) => res.json())
      .then((res) => {
        setcharacters(res);
      });
  }, []);

  return (
    <div className="cards">
      {characters.map((character) => (
        <Card
          key={character.id}
          imgUrl={character.image}
          characterName={character.name}
        />
      ))}
    </div>
  );
};

export default Cards;
