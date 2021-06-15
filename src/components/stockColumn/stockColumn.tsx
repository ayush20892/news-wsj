import "./stockColumn.css"
import { useEffect, useState } from "react"
import axios from "axios"
import * as convert from "xml-js"
import { Markup } from 'interweave';

export function StockColumn () {
  const [data, setData] = useState(null)
  console.log(data)
  useEffect(() => {
    (async () => {
      let feed = await axios.get('https://rss.app/feeds/NPN0UWLI42cvKEEo.xml');
      let res = convert.xml2json(feed.data, {compact: false, spaces: 4})
    
      setData(JSON.parse(res).elements[0].elements[0].elements[8].elements[1].elements[0].cdata)
    })()
  })
  return(
    <div className="stockColumn">
      <Markup content={data} />
    </div>
  );
}