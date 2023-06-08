import React ,{ useState, useEffect, useRef } from 'react'
import './ProductShowcase.css'
import { useParams } from 'react-router-dom'
import inventory from './../../data/inventory'
import { useDispatch } from 'react-redux'

export default function ProductShowcase() {

  const [nbrMugs, setNbrMugs] = useState(1)
  const dispatch = useDispatch()
  const addingInfo = useRef()
  let timerInfo;
  let display = true

  const {id} = useParams()
  const productClicked = inventory.findIndex((item) => item.title.replace(/\s+/g, '').trim() === id)

  const addToCart = (e) => {
    e.preventDefault()

    const itemAdded = {
      ...inventory[productClicked],
      quantity: nbrMugs
    }

    dispatch({
      type: "ADD_TO_CART", 
      payload: itemAdded
    })

    addingInfo.current.innerHTML = `${nbrMugs} ${inventory[productClicked].title} ajouté(s) au panier`

    if (display) {
      display = false
      timerInfo = setTimeout(() => {
        addingInfo.current.innerHTML = ''
        display = true
      }
      , 3000)
    }   
  }

  useEffect(() => {
    return () => {
      clearTimeout(timerInfo)
    }
  }, [])



  return (
    <div className='showcase'>
      <div className='container-img-showcase'>
        <img className='img-showcase' src={process.env.PUBLIC_URL + `/images/${inventory[productClicked].img}.png`} alt={inventory[productClicked].title} />
      </div>
      <div className="product-infos">
        <h1>{inventory[productClicked].title}</h1>
        <p>Prix : {inventory[productClicked].price}€</p>
        <form onSubmit={addToCart}>
          <label htmlFor="quantity">Quantité : </label>
          <input type="number" id="quantity" name="quantity" value={nbrMugs} onChange={(e) => setNbrMugs(Number(e.target.value))} />
          <button type='submit'>Ajouter au panier</button>
          <span className="adding-info" ref={addingInfo}></span>
        </form>
      </div>
    </div>
  )
}
