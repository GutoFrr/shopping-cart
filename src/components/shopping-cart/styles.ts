import styled from 'styled-components'

interface IShoppingCartSlide {
  active: string | boolean
}

export const Container = styled.div<IShoppingCartSlide>`
  width: 25vw;
  height: 100vh;
  padding-inline: 20px;
  display: flex;
  flex-direction: column;
  background-color: ${props => props.theme.colors.background};
  box-shadow: ${props =>
    props.active ? '0 10000px 10000px 10000px rgba(0, 0, 0, 0.2)' : '0'};
  position: fixed;
  z-index: 10;
  top: 0;
  right: ${props => (props.active ? '0' : '-40vw')};
  transition: all 0.4s;
`

export const ShoppingCartTitle = styled.div`
  width: 100%;
  padding-top: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 24px;
  margin-bottom: 30px;

  span {
    width: 40px;
    height: 40px;
    display: grid;
    place-items: center;
    font-size: 14px;
    border: none;
    border-radius: 6px;
    margin-left: 10px;
    cursor: pointer;
    transition: all 0.3s;

    :hover {
      color: #fff;
      border: 1px solid ${props => props.theme.colors.secundary};
      background-color: ${props => props.theme.colors.secundary};
    }
  }
`

export const ShoppingCartItems = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 20px;
  margin-bottom: 30px;
`

export const CartSubtotal = styled.div`
  margin-left: auto;
  font-size: 26px;
  font-weight: 600;
`
