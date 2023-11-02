import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import WishList from './pages/WishList';
import Header from './components/Header';
import Footer from './components/Footer';
import ShopCart from './pages/ShopCart';



function App() {
  return (
    <div>
      <Header/>
      <Routes>
        <Route path='/'element={<Home/>}/>
        <Route path='/cart'element={<ShopCart/>}/>
        <Route path='/wishlist'element={<WishList/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
