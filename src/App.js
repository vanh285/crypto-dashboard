import './App.css';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from './Routes/Home';
import CryptoInfo from './Routes/CryptoInfo';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' exact element={<Home />} />
        <Route path='/coins/:id' exact element={<CryptoInfo />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
