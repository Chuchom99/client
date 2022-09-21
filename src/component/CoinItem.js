import React from 'react'


function CoinItem(props) {
  // var price = coins.current_price;
  return (
    <div className="coin-row" >
        <p>{props.coins.market_cap_rank}</p>
        <div className="coin-identity">
            <img className="coin-image" src={props.coins.image} />
            <p className="coin-symbol">{props.coins.symbol.toUpperCase()}</p>
        </div>
        <p>${props.coins.current_price.toLocaleString()}</p>
        { props.coins.price_change_percentage_24h < 0 ? <p style={{color: "red" }} >{props.coins.price_change_percentage_24h.toFixed(2)}%</p> : <p style={{color: "green" }} >{props.coins.price_change_percentage_24h.toFixed(2)}%</p>  }
        <p className="hide-in-mobile">{props.coins.total_volume.toLocaleString()}</p>
        <p className="hide-in-mobile">{props.coins.market_cap.toLocaleString()}</p>
    </div>
  )
}

export default CoinItem