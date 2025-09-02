import { useState } from 'react'
import './App.css'
import Ex1 from './components/Ex1'
import UserProfile from './components/UserProfile'
import Welcome from './components/Welcome'
import PageTitle from './components/PageTitle'
import Timer from './components/Timer'
import Counter from './components/Counter'
import UserForm from './components/UserForm'
import Modal from './components/Modal'

function App() {

  return (
    <>
      <Ex1/>
      <UserProfile/>
      <Welcome/>
      <PageTitle/>
      <Timer/>
      <Counter/>
      <UserForm/>
      <Modal/>
    </>
  )
}

export default App
