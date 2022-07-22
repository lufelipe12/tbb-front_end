import { Card } from "./styles"

interface NewsCardProps {
  img: string
  text: string
}

const NewsCard = (item: NewsCardProps) => {
  return (
    <Card>
      <img src={item.img} alt="product" />
      <span>{item.text}</span>
    </Card>
  )
}

export default NewsCard
