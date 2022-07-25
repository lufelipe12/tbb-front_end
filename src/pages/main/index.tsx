import ProductsContainer from "../../components/products"
import AdvantagesImage from "../../assets/icons.png"
import NewsContainer from "../../components/newsContainer"
import Button from "../../components/button"
import {
  StyledMain,
  BannerImg,
  TextSection,
  AdvantagesDiv,
  StyledH2,
  BannerProducts,
} from "./styles"

const MainPage = () => {
  return (
    <StyledMain>
      <BannerImg />
      <TextSection>
        <h2>we’re here to help</h2>
        <p>
          When it comes to caring for our most intimate areas, we’ve lost our
          connection.
        </p>
        <p>
          Embarrassed, unwilling, or unable to communicate with others, we’re
          needlessly neglecting the parts of our bodies that need it most.
        </p>
        <p>
          We’re here to help. Providing you with the expertise, knowledge and
          products you need to feel confident in your personal care.
        </p>
      </TextSection>
      <AdvantagesDiv>
        <img src={AdvantagesImage} />
      </AdvantagesDiv>
      <TextSection>
        <h2>
          whatever your age. whatever your lifestyle. whatever your interests.
        </h2>
        <p>
          Co-created with gynaecologists, our revolutionary products have been
          expertly developed to support your intimate microbiome and pH balance,
          and strengthen overall natural health.
        </p>
        <p>
          As the experts in intimate hygiene, we want to bring discussion about
          intimate wellness care out of the dark and demystify the taboos that
          surround it.
        </p>
      </TextSection>
      <StyledH2>our products</StyledH2>
      <ProductsContainer />
      <BannerProducts />
      <StyledH2>keep up to date with our discoveries</StyledH2>
      <NewsContainer />
      <Button>see more</Button>
    </StyledMain>
  )
}

export default MainPage
