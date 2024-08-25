// src/CardContainer.js
import React, { useState } from 'react';
import Card from './card';
import { RiAccountCircleFill } from 'react-icons/ri';

const CardContainer = () => {
  const [openCardId, setOpenCardId] = useState(null);

  const handleCardClick = (cardId) => {
    setOpenCardId(openCardId === cardId ? null : cardId);
  };

  return (
    <div className="p-8 space-y-4">
      <Card
        id="card1"
        title="Card 1"
        content="Content of card 1"
        icon={<RiAccountCircleFill className="text-2xl mr-2" />}
        isOpen={openCardId === "card1"}
        onClick={() => handleCardClick("card1")}
      />
      <Card
        id="card2"
        title="Card 2"
        content="Content of card 2"
        icon={<RiAccountCircleFill className="text-2xl mr-2" />}
        isOpen={openCardId === "card2"}
        onClick={() => handleCardClick("card2")}
      />
      {/* Add more cards as needed */}
    </div>
  );
};

export default CardContainer;
