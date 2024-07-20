import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Homepage from '../Pages/Homepage'
import Cart from '../customer/components/Cart/Cart'
import Navigation from '../customer/components/Navbar/Navigation'
import Footer from '../customer/components/footer/Footer'
import Product from '../customer/components/Product/Product/Product'
import ProductDetails from '../customer/components/ProductDetails/ProductDetails'
import Checkout from '../customer/components/Checkout/Checkout'
import Order from '../customer/components/Order/Order'
import OrderDetails from '../customer/components/Order/OrderDetails'
import PaymentSuccess from '../customer/components/Payment/PaymentSuccess'

const CustomerRouters = () => {
  return (
    <div>
      <div>
        <Navigation />
      </div>
      <Routes>
        <Route Route path='/login' element={<Homepage />}></Route>
        <Route path='/register' element={<Homepage />}></Route>

        <Route path='/' element={<Homepage />}></Route>
        <Route path='/cart' element={<Cart />}></Route>
        <Route path='/:levelOne/:levelTwo/:levelThree' element={<Product />}></Route>
        <Route path='/product/:productId' element={<ProductDetails />}></Route>
        <Route path='/checkout' element={<Checkout />}></Route>
        <Route path='/account/order' element={<Order />}></Route>
        <Route path='/account/order/:orderId' element={<OrderDetails />}></Route>
        <Route path='/payment/:orderId' element={<PaymentSuccess />}></Route>
        {/* <Homepage/> */}
        {/* <Product/> */}
        {/* <ProductDetails/> */}
        {/* <Cart/> */}
        {/* <Checkout/> */}
        {/* <Order/> */}
        {/* <OrderDetails/> */}
      </Routes>
      <div>
        <Footer />
      </div>
    </div>
  )
}

export default CustomerRouters