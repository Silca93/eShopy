import React from 'react'
import Card from '../Card/Card'
import Header from '../Header/Header'
import Banner from '../Banner/Banner'
import Footer from '../Footer/Footer';
import InfoBanner from '../InfoBanner/InfoBanner';

export default function Body({data, star, logo, fond, chercher, shop, coeur, money, budget, add, substract, count}) {
  // data.map((element , index) => {
  //     console.log(element.quantity);

  
  // })
  let bag_items = [];

  let display_item = (e) =>{
    console.log(e.current.target);
}
let display_current_card = (e) =>{
  console.log(e.data.id);
} ;
  


  return (
    <div className="body bg-[#222222] w-screen overflow-x-hidden flex flex-col gap-[1rem]">
      
        <Header logo={logo} chercher={chercher} shop={shop} coeur={coeur} money={money} budget={budget} count={count} add={add} data={data} bagItems={bag_items}/>

        <div className="techNest text-white text-[40px] flex justify-center items-center">
        <h1><span class="actual-text">&nbsp;&nbsp;</span>
        <span aria-hidden="true" className="hover-text max-[768px]:text-[25px]">&nbsp;ELEVATE YOUR TECH SPACE&nbsp;</span></h1>
        </div>

        <Banner fond={fond}/>
        <div className="text-white text-[30px] flex justify-center items-center">
        <h1 className="flex flex-wrap px-5 text-center">Building Your Tech Nest, One Accessory at a Time</h1>
        </div>

        <div className="cardsDiv w-full h-[120rem] flex overflow-x-hidden justify-center max-[883px]:bg-[#222222] max-[883px]:items-center max-[500px]:h[100%] max-[500px]:bg-[#222222] gap-4 flex-wrap mt-3">
                  
          {data.map((element, key) => 
          <Card key={key} data={element} star={star} coeur={coeur} add={add} substract={substract} display_item={display_item}
          display_current_card={display_current_card} />
          )}
           
        </div>
    

        



























            <InfoBanner />

            {/* Footer section start */}

            <Footer />

     
    </div>
  )
}
