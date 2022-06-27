import { ShoppingCart } from '@mui/icons-material'
import { NavLink } from 'react-router-dom'
import { useShoppingCart } from '../../context/ShoppingCartContext'
import {
  CartIcon,
  CartIndicator,
  Container,
  NavContainer,
  NavLinks
} from './styles'

const Navbar = () => {
  const { openCart, cartQuantity } = useShoppingCart()

  return (
    <Container>
      <NavContainer>
        <NavLinks>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? 'link active' : 'link')}
          >
            home
          </NavLink>
          <NavLink to="/store" className="link">
            store
          </NavLink>
          <NavLink to="/about" className="link">
            about
          </NavLink>
        </NavLinks>
        {cartQuantity > 0 && (
          <CartIcon onClick={openCart}>
            <ShoppingCart />
            <CartIndicator>{cartQuantity}</CartIndicator>
          </CartIcon>
        )}
      </NavContainer>
    </Container>
  )
}

export default Navbar
