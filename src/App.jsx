import { useState } from 'react'
import './App.css'

// images and logos//
import star from './assets/images/Star_icon_stylized.svg.png'
import bannerImg from './assets/images/fond-neon-hi-tech.jpg'
import logo from './assets/images/logo.png'
import shopCart from './assets/images/sac-de-courses.png'
import chercher from './assets/images/chercher.png'
import coeur from './assets/images/contour-coeur.png'

// components //
import Card from './Card/Card'
import Body from './Body/Body'
import Header from './Header/Header'

//json//
import DATA from './assets/data/nestech.json'

function App() {
  const [count, setCount] = useState(0)

 
  return (
    <div className="bg-[#222222]">
      <Body data={DATA} star={star} logo={logo} fond={bannerImg}/>
    </div>
   
  )
}

export default App
