const User = ({ name, age, isDead, hobbies }) => {
  return (
    <section>
      <h1>Name: {name}</h1>
      <h2>Age: {age}</h2>
      <h3>{isDead ? "She is no more!" : "She is still breathing!"}</h3>
      <h4>Hobbies: {hobbies}</h4>
    </section>
  );
};

export default User;
