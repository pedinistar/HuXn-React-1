import Greetings from "./components/Greetings";
import UserState from "./components/UserState";
import Weather from "./components/Weather";

const Cart = () => {
  const items = [""];
  return <div>Cart</div>;
};

const App = () => {
  return (
    <>
      <Weather temp={25} />
      <UserState loggedIn={true} isAdmin={true} />
      <Greetings timeOfDay="morning" />
    </>
  );
};

export default App;
