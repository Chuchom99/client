// https://colorhunt.co/palette/0000003e065f700b978e05c2
import React, {useState, useEffect, CSSProperties} from 'react';
import {Row, Col, } from "react-bootstrap";
import Carousell from "../component/Carousel";
import Card from "../component/Card";
import CoinItem from '../component/CoinItem';
import { Link } from 'react-router-dom';
import Coin from './Coin';
import ClipLoader from "react-spinners/ClipLoader";
import "./Home.css";
import axios from 'axios';
import { BiNews,BiSupport  } from 'react-icons/bi';
import { BsFillShareFill } from 'react-icons/bs';
import { GiHeavyFighter } from 'react-icons/gi';


const override: CSSProperties = {
  display: "block",
  margin: "5% auto",
  borderColor: "#8E05C2",
  backGround: "#FAFBF5"
};



function Home() {
  
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(false);
  const [noOfCoin, setNoOfCoin]= useState(10);
  
  const slice = coins.slice(0, noOfCoin);
  function viewMore() {
    setNoOfCoin(noOfCoin + noOfCoin)
  }

  // const color = "#0A09AB";
  const url = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=1000&page=1&sparkline=false";
  useEffect(() => {
    setLoading(true)
   
    setTimeout(() => {
   axios.get(url).then((res) => {
       setLoading(false)
       setCoins(res.data)})
       .then((err) => {console.log(err);})
      },800)
  },[]);
  // useEffect(()=> {
  //   setLoading(true)
  //   setTimeout(()=> {
  //     setLoading(false)
  //   }, 8000)
  // })
  return (
    <div className="home">
      <Carousell />
      <div className="second">
      <div className="feature-div">
          <Row>
            <Col className="feature-col"><Link className="features"  to="/news" >
            <BiNews className="feature-icon" />
              <p>News</p>
            </Link></Col>
            <Col className="feature-col"><Link className="features" to="/news" >
            <BsFillShareFill className="feature-icon"  />
              <p>Refferal</p>
            </Link></Col>
            <Col className="feature-col"><Link className="features" to="/news" >
            <GiHeavyFighter className="feature-icon"  />
              <p>Trading Strategy</p>
            </Link></Col>
            <Col className="feature-col"><Link className="features"to="/news" >
            <BiSupport className="feature-icon"  />
              <p>Support</p>
            </Link></Col>
          </Row>
      </div>
      <div className="card-row">
        <Row>
          <Col><Card head="Suscribe" des="Get our free signal updates" img="/images/2.png"/></Col>
          <Col><Card head="VIP member" des="sign up for premium trading signals today" img="/images/2.png" /></Col>
        </Row>
      </div>
      <div className="heading">
        <p>#</p>
        <p className="coin-name">Coins</p>
        <p className="coin-price" >Price </p>
        <p className="coin-24h">24h</p>
        <p className="hide-in-mobile">Volume</p>
        <p className="hide-in-mobile">Mkt Cap</p>
     </div>
     
     {loading ? <div ><ClipLoader color={"#0A09AB"} loading={loading} size={35} cssOverride={override}  /></div> : slice.map(coins => {
       return(
         <Link className="coin-link" to={`/coin/${coins.id}`} element={<Coin />} key={coins.id}>
         <CoinItem coins={coins}/>
         </Link>)
     })  }

      </div>
     <button onClick={viewMore} className="view-more">View more</button>

      
    </div>
  )
}

export default Home