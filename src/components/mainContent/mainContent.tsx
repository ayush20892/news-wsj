import "./mainContent.css"
import { NewsColumn } from "../newsColumn/newsColumn"
import { AbstractColumn } from "../abstractColumn/abstractColumn"
import { GalleryColumn } from "../galleryColumn/galleryColumn"
import { StockColumn } from "../stockColumn/stockColumn"

export function MainContent() {
  return (
    <main>
      <div className="news-column">
        <NewsColumn />
      </div>
      
      <div className="abstract-column">
        <AbstractColumn />
      </div>

      <div className="gallery-column" >
        <GalleryColumn />
      </div>

      <div className="stock-column" >
        <StockColumn />
      </div>
    </main>
  )
}