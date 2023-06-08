import React from 'react'
import './FloatingCart.css'
import cartIcon from './shopping-cart.svg'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

export default function FloatingCart() {

  const ShoppingCart = useSelector(state => state)
  let totatItems = 0
  ShoppingCart.cartItems.forEach(item => totatItems += item.quantity)

  return (
    <>
      <Link to='/shoppingcart'>
        <div className='floating-cart'>
          <p>Votre Panier</p>
          <div className='img-notif-container'>
            <img src={cartIcon} alt='cart-icon' />
            <span className='notif'>{totatItems}</span>
          </div>
        </div>
      </Link>
    </>
  )
}
