import { VscSearch } from "react-icons/vsc"

import header_img from "../../assets/header-img-2.png"
import { StyledHeader, StyledNav, StyledDiv } from "./styles"

const Header = () => {
  return (
    <StyledHeader>
      <StyledNav>
        <section className="top-nav">
          <input id="menu-toggle" type="checkbox" />
          <label className="menu-button-container" for="menu-toggle">
            <div className="menu-button"></div>
          </label>
          <ul className="menu">
            <li>Brand philosophy</li>
            <li>Product technology</li>
            <li>All products</li>
            <li>Intibiome wellness</li>
            <li>Intibiome active</li>
            <li>Intibiome agecare</li>
            <li>Article 1</li>
            <li>Article 2</li>
            <li>Article 3</li>
            <li>Faq</li>
            <li>Contact us</li>
          </ul>
        </section>
      </StyledNav>
      <StyledDiv>
        <img src={header_img} />
        <VscSearch />
      </StyledDiv>
    </StyledHeader>
  )
}

export default Header
