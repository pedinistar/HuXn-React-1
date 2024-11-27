import React from "react";

const Greetings = ({ timeOfDay }) => {
  return timeOfDay === "morning" ? (
    <h1>Good Morning</h1>
  ) : (
    <h1>Good Afternoon</h1>
  );
};

export default Greetings;