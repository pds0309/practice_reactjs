import logo from './logo.svg';
import './App.css';
import { useState, useEffect, useRef } from 'react';


const useClick = (onClick) => {
  const element = useRef();
  //useClick 이 Mount 되었을 때 
  useEffect(() => {
    // Click Event를 추가해준다.
    if(element.current) {
      element.current.addEventListener("click", onClick);
    }

   //ComponentWillUnAmount 에 발생
   // 이거왜하나?
   // component가 mount되지 않았을 때 eventListener 배치를 하지 않게 함
    return () => {
      if(element.current) {
        element.current.removeEventListener("click", onClick);
      }
    }
  },[]);
  return element;
}

const App = () => {
  const myclickEventFunction = () => {console.log("hello!")}

  const title = useClick(myclickEventFunction);
  return (
    <div className="App">
      <h1 ref={title}>Hi</h1>
    </div>
  );
}

export default App;
