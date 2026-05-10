import { useState, useEffect } from 'react';
import { fetchAllRates, fetchCurrencyList } from './api';

function AllRatesPage() {
  const [currencies, setCurrencies] = useState({}); 
  const [base, setBase] = useState('USD');
  const [rates, setRates] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getList = async () => {
      try {
        const list = await fetchCurrencyList();
        setCurrencies(list);
      } catch (err) {
        console.error("Error loading currency list");
      }
    };
    getList();
  }, []);

  const handleSearch = async () => {
    setLoading(true);
    try {
      const data = await fetchAllRates(base);
      setRates(data);
    } catch (err) {
      alert("Failed to fetch rates.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="main-wrapper" style={{ width: '500px' }}>
      <section className="currency_search_container" style={{ backgroundColor: '#36b5ff' }}>
        <h2>Check All Rates</h2>
     
        <select value={base} onChange={(e) => setBase(e.target.value)}>
          {Object.keys(currencies).map((code) => (
            <option key={code} value={code}>
              {code} - {currencies[code]}
            </option>
          ))}
        </select>

        <button onClick={handleSearch} disabled={loading} style={{ marginTop: '10px' }}>
          {loading ? "Fetching..." : "Get All Rates"}
        </button>
      </section>

      {rates && (
        <section className="conversion_container" style={{backgroundColor: '#4ecc69', maxHeight: '400px', overflowY: 'auto', display: 'block', padding: '0'}}>

  <h3 style={{ position: 'sticky', top: 0, backgroundColor: '#4ecc69',margin: 0, padding: '20px 0', zIndex: 1, width: '100%',borderBottom: '2px solid rgba(0,0,0,0.1)'}}>
    Rates for 1 {base}
  </h3>
  
  <div style={{ textAlign: 'left', width: '100%', padding: '10px 20px' }}>
    {Object.entries(rates).map(([code, rate]) => (
      <p key={code} style={{ borderBottom: '1px solid rgba(255,255,255,0.2)', padding: '8px 0', margin: 0 }}>
        {code}: <strong>{rate.toFixed(4)}</strong>
      </p>
    ))}
  </div>
</section>
      )}
    </div>
  );
}

export default AllRatesPage;