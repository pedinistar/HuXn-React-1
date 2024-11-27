function UserList() {
  const users = [
    { name: "John Doe", age: 30 },
    { name: "Jane Smith", age: 25 },
    { name: "Michael Johnson", age: 35 },
    { name: "Emily Davis", age: 28 },
    { name: "William Taylor", age: 32 },
  ];
  return (
    <div>
      {users.map(({ name, age }, index) => (
        <ul key={index}>
          <li>{name}</li>
          <li>{age}</li>
        </ul>
      ))}
    </div>
  );
}

export default UserList;
