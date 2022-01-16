import logo from './logo.svg';
import './App.css';
import {useState} from "react";

function App() {
  const [toDo , setToDo] = useState("");
  const [toDos , setToDos] = useState([]);
  const onChange = (event) => setToDo(event.target.value);
  const onSubmit = (event) => {
    event.preventDefault();
    if(toDo === ""){
      return ;
    }
    //일반 자스면 toDos.push();
    // State는 직접수정할수 없다.
    //대신 수정역할을 하는 함수를 사용한다
      // 배열은 수정 어케할까?
      // f= [2,3];
      // d= [1];
      // [d,f] => [1,[f]];
      // [d, ...f] => [1,2,3];
    setToDos(currArray => [toDo , ...currArray])
    setToDo("");
  }
  console.log(toDos);
  return (
    <div>
      <h1>My To Dos ({toDos.length})</h1>
      <form onSubmit={onSubmit}>
      <input
      onChange={onChange} 
      value={toDo}
      type="text" placeholder="Write your todo">
      </input>
      <button onClick={console.log("Clicked")}>Add To do</button>
      </form>
      <hr />
      <ul>
        {toDos.map((v , i)=>(
          <li key={i}>{v}</li>
        ))}
      </ul>
    </div>  
  );
}

export default App;
