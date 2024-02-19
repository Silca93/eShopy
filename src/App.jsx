import { useState } from 'react'
import './App.css'

import star from './assets/images/Star_icon_stylized.svg.png'

import logo from './assets/images/logo.png'

import Card from './Card/Card'
import Body from './Body/Body'
import Header from './Header/Header'
import DATA from './assets/data/nestech.json'

function App() {
  const [count, setCount] = useState(0)

  console.log(DATA.produits[0].image);

  return (
    <div className="">
      <Body data={DATA} star={star} logo={logo}/>
      
    </div>
    // <div className="main w-screen h-screen bg-yellow-300">
    //   <Card />
    // <div className="card card-compact w-96 bg-base-100 shadow-xl">
      
    
    //   <figure><img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
    //   <div className="card-body bg-blue-400 rounded-b-xl">
    //   <h2 className="card-title">
    //       </h2>
    //   <p>If a dog chews shoes whose shoes does he choose?</p>
    //   <div className="card-actions justify-end">
    //   <button className="btn btn-primary">Buy Now</button>
    //    </div>
    //    </div>
    // </div>
      
    // </div>
    // <img src={DATA.produits[0].image} alt="" srcset="" />
  )
}

export default App
