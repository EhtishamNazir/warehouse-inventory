import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  function increment() {
    setCount((prev) => prev + 1);
  }
  return (
    <>
      <h1>Warehouse Inventory Management System</h1>;
      <p>
        This is a Inventory Management System that will be build using MERN
        Stack.
      </p>
      <button onClick={increment}>Click Me</button>
      {console.log(count)}
    </>
  );
}

export default App;
