import './App.css';
import { useFullScreen } from './useFullScreen';
const App = () => {
  const onFullScreen = isFull => {console.log(isFull ? "FULL" : "NOTFULL")};
  const { element, triggerFull , exitFull } = useFullScreen(onFullScreen);
  return (
    <div className="App" style={{ height: "1000vh" }}>
      <img ref={element} src="https://i.ibb.co/R6RwNxx/grape.jpg" alt="grape" width="250">
      </img>
      <button onClick={ triggerFull }>풀화면</button>
      <button onClick={ exitFull }>풀화면나가기</button>

    </div>
  );
}

export default App;
