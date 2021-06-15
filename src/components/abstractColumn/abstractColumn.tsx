import "./abstractColumn.css"
import { BsClock } from "react-icons/bs"
import { useEffect, useState } from "react"
import axios from "axios"
var XMLParser = require('react-xml-parser');


export function AbstractColumn() {
  const [loader, setLoader] = useState(false)
  const [data, setData] = useState({
    heading1: "",
    image1: "",
    description1: "",
    heading2: "",
    image2: "",
    description2: "",
    point1: "",
    point2: "",
    point3: "",
    heading3: "",
    description3: "",
  })
  useEffect(() => {
    (async () => {
      let feed = await axios.get('https://rss.app/feeds/KAuDrp3d71np3YLs.xml');
      var xml = new XMLParser().parseFromString(feed.data);   

      setData({
        heading1: xml.children[0].children[8].children[0].value,
        image1: xml.children[0].children[8].children[6].attributes.url,
        description1: xml.children[0].children[1].value,
        heading2: xml.children[0].children[9].children[0].value,
        image2: xml.children[0].children[9].children[6].attributes.url,
        description2: xml.children[0].children[9].children[0].value,
        point1: xml.children[0].children[10].children[0].value,
        point2: xml.children[0].children[11].children[0].value,
        point3: xml.children[0].children[12].children[0].value,
        heading3: xml.children[0].children[13].children[0].value,
        description3: xml.children[0].children[14].children[0].value,
      })

    })()
  },[])
  return(
    <div className="abstractColumn">
      <img src={data.image1} alt=".." />
      <h2>{data.heading1}</h2>
      <p>
        {data.description1}
        <span>
          <BsClock style={{fontSize: "0.8rem"}}/> 
          <small>
            <span>Long Read</span>
          </small>
        </span>
      </p>
      <hr />
      <div className="news-box">
        <div className="news-text">
          <h2>{data.heading2}</h2>
          <p>
            {data.description2}
            <span>
              <BsClock style={{fontSize: "0.8rem"}}/> 
              <small>
                <span>Long Read</span>
              </small>
            </span>
          </p>
        </div>
        <img src={data.image2} alt=".." />
      </div>
      <ul>
        <li>{data.point1} </li>
        <li>{data.point2}</li>
        <li>{data.point3} </li>
      </ul>
      <hr />
      <div className="news-box">
        <div className="news-text">
          <h2>{data.heading3}</h2>
          <p>
            {data.description3}
            <span>
              <BsClock style={{fontSize: "0.8rem"}}/> 
              <small>
                <span>Long Read</span>
              </small>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}