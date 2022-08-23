import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;

  img {
    min-width: 125px;
    max-width: 125px;
    height: 75px;
    object-fit: cover;
    margin-right: 10px;
  }
`

export const ItemDetails = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

export const SingleItemDetail = styled.div`
  height: 75px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  font-size: 18px;

  span {
    font-size: 14px;
    color: ${props => props.theme.colors.subtitle};
  }
`

export const SingleItemPrice = styled.div`
  font-size: 14px;
  color: ${props => props.theme.colors.subtitle};
`

export const FinalDetails = styled.div`
  display: flex;
  align-items: center;
  font-size: 16px;
  color: ${props => props.theme.colors.subtitle};
`

export const RemoveButton = styled.button`
  width: 40px;
  height: 40px;
  display: grid;
  place-items: center;
  font-size: 14px;
  color: ${props => props.theme.colors.subtitle};
  border: none;
  border-radius: 6px;
  background-color: transparent;
  margin-left: 10px;
  cursor: pointer;
  transition: all 0.3s;

  :hover {
    color: #fff;
    border: 1px solid ${props => props.theme.colors.secundary};
    background-color: ${props => props.theme.colors.secundary};
  }
`
