import React from 'react'
import './Home.css'
import imgHomeShop from './shopimg.jpg'

export default function Home() {
  return (
    <div className='global-container'>
      <div className='home-title'>
        <h1>BIENVENUE AU <span>SHOP</span></h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, accusantium? Numquam delectus autem necessitatibus atque aut sequi at ut vero quia, illum, sapiente nostrum dolores deserunt illo expedita repudiandae quas aliquid quidem? Modi, quas, quaerat provident iusto ea doloremque aliquid animi magni quisquam ratione dolorum enim dicta saepe consectetur perferendis doloribus perspiciatis placeat nemo sapiente quam cum consequuntur adipisci voluptas in? Reiciendis saepe pariatur, ducimus et libero hic velit iste magnam porro animi autem exercitationem mollitia eum dolore! Assumenda recusandae ipsam dolores, ab ipsum quod, ex dolorum animi illum magnam aperiam commodi possimus corporis earum odit minima non soluta ratione culpa repellat in quia itaque! Autem hic, porro quaerat dolores illo ipsam quia culpa aspernatur laboriosam, minima neque accusamus.</p>
        <img src={imgHomeShop} alt='shop' />
      </div>  
    </div>
  )
}
