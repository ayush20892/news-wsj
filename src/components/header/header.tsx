import "./header.css"
import { IoSearchOutline } from "react-icons/io5"
import headerImage from "./header1.jpg"


export function Header() {
  return(
    <header>
      <div className="main-heading">
        <div className="page-heading">
          <img src={headerImage} alt="header" />
        </div>
        <div className="side-options">
          Subscribe &nbsp; <span className="vertical-line"></span> &nbsp;  Sign In
        </div>
      </div>
      <div className="menu-options">
        <ul>
          <li>Home</li>
          <li>World</li>
          <li>U.S.</li>
          <li>Politics</li>
          <li>Economy</li>
          <li>Business</li>
          <li>Tech</li>
          <li>Markets</li>
          <li>Opinion</li>
          <li>Life & Arts</li>
          <li>Real Estate</li>
          <li>WSJ.Magazine</li>
          <li>Sports</li>
        </ul>
        <div className="search-option">
          Search &nbsp; <IoSearchOutline style={{fontSize: "1rem", position: "relative", top: "0.3rem"}}/>
        </div>
      </div>
      <hr></hr>
    </header>
  );
}