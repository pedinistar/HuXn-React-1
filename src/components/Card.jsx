const Card = () => {
  const groceryItems = ["Apples", "Bananas", "Carrots", "Donuts", "Eggs"];
  // const groceryItems = [];

  return (
    <div>
      <h1>Cart 🛒</h1>
      {groceryItems.length > 0 && (
        <h2>You have {groceryItems.length} items in your Cart.</h2>
      )}

      <ul>
        <h4>Products</h4>
        {groceryItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default Card;
