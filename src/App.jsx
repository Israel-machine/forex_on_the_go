import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import ConverterPage from './ConverterPage';
import AllRatesPage from './AllRatesPage'; 

function App() {
  return (
    <BrowserRouter>
      <nav style={{ marginBottom: '20px' }}>
        <Link to="/" style={navStyle}>To Home</Link>
        <Link to="/inverted" style={navStyle}>To Host</Link>
        <Link to="/all-rates" style={navStyle}>All Rates</Link>
      </nav>

      <h1 style={{fontStyle: 'italic', fontWeight: 'bold', fontFamily: 'Arial, sans-serif', color: '#ff7f50'}}>FOREX ON THE GO</h1>

      <Routes>
        <Route path="/" element={<ConverterPage inverted={false} />} />
        <Route path="/inverted" element={<ConverterPage inverted={true} />} />
        <Route path="/all-rates" element={<AllRatesPage />} />
      </Routes>
    </BrowserRouter>
  );
}

const navStyle = { fontFamily: 'Arial, sans-serif', margin: '0 10px', color: '#ff7f50', fontWeight: 'bold' };

export default App;