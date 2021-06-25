import "./newsColumn.css"
import { BsClock } from "react-icons/bs"
import { Loader } from "../loader/loader"
import { useEffect, useState } from "react"
import axios from "axios"
var XMLParser = require('react-xml-parser');


export function NewsColumn() {
  const [loader, setLoader] = useState(false)
  const [data, setData] = useState({
    heading1: "",
    description1: "",
    point1: "",
    point2: "",
    point3: "",
    point4: "",
    heading2: "",
    image: "",
    description2: "",
    heading3: "",
    description3: "",
  })
  useEffect(() => {
    (async () => {
      try { 
        setLoader(true)
        let feed = await axios.get('https://rss.app/feeds/YhukB80y5RRxBkX6.xml');
        var xml = new XMLParser().parseFromString(feed.data);   
        setLoader(false)
        setData({
          heading1: xml.children[0].children[8].children[0].value.toString().split(">")[0],
          description1: xml.children[0].children[9].children[0].value.toString().split(">")[0],
          point1: xml.children[0].children[10].children[0].value.toString().split(">")[0],
          point2: xml.children[0].children[11].children[0].value.toString().split(">")[0],
          point3: xml.children[0].children[9].children[0].value.toString().split(">")[0],
          point4: xml.children[0].children[12].children[0].value.toString().split(">")[0],
          heading2: xml.children[0].children[10].children[0].value.toString().split(">")[0],
          image: xml.children[0].children[10].children[6].attributes.url,
          description2: xml.children[0].children[11].children[0].value.toString().split(">")[0],
          heading3: xml.children[0].children[12].children[0].value.toString().split(">")[0],
          description3: xml.children[0].children[8].children[0].value.toString().split(">")[0],
        })
      } catch(err) {
        setLoader(false)
        console.log(err)
      }

    })()
  },[])

  return(
    <>
    {loader ? <Loader /> : <div className="newsColumn">
      <h2>{data.heading1}</h2>
      <p>
        {data.description1}
        <span>
          <BsClock style={{fontSize: "0.8rem"}}/> 
          <small>
            <span>3</span>
            &nbsp; min</small>
        </span>
      </p>
      <ul>
        <li>{data.point1}</li>
        <li>{data.point2}</li>
        <li>{data.point3}</li>
        <li>{data.point4}</li>
      </ul>
      <hr />
      <div className="news-box">
        <h3>{data.heading2}.</h3>
        <div className="news-details-img">
          <p>
            {data.description2}
            <span>
              <BsClock style={{fontSize: "0.8rem"}}/> 
              <small>
                <span>3</span>
                &nbsp; min</small>
            </span>
          </p>
          <img src={data.image} alt=".." />
        </div>
      </div>
      <hr />
      <div className="news-box">
        <h3>{data.heading3}</h3>
        <div className="news-details">
          <p>
            {data.description3}
            <span>
              <BsClock style={{fontSize: "0.8rem"}}/> 
              <small>
                <span>3</span>
                &nbsp; min</small>
            </span>
          </p>
        </div>
      </div>
      <hr />
    </div>}
    </>
  );
}