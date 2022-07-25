import ProductCard from "../productCard"
import ProductBlue from "../../assets/Blue-Pack.png"
import ProductGreen from "../../assets/Green-Pack.png"
import ProductPink from "../../assets/Pink-Pack.png"
import { ProductContainer } from "./styles"

const ProductsContainer = () => {
  const products = [
    {
      img: ProductBlue,
      use1: "intibiome wellness daily",
      use2: "intimate wash",
      type: "wellness",
    },
    {
      img: ProductGreen,
      use1: "intibiome active extra protection",
      use2: "intimate wash",
      type: "active",
    },
    {
      img: ProductPink,
      use1: "intibiome agecare dryness",
      use2: "relief intimate wash",
      type: "agecare",
    },
  ]

  return (
    <ProductContainer>
      {products.map((product, index) => (
        <ProductCard {...product} key={index} />
      ))}
    </ProductContainer>
  )
}

export default ProductsContainer
