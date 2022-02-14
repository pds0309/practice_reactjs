import './App.css';
import { usePreventLeave } from './usePreventLeave';


const App = () => {
  const { enablePrevent, disablePrevent } = usePreventLeave();
  return (
    <div className="App">
      <button onClick={enablePrevent}>PROTECT</button>
      <button onClick={disablePrevent}>UNPROTECT</button>
    </div>
  );
}

export default App;
