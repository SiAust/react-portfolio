import React from "react";

const BirthdayCard = ({ id, name, age, birthday, image }) => {
  const animation = {
    animation: `slide-up 1s ease forwards ${id / 3}s`,
  };
  return (
    <div key={id} className="item birthday" style={animation}>
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>{age}</p>
      <p>{birthday}</p>
    </div>
  );
};
export default BirthdayCard;
