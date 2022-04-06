import logo from './logo.svg';
import './App.css';
import useAxios from './useAxios';

function App() {
  const { loading , data , error, refetch} = useAxios({
    url: "https://yts.mx/api/v2/list_movies.json"
  });
  console.log(data);
  return (
    <div className="App">
        <h1>{data && data.status}</h1>
        <h2>{loading && "Loading"}</h2>
        <button onClick={refetch}>hi</button>
    </div>
  );
}

export default App;
