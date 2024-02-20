import React from 'react'
import Card from '../Card/Card'
import Header from '../Header/Header'
import Banner from '../Banner/Banner'

export default function Body({data, star, logo, fond}) {
  console.log(data);


  return (
    <div className="body bg-[#222222] w-screen overflow-x-hidden flex flex-col gap-[1rem]">
        <Header logo={logo} />
        <Banner fond={fond}/>
        <div className="cardsDiv w-full h-[170rem] flex overflow-x-hidden justify-center max-[883px]:bg-[#222222] max-[883px]:items-center max-[500px]:h[100%] max-[500px]:bg-[#222222] gap-4 flex-wrap mt-3">
                  
          {data.map((element, key) => 
          <Card key={key} data={element} star={star}/>
          )}
           
        </div>
    

        






























     
    </div>
  )
}
