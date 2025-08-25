import './App.css'
import SubjectList from './components/ SubjectList'
import ClickCounter from './components/ ClickCounter'
import LoginStatus from './components/Ex2/LoginStatus'
import Ex3 from './components/Ex3/ex3'
import SubmitForm from './components/Ex5/ UserForm'
import ThemeSwitcher from './components/Ex6/ThemeSwitcher'
import ShoppingCart from './components/Ex7/ShoppingCart'

function App() {

  return (
    <>
      <SubjectList/>
      <ClickCounter/>
      <LoginStatus/>
      <Ex3/>
      <SubmitForm/>
      <ThemeSwitcher/>
      <ShoppingCart/>
    </>
  )
}

export default App
