import axios from 'axios';
import React, { useEffect, useState } from 'react';
import CryptoCard from '../Components/CryptoCard';

const Home = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [cryptoList, setCryptoList] = useState([]);
  const [searchedCrypto, setSearchedCrypto] = useState('');
  useEffect(() => {
    handleRefresh();
  }, []);
  const handleSearch = (e) => {
    setSearchedCrypto(e.target.value);
  };
  const handleRefresh = () => {
    setIsLoading(true);
    axios
      .get(
        'https://api.coingecko.com/api/v3/coins/markets?vs_currency=vnd&order=market_cap_desc&per_page=100&page=1&sparkline=false'
      )
      .then((res) => {
        setIsLoading(false);
        setCryptoList(res.data);
      });
  };
  const filterCryptos = cryptoList.filter((crypto) =>
    crypto.name.toLowerCase().includes(searchedCrypto.toLowerCase())
  );
  return (
    <div className='App'>
      <div className='headerContainer'>
        <h1>Crypto List</h1>
        <div className='searchContainer'>
          <input
            placeholder='Search Crypto...'
            type='text'
            onChange={handleSearch}
          />
          <button onClick={handleRefresh}>Refresh</button>
        </div>
      </div>
      <div className='cryptoListContainer'>
        {isLoading && <h1>Loading...</h1>}
        {filterCryptos.map((crypto) => {
          return (
            <CryptoCard
              id={crypto.id}
              symbol={crypto.symbol}
              name={crypto.name}
              image={crypto.image}
              current_price={crypto.current_price}
              market_cap={crypto.market_cap}
              price_change_percentage_24h={crypto.price_change_percentage_24h}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Home;
