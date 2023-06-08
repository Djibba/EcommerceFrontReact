import { Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Home from './Pages/Home/Home';
import FloatingCart from './Components/FloatingCart/FloatingCart';
import Contact from './Pages/Contact/Contact';
import ShoppingCart from './Pages/ShopppingCart/ShoppingCart';
import Products from './Pages/Products/Products';
import ProductShowcase from './Pages/ProductShowcase/ProductShowcase';

function App() {
  return (
    <>
      <Navbar />
      <FloatingCart />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/products' element={<Products />} />
        <Route path='/products/:id' element={<ProductShowcase />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/shoppingcart' element={<ShoppingCart />} />
      </Routes>

    </>
  );
}

export default App;
