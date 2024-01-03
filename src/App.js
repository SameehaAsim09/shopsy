import './App.css';
import Navbar from './Components/Navbar/Navbar';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Shop from './Pages/Shop';
import ShopCategory from './Pages/ShopCategory';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import LoginSingnUp from './Pages/LoginSingnUp';
import Footer from './Components/Footer/Footer';
import men_banner from'./Components/Assets/banner_mens.png'
import women_banner from'./Components/Assets/banner_women.png'
import kids_banner from'./Components/Assets/banner_kids.png'

function App() {
  const buttonHandler= (e) => {
    console.log(e);
  }
  return (
    <div >
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Shop />} />
        <Route path='/mens' element={<ShopCategory category="men" banner={men_banner}/>} />
        <Route path='/womens' element={<ShopCategory category="women" banner={women_banner}/>} />
        <Route path='/kids' element={<ShopCategory category="kid" banner={kids_banner}/>} />
        <Route path='/product' element={<Product />}>
          <Route path=':productId' element={<Product />} />
        </Route>
        <Route path='/cart' element={<Cart />} />
        <Route path='/login' element={<LoginSingnUp onSubmitData={buttonHandler}/>} />
      </Routes>
      <Footer />
      </BrowserRouter>

    </div>
  );
}

export default App;
