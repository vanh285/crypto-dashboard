import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import './CryptoInfo.css';
import backgroundImg from './cryptoImg.jpg';
const CryptoInfo = () => {
  const navigate = useNavigate();
  const params = useParams();
  const [crypto, setCrypto] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    axios
      .get(`https://api.coingecko.com/api/v3/coins/${params.id}`)
      .then((res) => {
        console.log(res.data);
        setCrypto(res.data);
        setIsLoading(false);
      });
  }, [params]);

  if (crypto) {
    return (
      <div
        className='cryptoContainerInfo'
        style={{
          backgroundImage: `url(${backgroundImg})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
        }}
      >
        {isLoading && <h1>Loading...</h1>}
        <div className='cryptoInfo'>
          <h1>{crypto.name}</h1>
          <img src={crypto.image.large} alt='' />
          <ul className='cryptoDataContainer'>
            <li className='cryptoRow'>
              <h2 className='cryptoInfoHeader'>Current Price:</h2>
              <h2 className='cryptoInfoData'>
                {crypto.market_data.current_price.vnd.toLocaleString()}
              </h2>
            </li>
            <li className='cryptoRow'>
              <h2 className='cryptoInfoHeader'>Market Cap:</h2>
              <h2 className='cryptoInfoData'>
                {crypto.market_data.market_cap.vnd.toLocaleString()}
              </h2>
            </li>
            <li className='cryptoRow'>
              <h2 className='cryptoInfoHeader'>Total Volume: </h2>
              <h2 className='cryptoInfoData'>
                {crypto.market_data.total_volume.vnd.toLocaleString()}
              </h2>
            </li>
            <li className='cryptoRow'>
              <h2 className='cryptoInfoHeader'>High</h2>
              <h2 className='cryptoInfoData'>
                {crypto.market_data.high_24h.vnd.toLocaleString()}
              </h2>
            </li>
            <li className='cryptoRow'>
              <h2 className='cryptoInfoHeader'>Low</h2>
              <h2 className='cryptoInfoData'>
                {crypto.market_data.low_24h.vnd.toLocaleString()}
              </h2>
            </li>
          </ul>
          <button
            className='backButton'
            onClick={() => {
              navigate('/');
            }}
          >
            Back to Homepage
          </button>
        </div>
      </div>
    );
  } else {
    return null;
  }
};

export default CryptoInfo;
