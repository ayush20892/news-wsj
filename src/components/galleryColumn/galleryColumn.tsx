import "./galleryColumn.css"
import { BsClock } from "react-icons/bs"
import { useEffect, useState } from "react"
import axios from "axios"
var XMLParser = require('react-xml-parser');


export function GalleryColumn() {
  const [loader, setLoader] = useState(false)
  const [data, setData] = useState({
    heading1: "",
    image1: "",
    heading2: "",
    image2: "",
    heading3: "",
    image3: "",
    heading4: "",
    image4: "",
  })
  useEffect(() => {
    (async () => {
      let feed = await axios.get('https://rss.app/feeds/UlmIWy7VEravys8Y.xml');
      var xml = new XMLParser().parseFromString(feed.data);   

      setData({
        heading1: xml.children[0].children[8].children[0].value,
        image1: xml.children[0].children[8].children[6].attributes.url,
        heading2: xml.children[0].children[12].children[0].value,
        image2: xml.children[0].children[12].children[6].attributes.url,
        heading3: xml.children[0].children[10].children[0].value,
        image3: xml.children[0].children[10].children[6].attributes.url,
        heading4: xml.children[0].children[13].children[0].value,
        image4: xml.children[0].children[13].children[6].attributes.url,
      })

    })()
  },[])
  return(
    <div className="galleryColumn">
      <div className="gallery-news">
        <img src={data.image1} alt=".." />
        <h2>{data.heading1}</h2>
        <div className="clock">
          <BsClock />
          <span>4 min</span>
        </div>
      </div>
      <hr />

      <div className="gallery-news">
        <img src={data.image2} alt=".." />
        <h2>{data.heading2}</h2>
        <div className="clock">
          <BsClock />
          <span>2 min</span>
        </div>
      </div>
      <hr />

      <div className="gallery-news">
        <img src={data.image3} alt=".." />
        <h2>{data.heading3}</h2>
        <div className="clock">
          <BsClock />
          <span>4 min</span>
        </div>
      </div>
      <hr />

      <div className="gallery-news">
        <img src={data.image4} alt=".." />
        <h2>{data.heading4}</h2>
        <div className="clock">
          <BsClock />
          <span>3 min</span>
        </div>
      </div>
    </div>
  );
}