import { Button } from '@mui/material'
import styled from 'styled-components'

export const Container = styled.div`
  width: 600px;
  height: 500px;
  box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.3);
  border-radius: 12px;
  background-color: ${props => props.theme.colors.background};

  img {
    border-radius: 12px;
    width: 100%;
    height: 68%;
    object-fit: cover;
    image-rendering: optimizeQuality;
  }
`

export const ItemContent = styled.div`
  width: 100%;
  height: 32%;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`

export const ContentTitle = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;

  h2 {
    font-size: 28px;
    font-weight: 500;
  }

  h3 {
    font-size: 20px;
    font-weight: 500;
    color: ${props => props.theme.colors.subtitle};
  }
`

export const ContentButtons = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const AddToCart = styled(Button)`
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const QuantityButtons = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`

export const InCartButtons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 15px;
  font-size: 20px;

  span {
    font-size: 24px;
    color: ${props => props.theme.colors.subtitle};
  }
`

export const RemoveButton = styled(Button)``
