import LabLogo from "../../assets/lab-logo.png"
import InstaLogo from "../../assets/insta-logo.png"
import { StyledFooter, StyledDiv } from "./styles"

const Footer = () => {
  return (
    <StyledFooter>
      <ul>
        <li>
          <a href="#">contact us</a>
        </li>
        <hr />
        <li>
          <a href="#">faq</a>
        </li>
        <hr />
        <li>
          <a href="#">site map</a>
        </li>
        <hr />
        <li>
          <a href="#">privacy policy</a>
        </li>
        <hr />
        <li>
          <a href="#">cookies policy</a>
        </li>
        <hr />
        <li>
          <a href="#">legal notice</a>
        </li>
      </ul>
      <StyledDiv>
        <img src={LabLogo} alt="lab-logo" />
        <img src={InstaLogo} alt="insta-logo" />
      </StyledDiv>
    </StyledFooter>
  )
}

export default Footer
