import { Card, TypeDiv } from "./styles"

interface ProductCardProps {
  img: string
  use1: string
  use2: string
  type: string
}

const ProductCard = (product: ProductCardProps) => {
  return (
    <Card>
      <img src={product.img} alt="product" />
      <span>{product.use1}</span>
      <span>{product.use2}</span>
      <TypeDiv type={product.type}>
        <h3>{product.type}</h3>
      </TypeDiv>
    </Card>
  )
}

export default ProductCard
