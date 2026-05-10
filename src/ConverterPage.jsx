import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { fetchCurrencyList, fetchConversion } from './api';

function ConverterPage({ inverted }) {
  const [currencies, setCurrencies] = useState({});
  const [homeCur, setHomeCur] = useState('USD');
  const [hostCur, setHostCur] = useState('EUR');
  const [amount, setAmount] = useState(1);
  const [result, setResult] = useState(0);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getList = async () => {
      try {
        const list = await fetchCurrencyList();
        setCurrencies(list);
      } catch (err) { console.error("Error loading list"); }
    };
    getList();
  }, []);

  const handleConvert = async () => {
    setLoading(true);
    try {
      const from = inverted ? homeCur : hostCur;
      const to = inverted ? hostCur : homeCur;
      const data = await fetchConversion(from, to, amount);
      setResult(data);
    } catch (err) {
      alert("Conversion failed.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="main-wrapper">
      <section className="currency_search_container">
        <h2>{inverted ? "Inverted Search" : "Currency Search"}</h2>

        <p>From: {inverted ? "Home Currency" : "Host Currency"}</p>
        <select value={inverted ? homeCur : hostCur} onChange={(e) => inverted ? setHomeCur(e.target.value) : setHostCur(e.target.value)}>
          {Object.keys(currencies).map((code) => (
            <option key={code} value={code}>{code} - {currencies[code]}</option>
          ))}
        </select>

        <p>To: {inverted ? "Host Currency" : "Home Currency"}</p>
        <select value={inverted ? hostCur : homeCur} onChange={(e) => inverted ? setHostCur(e.target.value) : setHomeCur(e.target.value)}>
          {Object.keys(currencies).map((code) => (
            <option key={code} value={code}>{code} - {currencies[code]}</option>
          ))}
        </select>

        <p>Amount to Convert</p>
        <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} />
        
        <button style={{ backgroundColor: '#9dff9d', fontFamily: "sans-serif", color: '#069f4b', fontWeight: 'bold', fontStyle: 'italic', marginTop: '10px' }} onClick={handleConvert} disabled={loading}>
          {loading ? "Calculating..." : "CONVERT"}
        </button>

        <Link to={inverted ? "/" : "/inverted"}>
          <button style={{ backgroundColor: '#069f4b', fontFamily: "sans-serif", color: '#9dff9d', fontWeight: 'bold', fontStyle: 'italic', marginTop: '10px' }}>
            🔄 SWITCH
          </button>
        </Link>
      </section>
 
      <section className="conversion_container">
        <h2>Result</h2>
        <p>Value in {inverted ? hostCur : homeCur}</p>
        <div className="result-display">
          {result ? <h3>{result.toLocaleString()} {inverted ? hostCur : homeCur}</h3> : <p>Press convert</p>}
        </div>
      </section>
    </div>
  );
}

export default ConverterPage;