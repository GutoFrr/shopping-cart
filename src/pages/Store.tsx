import { CardItem, Container } from '../styles/Pages/Store'
import storeItems from '../data/items.json'
import StoreItem from '../components/store-item'

const Store = () => {
  return (
    <Container>
      {storeItems.map(item => (
        <CardItem key={item.id}>
          <StoreItem {...item} />
        </CardItem>
      ))}
    </Container>
  )
}

export default Store
