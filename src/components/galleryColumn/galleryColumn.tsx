import "./galleryColumn.css"
import { BsClock } from "react-icons/bs"
import { Loader } from "../loader/loader"
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
      try { 
        setLoader(true)
        let feed = await axios.get('https://rss.app/feeds/YhukB80y5RRxBkX6.xml');
        var xml = new XMLParser().parseFromString(feed.data);   

        setLoader(false)
        setData({
          heading1: xml.children[0].children[11].children[0].value.toString().split(">")[0],
          image1: xml.children[0].children[11].children[6].attributes.url,
          heading2: xml.children[0].children[12].children[0].value.toString().split(">")[0],
          image2: xml.children[0].children[12].children[6].attributes.url,
          heading3: xml.children[0].children[10].children[0].value.toString().split(">")[0],
          image3: xml.children[0].children[10].children[6].attributes.url,
          heading4: xml.children[0].children[9].children[0].value.toString().split(">")[0],
          image4: xml.children[0].children[9].children[6].attributes.url,
        })
      } catch(err) {
        console.error(err)
        setLoader(false)
      }

    })()
  },[])
  return(
    <>
    {loader ? <Loader /> : <div className="galleryColumn">
      <div className="gallery-news">
        <img src={data.image1} alt=".." />
        <h2>{data.heading1}</h2>
        <div className="clock">
          <BsClock />
          <span>4 min read</span>
        </div>
      </div>

      <div className="gallery-news">
        <img src={data.image2} alt=".." />
        <h2>{data.heading2}</h2>
        <div className="clock">
          <BsClock />
          <span>2 min read</span>
        </div>
      </div>

      <div className="gallery-news">
        <img src={data.image3} alt=".." />
        <h2>{data.heading3}</h2>
        <div className="clock">
          <BsClock />
          <span>4 min read</span>
        </div>
      </div>

      <div className="gallery-news">
        <img src={data.image4} alt=".." />
        <h2>{data.heading4}</h2>
        <div className="clock">
          <BsClock />
          <span>3 min read</span>
        </div>
      </div>
    </div>}
    </>
  );
}