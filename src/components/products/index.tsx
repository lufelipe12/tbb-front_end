import ProductCard from "../productCard"
import ProductBlue from "../../assets/Blue-Pack.png"
import ProductGreen from "../../assets/Green-Pack.png"
import ProductPink from "../../assets/Pink-Pack.png"

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
    <div>
      {products.map((product, index) => (
        <ProductCard {...product} key={index} />
      ))}
    </div>
  )
}

export default ProductsContainer
