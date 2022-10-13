import {useState, useEffect} from "react";
import "./App.css";

function App() {
  const [loading, setLoding] = useState(true); 
  const [coins, setCoins] = useState([]);

  const [money, setMoney] = useState(0); //유저가 적은 USD
  const [selectCoin, setSelectCoin] = useState(""); //선택한 코인 이름
  const [transSymbol, setTransSymbol] = useState(""); //선택한 코인의 심볼
  const [transPrice, setTransPrice] = useState(0); //선택한 코인의 금액

  /* 선택한 코인 */
  const onSelect = (event) => {
    setSelectCoin(event.target.value);

    coins.map((coin) => {
      if(coin.name === event.target.value){
        setTransPrice(coin.quotes.USD.price);
        setTransSymbol(coin.symbol);
      }
    });
  };

  /* 유저가 적은 금액 */
  const onMoney = (event) => {setMoney(event.target.value)};

  /* API 받아오기 */
  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
    .then((response) => response.json())
    .then((json) => {
      setCoins(json);
      setLoding(false);
    })
  }, [])

  console.log(selectCoin, transSymbol, transPrice)

  /* UI 그리기 */
  return(
    <div>
      <div id="title">
        <h1>The Coins ! ({coins.length})</h1>
      </div>
      
      {loading ? (<strong>Loding...</strong>
        ) : (
        <div>
          <div>

            <div id="selectItem" className="col-sm-4">
              <select onChange={onSelect} className="form-select" aria-label="Default select example">
                {coins.map((coin) => (<option key={coin.id}>{coin.name}</option>))}
              </select>
            </div>
            
            <div className="mb-3 row">
              <div className="col-sm-5">
                <input 
                  className="form-control"
                  id="inputMoney"
                  value={money}
                  placeholder="USD"
                  type="number"
                  onChange={onMoney}
                />
              </div>
              <label forhtml="inputMoney" className="col-sm-2 col-form-label">USD</label>
            </div>
            
            <div className="mb-3 row">
              <div className="col-sm-5">
                <input 
                  className="form-control"
                  id="transMoney"
                  value={money * transPrice}
                  placeholder={selectCoin}
                  type="number"
                  disabled={true}
                  onChange={onMoney}
                /> 
              </div>
              <label forhtml="transMoney" className="col-sm-2 col-form-label">{transSymbol}</label>
            </div>
          </div>
          
          <div>
            <ul>
              {coins.map((coin) => (<li>{coin.name} ({coin.symbol}): ${coin.quotes.USD.price} USD</li>))}
            </ul>
          </div>
          
        </div>
      )}
    </div>
  );
}

export default App;
