import React from 'react'
import { Footer } from './components/Footer'
import { GlobalStyle } from './styles/global'
import 'react-toastify/dist/ReactToastify.css'
import { BrowserRouter as Router ,Routes, Route} from 'react-router-dom'
import Team from './pages/Team';
import Intro from './pages/Intro';
import Projects from './pages/Projects';
import {Container} from "./components/styles/main";
import { Header } from "./components/Header";
 
function App() {
  return (
    <>
      <GlobalStyle></GlobalStyle>
      <Router>
      <Container>
      <Header></Header>
      <Routes>
          <Route path="/" element={<Intro/>}/>
          <Route path="/web" element={<Intro/>}/>
          <Route path="/team" element={<Team/>}/>
          <Route path="/projects" element={<Projects/>}/>
          <Route path="/getInTouch" element={<Team/>}/>
      </Routes>
      </Container>
      </Router>
      <Footer/>
    </>
  )
}

export default App
