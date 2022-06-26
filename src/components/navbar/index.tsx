import { ShoppingCart } from '@mui/icons-material'
import { NavLink } from 'react-router-dom'
import { CartIcon, CartIndicator, Container, NavContainer, NavLinks } from './styles'

const Navbar = () => {
  return (
    <Container>
      <NavContainer>
        <NavLinks>
          <NavLink to="/" className={({ isActive }) => (isActive ? 'link active' : 'link')}>
            home
          </NavLink>
          <NavLink to="/store" className="link">
            store
          </NavLink>
          <NavLink to="/about" className="link">
            about
          </NavLink>
        </NavLinks>
        <CartIcon>
          <ShoppingCart />
          <CartIndicator>0</CartIndicator>
        </CartIcon>
      </NavContainer>
    </Container>
  )
}

export default Navbar
