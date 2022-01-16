import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from "react";
function App() {

  const [loading , setLoading] = useState(true);
  const [coins ,setCoins] = useState([]); 
  useEffect(()=>{
    const config = {
      headers: {
        'Accept': 'application/json'
      }
    }
    fetch("https://api.coinpaprika.com/v1/tickers")
    .then((response) => response.json())
    .then((json) => {
      setCoins(json);
      setLoading(false);
    })
  },[])
  return (
    <div>
      <h1>Coins ({coins.length})</h1>
      {loading ? <strong>Loading...</strong> : null}
      <select>
        {coins.map((v) => <option>{v.name}  ({v.symbol}): {v.quotes.USD.price}</option>)}
      </select>
    </div>
  );
}

export default App;
