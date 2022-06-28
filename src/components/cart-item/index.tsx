import { useShoppingCart } from '../../context/ShoppingCartContext'
import {
  Container,
  FinalDetails,
  ItemDetails,
  RemoveButton,
  SingleItemDetail,
  SingleItemPrice
} from './styles'
import storeItems from '../../data/items.json'
import { formatCurrency } from '../../utilities/formatCurrency'
import { Close } from '@mui/icons-material'

interface ICartItemProps {
  id: number
  quantity: number
}

const CartItem: React.FC<ICartItemProps> = ({ id, quantity }) => {
  const { removeFromCart } = useShoppingCart()
  const item = storeItems.find(i => i.id === id)
  if (item == null) return null

  return (
    <Container>
      <img src={item.imgUrl} alt="Cart item product" />
      <ItemDetails>
        <SingleItemDetail>
          <div>
            {item.name} {quantity > 1 && <span>x{quantity}</span>}
          </div>
          <SingleItemPrice>{formatCurrency(item.price)}</SingleItemPrice>
        </SingleItemDetail>
        <FinalDetails>
          {formatCurrency(item.price * quantity)}
          <RemoveButton onClick={() => removeFromCart(item.id)}>
            <Close />
          </RemoveButton>
        </FinalDetails>
      </ItemDetails>
    </Container>
  )
}

export default CartItem
