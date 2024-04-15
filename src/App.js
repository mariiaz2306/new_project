import './App.css';
import NavBarComp from './components/Header/Header';
import { Routes, Route} from 'react-router-dom';
import Products from './components/ProductsComponent/ProductsComponent';
import SingleProduct from './components/SingleProduct/SingleProduct';
import Notfound from './components/NotFoundPage/Notfound';
import Footer  from '../src/components/footer/Footer'
import CartComponent from '../src/components/CartComponent/CartComponent/CartComponent'
import HomePage from './Pages/HomePage';
import ContactPage from './Pages/ContactPage/Contact';





function App() {
  return (

    <div className="App">
      <NavBarComp />
      <Routes>
        <Route path='/' element={<HomePage />}></Route>
        <Route path='/products' element={<Products />}></Route>
        <Route path='/books/:isbn' element={<SingleProduct />}></Route>
        <Route path='/*' element={<Notfound />}></Route>
        <Route path='/cart' element={<CartComponent/>}></Route>
        <Route path='/contacts' element={<ContactPage/>}></Route>
       

      </Routes>
   <Footer/>
      
    </div>

  );
}

export default App;


