import React from 'react'
import { Footer } from './components/Footer/Footer'
import { Main } from './components/Main/Main'
import { GlobalStyle } from './styles/global'
import 'react-toastify/dist/ReactToastify.css'
function App() {
  return (
    <>
      <GlobalStyle></GlobalStyle>
      <Main></Main>
      <Footer></Footer>
    </>
  )
}

export default App
