import './App.css'
import Auth from './Modules/AuthModule/Components/AuthLayout/Auth'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ProtectedRoutes from './Utils/ProtectedRoutes'
import Home from './Modules/HomeModule/Components/Home'
import ListingBooks from './Modules/HomeModule/Components/ListingBooks'
import Register from './Modules/AuthModule/Components/Register/Register'
import ForgetPass from './Modules/AuthModule/Components/Forget/ForgetPass'
import Login from './Modules/AuthModule/Components/Login/Login'
import Change from './Modules/AuthModule/Components/Change/Change'
import Reset from './Modules/AuthModule/Components/Reset/Reset'
import MasterLayout from './Modules/SharedModule/Components/MasterLayout/MasterLayout'
import Cart from './Modules/CartModule/Components/Cart/Cart'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/Auth' element={<Auth />} >
            <Route index element={<Login />} />
            <Route path='Register' element={<Register />} />
            <Route path='Forget' element={<ForgetPass />} />
            <Route path='Change' element={<Change />} />
            <Route path='Reset' element={<Reset />} />
          </Route>
          <Route element={<ProtectedRoutes />}>
            <Route element={<MasterLayout />}>
              <Route path='/' element={<Home />} />
              <Route path='/listing-books' element={<ListingBooks />} />
              <Route path='/cart' element={<Cart />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
