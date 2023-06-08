import React from 'react'
import './ShoppingCart.css'
import { useSelector, useDispatch } from 'react-redux'


export default function ShoppingCart() {

  const storeState = useSelector(state => state)

  return (
    <div className='global-container'>
        <p className='heading-cart'>Votre panier : </p>
        <ul className="cart-list">
          {storeState.cartItems.map((item) => {
            return (
              <li key={item.id} className='cart-item'>
                
                  <img className='cart-item-img' src={process.env.PUBLIC_URL + `/images/${item.img}.png`} alt={item.title} />
                  <div className="bloc-cart-infos">
                    <h4>{item.title}</h4>
                    <p>Prix : {item.price}€</p>
                  </div>
                  
                  <div className="bloc-input">
                    <label htmlFor="quantity">Quantité : </label>
                    <input type="number" name="quantity" id="quantity" value={item.quantity} />
                  </div>

                
              </li>
            )
          })}  
        </ul>
    </div>
  )
}
