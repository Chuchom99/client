import React, {useState, useEffect, CSSProperties} from 'react'
import axios from 'axios'
import Newsitem from '../component/Newsitem';
import "../component/Newsitem.css"
import ClipLoader from "react-spinners/ClipLoader";

const override: CSSProperties = {
  display: "block",
  margin: "5% auto",
  borderColor: "#8E05C2",
  backGround: "#FAFBF5"
};

function News() {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(false)
    const url = "https://finnhub.io/api/v1/news?category=general&token=cchg08qad3i4bkk56120";

    useEffect(() => {
      setLoading(true)

      setTimeout(() => {
        axios.get(url).then((res) => {
          setLoading(false)
          setNews(res.data)})
        .then((err) => {console.log(err);})
      })
    },[])
  return (
    <div>
      <h1 >Top News</h1>
         {loading ? <ClipLoader color={"black"} loading={loading} size={35} cssOverride={override}  /> : news.map(news => {
       return(
         <Newsitem news={news}/>
         )
     })}
    </div>
  )
};

export default News