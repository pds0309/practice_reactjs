import logo from './logo.svg';
import './App.css';
import { useState, useEffect, useRef } from 'react';
import { useTitle } from './useTitle';

const sayHello = () => {
  console.log("hello");
}

const App = () => {
  // num1 의 변동 시 sayHello 를 또 렌더링함
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  // 타이틀 Effect
  const titleUpdater = useTitle("...Loading");
  useEffect(sayHello, [num1]);
  setTimeout(() => titleUpdater("Home") , 5000);
  const hello = useRef();
  setTimeout(() => hello.current.focus() , 3000);
  return (
    <div className="App">
      <h1>HI</h1>
      <button onClick={() => setNum1(num1 + 1)}>{num1}</button>
      <button onClick={() => setNum2(num2 + 1)}>{num2}</button>
      <input ref={hello} placeholder='hi' /> 

    </div>
  );
}

export default App;
