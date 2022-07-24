import { VscSearch } from "react-icons/vsc"
import { IoIosArrowDown } from "react-icons/io"

import header_img from "../../assets/header-img-2.png"
import { StyledHeader, StyledNav, StyledDiv } from "./styles"

const Header = () => {
  return (
    <StyledHeader>
      <StyledNav>
        <section className="top-nav">
          <input id="menu-toggle" type="checkbox" />
          <label className="menu-button-container" htmlFor="menu-toggle">
            <div className="menu-button"></div>
          </label>
          <ul className="menu">
            <li>
              <a href="#">brand philosophy</a>
            </li>
            <li>
              <a href="#">product technology</a>
            </li>
            <li>
              <a href="#">all products</a>
            </li>
            <li>
              <a href="#">intibiome wellness</a>
            </li>
            <li>
              <a href="#">intibiome active</a>
            </li>
            <li>
              <a href="#">intibiome agecare</a>
            </li>
            <li>
              <a href="#">article 1</a>
            </li>
            <li>
              <a href="#">article 2</a>
            </li>
            <li>
              <a href="#">article 3</a>
            </li>
            <li>
              <a href="#">faq</a>
            </li>
            <li>
              <a href="#">contact us</a>
            </li>
          </ul>
          <ul className="menu-desktop">
            <li>
              <div className="dropdown">
                <button className="dropbtn">
                  about us
                  <IoIosArrowDown className="arrow" />{" "}
                </button>
                <div className="dropdown-content">
                  <a href="#">brand philosophy</a>
                  <a href="#">product technology</a>
                </div>
              </div>
            </li>
            <li>
              <div className="dropdown">
                <button className="dropbtn">
                  our products
                  <IoIosArrowDown className="arrow" />{" "}
                </button>
                <div className="dropdown-content">
                  <a href="#">all products</a>
                  <a href="#">intibiome wellness</a>
                  <a href="#">intibiome active</a>
                  <a href="#">intibiome agecare</a>
                </div>
              </div>
            </li>
            <li>
              <div className="dropdown">
                <button className="dropbtn">
                  intimate health <IoIosArrowDown className="arrow" />{" "}
                </button>
                <div className="dropdown-content">
                  <a href="#">article 1</a>
                  <a href="#">article 2</a>
                  <a href="#">article 3</a>
                  <a href="#">faq</a>
                </div>
              </div>
            </li>
            <li>
              <a href="#">contact us</a>
            </li>
          </ul>
        </section>
      </StyledNav>
      <StyledDiv>
        <img src={header_img} />
        <VscSearch className="icon" />
      </StyledDiv>
    </StyledHeader>
  )
}

export default Header
