import './App.css';
import { useConfirm } from './useConfirm';


const App = () => {
  const deleteWorld = () => console.log("Delete World");
  const abort = () => console.log("Aborted");
  const confirmDelete = useConfirm("Are you Sure", deleteWorld, abort);

  return (
    <div className="App">
        <button onClick={confirmDelete}>Button</button>
    </div>
  );
}

export default App;
