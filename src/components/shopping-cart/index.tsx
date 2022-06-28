import { CloseRounded } from '@mui/icons-material'
import { useShoppingCart } from '../../context/ShoppingCartContext'
import { formatCurrency } from '../../utilities/formatCurrency'
import storeItems from '../../data/items.json'
import CartItem from '../cart-item'
import {
  CartSubtotal,
  Container,
  ShoppingCartItems,
  ShoppingCartTitle
} from './styles'

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
      <CartSubtotal>
        Total:{' '}
        {formatCurrency(
          cartItems.reduce((total, cartItem) => {
            const item = storeItems.find(i => i.id === cartItem.id)
            return total + (item?.price || 0) * cartItem.quantity
          }, 0)
        )}
      </CartSubtotal>
    </Container>
  )
}

export default ShoppingCart
