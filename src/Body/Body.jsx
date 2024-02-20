import React from 'react'
import Card from '../Card/Card'
import Header from '../Header/Header'
import Banner from '../Banner/Banner'

export default function Body({data, star, logo, fond}) {
  console.log(data);


  return (
    <div className="body bg-[#222222] w-screen flex flex-col gap-[1rem]">
        <Header logo={logo} />
        <Banner fond={fond}/>
        <div className="cardsDiv w-full h-[100rem] flex justify-start max-[883px]:items-center gap-2 flex-wrap mt-6 bg-red-500">
          {/* {
            data.map((element, key) => {
              console.log(element);
            })
          } */}
          
          {/* {data.map((element, key) => 
          <Card key={key} data={element} star={star}/>
          )} */}
           {/* <Card data={data} star={star}/> */}
        </div>
        
        
     














































     
    </div>
  )
}
