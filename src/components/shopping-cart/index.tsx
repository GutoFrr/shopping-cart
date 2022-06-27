import { CloseRounded } from '@mui/icons-material'
import { useShoppingCart } from '../../context/ShoppingCartContext'
import CartItem from '../cart-item'
import { Container, ShoppingCartItems, ShoppingCartTitle } from './styles'

interface IShoppingCartProps {
  isOpen: boolean
}

const ShoppingCart: React.FC<IShoppingCartProps> = ({ isOpen }) => {
  const { closeCart, cartItems } = useShoppingCart()

  return (
    <Container active={isOpen}>
      <ShoppingCartTitle>
        Cart
        <span onClick={closeCart}>
          <CloseRounded />
        </span>
      </ShoppingCartTitle>
      <ShoppingCartItems>
        {cartItems.map(item => (
          <CartItem key={item.id} {...item} />
        ))}
      </ShoppingCartItems>
    </Container>
  )
}

export default ShoppingCart
