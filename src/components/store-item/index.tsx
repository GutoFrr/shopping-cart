import { AddShoppingCart, RemoveShoppingCart } from '@mui/icons-material'
import { Button } from '@mui/material'
import React from 'react'
import { formatCurrency } from '../../utilities/formatCurrency'
import {
  AddToCart,
  Container,
  ContentButtons,
  ContentTitle,
  InCartButtons,
  ItemContent,
  QuantityButtons,
  RemoveButton
} from './styles'

interface IStoreItemProps {
  id: number
  name: string
  price: number
  imgUrl: string
}

const StoreItem: React.FC<IStoreItemProps> = ({ id, name, price, imgUrl }) => {
  const quantity = 0

  return (
    <Container>
      <img src={imgUrl} alt="" />
      <ItemContent>
        <ContentTitle>
          <h2>{name}</h2>
          <h3>{formatCurrency(price)}</h3>
        </ContentTitle>
        <ContentButtons>
          {quantity === 0 ? (
            <AddToCart variant="contained">+ add to cart</AddToCart>
          ) : (
            <QuantityButtons>
              <InCartButtons>
                <Button variant="contained">
                  <RemoveShoppingCart />
                </Button>
                <div>
                  <span>{quantity}</span> in cart
                </div>
                <Button variant="contained">
                  <AddShoppingCart />
                </Button>
              </InCartButtons>
              <RemoveButton variant="contained" color="error">
                remove
              </RemoveButton>
            </QuantityButtons>
          )}
        </ContentButtons>
      </ItemContent>
    </Container>
  )
}

export default StoreItem
