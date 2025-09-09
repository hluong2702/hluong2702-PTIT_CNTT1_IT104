import { Route, Router, Routes } from 'react-router-dom'
import './App.css'
import Home from './Components/Home'
import Contact from './Components/Contact'
import About from './Components/About'
import Login from './Components/Login'
import Register from './Components/Register'
import NotFound from './Components/NotFound'
import Detail from './Components/Detail'
import Product from './Components/Product'
import Header from './Components/Header'
import CustomLink from './Components/CustomLink'
import HomePage from './Components/HomePage'
import ListUser from './Components/ListUser'
import UserDetail from './Components/UserDetail'


function App() {

  return (
    <>
      {/* <Header/>
      <Routes>
        <Route path='/' element = {<Home/>}/>
        <Route path='/contact' element = {<Contact/>}/>
        <Route path='/about' element = {<About/>}/>
        <Route path='/login' element = {<Login/>}/>
        <Route path='/register' element = {<Register/>}/>
        <Route path='*' element = {<NotFound/>}/>
        <Route path='/detail' element = {<Detail/>}/>
        <Route path='/product' element = {<Product/>}/>
      </Routes>
      <Routes>
        <Route path='/' element = {<CustomLink/>} />
        <Route path='/home-page' element = {<HomePage/>}/>
        <Route path='*' element = {<NotFound/>}/>
      </Routes> */}
      <Routes>
        <Route path="/" element={<ListUser />} />
        <Route path="/user/:id" element={<UserDetail />} />
      </Routes>
    </>
  )
}

export default App
