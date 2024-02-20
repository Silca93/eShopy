import React from 'react'
import Card from '../Card/Card'
import Header from '../Header/Header'
import Banner from '../Banner/Banner'

export default function Body({data, star, logo, fond, chercher, shop, coeur, money, budget, add}) {
  console.log(data);


  return (
    <div className="body bg-[#222222] w-screen overflow-x-hidden flex flex-col gap-[1rem] ">
      
        <Header logo={logo} chercher={chercher} shop={shop} coeur={coeur} money={money} budget={budget}/>
        <div className="techNest text-white text-[40px] flex justify-center items-center">
        <h1><span class="actual-text">&nbsp;&nbsp;</span>
        <span aria-hidden="true" class="hover-text">&nbsp;ELEVATE YOUR TECH HABITAT&nbsp;</span></h1>
        
        </div>
        <Banner fond={fond}/>
        <div className="text-white text-[30px] flex justify-center items-center">
        <h1>Building Your Tech Nest, One Accessory at a Time</h1>
        </div>
        <div className="cardsDiv w-full h-[120rem] flex overflow-x-hidden justify-center max-[883px]:bg-[#222222] max-[883px]:items-center max-[500px]:h[100%] max-[500px]:bg-[#222222] gap-4 flex-wrap mt-3">
                  
          {data.map((element, key) => 
          <Card key={key} data={element} star={star} add={add}/>
          )}
           
        </div>
    

        






























     
    </div>
  )
}
