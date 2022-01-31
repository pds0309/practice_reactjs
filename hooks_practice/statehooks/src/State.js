import { useState } from "react";

const State = () => {
    const [item, setItem] = useState(1);
    const increment = () => setItem(item + 1);
    const decrement = () => setItem(item - 1);
    return (
      <div>
        <h1>Hi - {item}</h1>
        <div>
          <button onClick={increment}>증가</button>
          <button onClick={decrement}>감소</button>
        </div>
      </div>
    );
  };

export default State;