import { useState } from 'react'
import './App.css'

// images and logos//
import star from './assets/images/Star_icon_stylized.svg.png'
import bannerImg from './assets/images/fond-neon-hi-tech.jpg'
import logo from './assets/images/logo.png'
import shopCart from './assets/images/sac-de-courses.png'
import chercher from './assets/images/chercher.png'
import coeur from './assets/images/contour-coeur.png'
import money from './assets/images/account.svg'

// components //
import Card from './Card/Card'
import Body from './Body/Body'
import Header from './Header/Header'

//json//
import DATA from './assets/data/nestech.json'

function App() {
  const [count, setCount] = useState(0)
  const [budget, setBudget]= useState(2000);
 
 

  const decrementBudget = (price) => {

    if (price <= budget) {
      
      setBudget((prevValue) => ( ( prevValue - price ).toFixed(2) ) );
    }

    // console.log(budget);
  }

  let incrementCart = () => {
    setCount((prevValue) => prevValue + 1)
    console.log(count);
    
  }

  return (
    <div className="bg-[#222222]">
      <Body data={DATA} star={star} logo={logo} fond={bannerImg} chercher={chercher} shop={shopCart} coeur={coeur} money={money} budget={budget} add={incrementCart} substract={decrementBudget} count={count}/>
    </div>
  )
}
export default App
