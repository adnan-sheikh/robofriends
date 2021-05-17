import React from 'react';
import Card from './Card';

const CardList = ({ robots }) => {
  return (
    <>
      {robots.map((robot) => {
        return (
          <Card
            id={robot.id}
            name={robot.name}
            email={robot.email}
            key={robot.username}
          />
        );
      })}
    </>
  );
};

export default CardList;
