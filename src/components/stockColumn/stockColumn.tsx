import "./stockColumn.css"
import chartImage from "./chart.jpg";
import { useEffect, useState } from "react"
import axios from "axios"
import { Loader } from "../loader/loader";
import { IoIosArrowForward } from "react-icons/io"
var XMLParser = require('react-xml-parser');


export function StockColumn () {
  const [loader, setLoader] = useState(false)
  useEffect(() => {
    (async () => {
      try { 
        setLoader(true)
        let feed = await axios.get('https://rss.app/feeds/UV9AjfnZEQj0qrOC.xml');
        var xml = new XMLParser().parseFromString(feed.data);  
        setLoader(false)
        // console.log(xml.children[0].children) 
      } catch(err) {
        setLoader(false)
        console.log(err)
      }

    })()
  },[])
  return(
    <>
    {loader ? <Loader /> : <div className="stockColumn">
      <div className="stock-box">
        <div className="market-header">
          <div className="market-type">US</div>
          <div className="market-type">EUROPE</div>
          <div className="market-type">ASIA</div>
          <div className="market-type">FX</div>
          <div className="market-type">RATES</div>
          <div className="market-type">FUTURES</div>
        </div>
        <div className="market-graph">
          <div className="market-chart">
            <img src={chartImage} alt="chart" />
          </div>
          <div className="market-dataframe">
            <div className="dataframe-time">
              1D
            </div>
            <div className="dataframe-time">
              5D
            </div>
            <div className="dataframe-time">
              3M
            </div>
            <div className="dataframe-time">
              6M
            </div>
            <div className="dataframe-time">
              1Y
            </div>
          </div>
        </div>
        <div className="market-instruments">
          <div className="market-data-wrapper bold-wrapper">
            <div className="data-quote-name">
              DJIA
            </div>
            <div className="quote-tick">
              34033.67
            </div>
            <div className="quote-net">
              -265.66
            </div>
            <div className="quote-percentage">
              -0.77%
            </div>
          </div>
          <div className="market-data-wrapper">
            <div className="data-quote-name">
              S&P 500
            </div>
            <div className="quote-tick">
              4223.70
            </div>
            <div className="quote-net">
              -22.89
            </div>
            <div className="quote-percentage">
              -0.54%
            </div>
          </div>
          <div className="market-data-wrapper">
          <div className="data-quote-name">
              Nasdaq
            </div>
            <div className="quote-tick">
              14039.68
            </div>
            <div className="quote-net">
              -33.17
            </div>
            <div className="quote-percentage">
              -0.24%
            </div>
          </div>
          <div className="market-data-wrapper">
            <div className="data-quote-name">
              Russell 2000
            </div>
            <div className="quote-tick">
              2314.69
            </div>
            <div className="quote-net">
              -5.38
            </div>
            <div className="quote-percentage">
              -0.23%
            </div>
          </div>
          <div className="market-data-wrapper">
          <div className="data-quote-name">
            DJ Rotal Mkt
          </div>
          <div className="quote-tick">
            44133.71
          </div>
          <div className="quote-net">
            -214.58
          </div>
          <div className="quote-percentage">
            -0.48%
          </div>
        </div>
      </div>
        <div className="stock-footer">
          <div className="footer-item">
            View Watchlist
          </div>
          <div className="footer-item">
            View All Market Data →
          </div>
        </div>
      </div>
      <div className="opinion">
        <h2>OPINION</h2>
        <IoIosArrowForward style={{position: "relative", top: "0.3rem", fontSize: "25px"}}/>
      </div>
    </div>}
    </>
  );
}

