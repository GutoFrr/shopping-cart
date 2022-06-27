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
  box-shadow: ${props => props.active ? '0 10000px 10000px 10000px rgba(0, 0, 0, 0.2)' : '0'};
  position: fixed;
  z-index: 10;
  top: 0;
  right: ${props => props.active ? '0' : '-40vw'};
  transition: all 0.4s;
`

export const ShoppingCartTitle = styled.div`
  width: 100%;
  padding-top: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  span {
    cursor: pointer;
  }
`

export const ShoppingCartItems = styled.div``

export const SingleItem = styled.div``
