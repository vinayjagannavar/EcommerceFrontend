import logo from './logo.svg';
import './App.css';
import Navigation from "./customer/components/Navbar/Navigation";
import Homepage from './Pages/Homepage';
import Footer from './customer/components/footer/Footer';
import Product from './customer/components/Product/Product/Product';
import ProductDetails from './customer/components/ProductDetails/ProductDetails';
import Cart from './customer/components/Cart/Cart';
import Checkout from './customer/components/Checkout/Checkout';
import Order from './customer/components/Order/Order';
import OrderDetails from './customer/components/Order/OrderDetails';
import { Route, Routes } from 'react-router-dom';
import CustomerRouters from './Routers/CustomerRouters';

function App() {
  return (
    <div className=''>

      <Routes>
        <Route path='/*' element={<CustomerRouters/>}></Route>
      </Routes>

      
    </div>
  );
}

export default App;
