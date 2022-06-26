import styled from 'styled-components'

export const Container = styled.div`
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.theme.colors.background};
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.2);
  position: sticky;
  top: 0;
`

export const NavContainer = styled.div`
  width: 1170px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const NavLinks = styled.div`
  display: flex;
  column-gap: 20px;

  .link {
    font-size: 18px;
    text-transform: capitalize;
    text-decoration: none;
    color: ${props => props.theme.colors.primary};
    transition: all 0.2s;

    :hover {
      color: ${props => props.theme.colors.linkActive};
    }
  }

  .link.active {
    color: ${props => props.theme.colors.linkActive};
  }
`

export const CartIndicator = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  color: #fff;
  background-color: ${props => props.theme.colors.secundary};
  width: 18px;
  height: 18px;
  display: grid;
  place-items: center;
  font-size: 12px;
  font-weight: 600;
  border-radius: 50%;
  transform: translate(20%, 20%);
`

export const CartIcon = styled.button`
  width: 40px;
  height: 40px;
  display: grid;
  place-items: center;
  border-radius: 50%;
  border: 2px solid transparent;
  color: ${props => props.theme.colors.primary};
  background-color: ${props => props.theme.colors.background};
  box-shadow: 0;
  cursor: pointer;
  position: relative;
  transition: all 0.3s;

  :hover {
    box-shadow: 0 3px 3px rgba(0, 0, 0, 0.2);
    border: 2px solid ${props => props.theme.colors.primary};
  }
`
