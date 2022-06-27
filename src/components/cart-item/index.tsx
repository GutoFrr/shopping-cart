import { Container } from './styles'

interface ICartItemProps {
  id: number
  quantity: number
}

const CartItem: React.FC<ICartItemProps> = ({ id, quantity }) => {
  return <Container>CartItem</Container>
}

export default CartItem
