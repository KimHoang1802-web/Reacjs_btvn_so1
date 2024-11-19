import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import BaiTap1 from './BaiTap1/BaiTap1'
import ChangeToGlasses from './BaiTap2/ChangeToGlasses'
import Body from './BaiTap1/Body'
import Body2 from './BaiTap2/Body2'
import Header2 from './BaiTap2/Header2'

function App() {
  

  return (
    <>
      <h1 className='text-center text-lime-600 font-black text-4xl my-5'>Bài tập số 1: </h1>
      <BaiTap1/>
      <h1 className='text-center text-lime-600 font-black text-4xl my-5'>Bài tập số 2: </h1>
      <Header2/>
      <Body2/>
      <ChangeToGlasses/>
    </>
  )
}

export default App
