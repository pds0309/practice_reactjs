import Button from "./Button";
import styles from './App.module.css';
import { useEffect, useState } from "react";

// 상태가 변할 때마다 App 을 다시 로드해 모든 컴포넌트를 다시 실행하게 해주는게 과연 바람직할까?
// 일부 컴포넌트들은 상태가 변하지 않는 단 한번만 처음에 로드되는 것들이라면

function App() {
  const [counter , setValue] = useState(0);

  const [keyword , setKeyword] = useState("");
  const onChange = (event) => setKeyword(event.target.value);
  const onClick = () => setValue((prev) => prev + 1);
  console.log("I run All the time");
  const iRunOnlyOnce = () => {
    console.log("i run only once");
  }
  useEffect(iRunOnlyOnce,[]);
  useEffect(()=>{console.log("Counter Changed")},[counter]);
  // keyword 가 변화할 때 실행시켜줘
  useEffect(()=>{
    if(keyword !== "" && keyword.length > 5){
      console.log("SearchFor",keyword)
      }
  },[keyword]);
  return (
      <div>
        <input 
        value={keyword}
        onChange={onChange}
        type="text" placeholder="Search here..."/>

        <h1 className={styles.title}>{counter}</h1>
        <button onClick={onClick}>hello </button>
      </div>
  );
}

export default App;
