import { AddShoppingCart, RemoveShoppingCart } from '@mui/icons-material'
import { Button } from '@mui/material'
import React from 'react'
import { useShoppingCart } from '../../context/ShoppingCartContext'
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
  const {
    getItemQuantity,
    increaseCartQuantity,
    decreaseCartQuantity,
    removeFromCart
  } = useShoppingCart()
  const quantity = getItemQuantity(id)

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
            <AddToCart
              variant="contained"
              onClick={() => increaseCartQuantity(id)}
            >
              + add to cart
            </AddToCart>
          ) : (
            <QuantityButtons>
              <InCartButtons>
                <Button
                  variant="contained"
                  onClick={() => decreaseCartQuantity(id)}
                >
                  <RemoveShoppingCart />
                </Button>
                <div>
                  <span>{quantity}</span> in cart
                </div>
                <Button variant="contained" onClick={() => increaseCartQuantity(id)}>
                  <AddShoppingCart />
                </Button>
              </InCartButtons>
              <RemoveButton variant="contained" color="error"  onClick={() => removeFromCart(id)}>
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
