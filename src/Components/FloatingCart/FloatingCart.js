import React from 'react'
import './FloatingCart.css'
import cartIcon from './shopping-cart.svg'
import { Link } from 'react-router-dom'

export default function FloatingCart() {
  return (
    <>
      <Link to='/shoppingcart'>
        <div className='floating-cart'>
          <p>Votre Panier</p>
          <div className='img-notif-container'>
            <img src={cartIcon} alt='cart-icon' />
            <span className='notif'>0</span>
          </div>
        </div>
      </Link>
    </>
  )
}
