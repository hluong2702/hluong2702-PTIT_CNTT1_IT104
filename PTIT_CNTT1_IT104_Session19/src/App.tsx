import { useState } from 'react'
import './App.css'
import Ex1 from './components/Ex1/ShoppingCart'
import Ex2 from './components/Ex2/ThemeProvider'
import RenderCounter from './components/Ex3/RenderCounter'
import FormNormal from './components/Ex4/FormNormal'
import RandomQuote from './components/Ex5/RandomQuote'
import KeyTracker from './components/Ex6/KeyTracker'
import ScrollToSection from './components/Ex7/ScrollToSection'
import LoginForm from './components/Ex8/Login'

function App() {
  return (
    <>
      {/* <Ex1/>
      <Ex2/>
      <RenderCounter/>
      <FormNormal/>
      <RandomQuote/>
      <KeyTracker/>
      <ScrollToSection/> */}
      <LoginForm/>
    </>
  )
}

export default App
