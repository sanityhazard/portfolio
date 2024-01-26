import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.scss'
import Header from './components/Header'
import Section from './components/Section'
import Cards from './components/Cards'

function App() {
  useEffect(() => {
    document.title = "sntyhzrd"
  }, []);
  return (
    <div className='container'>
      <Header />
      <Section name={'about'} text={'Although I don’t excel at web design, I could definitely say backend and the server side of things is my strong side. That’s why I am especially keen on making APIs, bots and scripts.'} />
      <Section name={'projects'} text={'Here are some of the projects I’m proud of. Although that’s not everything I have made, I uploaded these on Github since I believe they showcase my skills the most. I think it’s essential to specify that not all of my work is listed here, as I also work as a freelancer.'} />
      <Cards />
    </div>
  )
}

export default App
