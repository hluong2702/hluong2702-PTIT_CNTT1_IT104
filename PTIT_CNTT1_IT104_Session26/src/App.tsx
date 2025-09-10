import './App.css'
import { Route, Routes } from 'react-router-dom'
import ProductDetail from './components/ProductDetail'
import Student from './components/Student'
import Students from './components/Students'
import Login from './components/Login'
import PrivateRouter from './components/PrivateRouter'
import Account from './components/Account'
import ScrollRestoration from './components/ScrollRestoration'
import Contact from './components/Contact'
import About from './components/About'
import Post from './components/Post'
import Header from './components/Header'
import Teams from './components/Teams'
import TeamsIndex from './components/TeamsIndex'
import Team from './components/Team'

function App() {
  return (
    <>
    {/* <ScrollRestoration/>
    <Header/> */}
      <Routes>
        {/* <Route path='/product/:id' element={<ProductDetail/>}/>
        <Route path='/student/:name' element={<Student/>}/>
        <Route path='/students' element = {<Students/>}/>
        <Route path='/login' element = {<Login/>}/>
        <Route element = {<PrivateRouter/>}>
        <Route path="/account" element={<Account/>} />
        </Route> */}
        {/* <Route path='/contact' element={<Contact/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/post' element={<Post/>}/> */}
        <Route path="/teams" element={<Teams />}>
          <Route index element={<TeamsIndex />} />
          <Route path=":teamId" element={<Team />} />
        </Route>
        <Route path='/login' element={<Login />} />
        <Route element={<PrivateRouter />} >
        <Route path='/account' element={<Account />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
