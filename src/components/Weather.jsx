const Weather = ({ temp }) => {
  if (temp < 15) {
    return <h1>It&aposs cold outside!</h1>;
  } else if (temp >= 15 && temp <= 25) {
    return <h1>It&aposs nice outside!</h1>;
  } else if (temp > 25) {
    return <h1>Its hot outside</h1>;
  }
};

export default Weather;
