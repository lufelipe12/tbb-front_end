import GirlInGreen from "../../assets/woman-in-green.png"
import Lady from "../../assets/lady.png"
import Bubbles from "../../assets/like-bubbles.png"

import { NewsContainerStyled } from "./styles"
import NewsCard from "../newsCard"

const NewsContainer = () => {
  const news = [
    {
      img: GirlInGreen,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      img: Lady,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      img: Bubbles,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
  ]

  return (
    <NewsContainerStyled>
      {news.map((item, index) => (
        <NewsCard {...item} key={index} />
      ))}
    </NewsContainerStyled>
  )
}

export default NewsContainer
