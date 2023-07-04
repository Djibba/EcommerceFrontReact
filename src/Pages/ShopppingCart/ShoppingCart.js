import React from 'react'
import './ShoppingCart.css'
import { useSelector, useDispatch } from 'react-redux'


export default function ShoppingCart() {

  const storeState = useSelector(state => state)
  const dispatch = useDispatch()

  const handleChange = (e, id) => {
    const indexItem = storeState.cartItems.findIndex(item => item.id === id)
    const newCartItems = {
      ...storeState.cartItems[indexItem],
      quantity: Number(e.target.value)
    }
    dispatch({ type: "UPDATE_ITEM", payload: newCartItems })

  }

  let totalPrice = 0
  if (storeState.cartItems.length !== 0) {
    for (let i = 0; i < storeState.cartItems.length; i++) {
      totalPrice += storeState.cartItems[i].price * storeState.cartItems[i].quantity
    }
  }

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
                    <input
                    onChange={e => handleChange(e, item.id)} 
                    type="number" 
                    name="quantity" 
                    id="quantity" 
                    value={item.quantity} />
                  </div>

                
              </li>
            )
          })}  
        </ul>
        <p className='total-price'>Total : {`${totalPrice.toFixed(2)}`}€</p>
        <button className='btn-cart'>Valider mon panier</button>
    </div>
  )
}
