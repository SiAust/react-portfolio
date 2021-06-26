import React from "react";
// Components
import BirthdayCard from "./BirthdayCard"
// Data
import { data } from "./data";

const Birthday = () => {
    console.log(data);
  return (
    <div className='section'>
      <h1>Birthday</h1>
      <BirthdayCard/>
    </div>
  );
};

export default Birthday;
