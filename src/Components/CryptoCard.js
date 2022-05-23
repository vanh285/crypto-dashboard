import React from 'react';
import { useNavigate } from 'react-router-dom';
import './CryptoCard.css';
const CryptoCard = ({
  id,
  symbol,
  name,
  image,
  current_price,
  market_cap,
  price_change_percentage_24h,
}) => {
  const navigate = useNavigate();
  return (
    <div className='cryptoContainer'>
      <div className='cryptoCard'>
        <div className='cryptoData'>
          <img src={image} alt='' />
          <h1 className='cryptoName'>{name}</h1>
          <p className='cryptoSymbol'>{symbol.toUpperCase()}</p>
          <p className='cryptoPrice'> $ {current_price.toFixed(2)}</p>
          {price_change_percentage_24h < 0 ? (
            <p className='priceChange red'>
              {price_change_percentage_24h.toFixed(2)}%
            </p>
          ) : (
            <p className='priceChange green'>
              {price_change_percentage_24h.toFixed(2)}%
            </p>
          )}
          <p className='cryptoVolume'>$ {market_cap.toLocaleString()}</p>
          <button
            onClick={() => {
              navigate(`/coins/${id}`);
            }}
          >
            More Info
          </button>
        </div>
      </div>
    </div>
  );
};

export default CryptoCard;
