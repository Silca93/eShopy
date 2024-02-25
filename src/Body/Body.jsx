import React, { useState, useEffect, useRef} from 'react'
import Card from '../Card/Card'
import Header from '../Header/Header'
import Banner from '../Banner/Banner'
import Footer from '../Footer/Footer';
import InfoBanner from '../InfoBanner/InfoBanner';

export default function Body({data, star, logo, fond, chercher, shop, coeur, money, trash, budget, add, substract, count}) {

  let bag_items = [];
  data.map((items) =>{
    bag_items.push({ "name" :items.id,
                      "qty": 0,
                      "image":items.image});     
  })

  const [bagItems, setbagItems] = useState([]);

  let addToBag = (productId) =>{
    setbagItems( [...bagItems, productId])
  }

  const [quantity, setQuantity] = useState(data.quantity);
  
  


  /**   Count item in array
   * 
   * @param {*} item : value to check
   * @param {*} tab  : array where to check value
   */
  let countItem = (item, tab)=>{
    let cpt = 0;
    tab.map((element) =>{
      if (element == item ) {
        cpt++;
      }
    })
    return cpt;
  }

  // countItem("hello", bag_items);
  // console.log(t);

  let testItems = (tab, tab2) =>{
    let cpt_element = 0;
    tab.map((element) =>{
      console.log(element); 
      cpt_element = countItem(element, tab)
      
      tab2.map((element2) =>{
        if (element == element2.name) {
          element2.qty = cpt_element;

          console.log( element + " has " + element2.qty);
          // console.log("hello");
        }
      })
      
    })

  };

  testItems(bagItems, bag_items);
  // testItems(bagItems);
  // console.log(bag_items);

  const [bagItemsArray, setBagItemsArray] = useState(bag_items);
  // console.log(bagItemsArray);

  // console.log(bagItemsArray);

  // let updateBagArray =()=>{
  //   setBagItemsArray( [...bagItems, bagItemsArray])
  // }

  // updateBagArray();



  return (
    <div className="body bg-[#222222] w-full overflow-x-hidden flex flex-col gap-[1rem]">
      
        <Header logo={logo} chercher={chercher} shop={shop} coeur={coeur} money={money} budget={budget} trash={trash} count={count} add={add} data={data} bagItems={bag_items} />

        <div className="techNest text-white text-[40px] flex justify-center items-center">
        <h1><span class="actual-text">&nbsp;&nbsp;</span> <p className='text-amber-800'></p>
        <span aria-hidden="true" className="hover-text max-[768px]:text-[25px]">&nbsp;ELEVATE YOUR TECH SPACE&nbsp;</span></h1>
        </div>

        <Banner fond={fond}/>
        <div className="text-white text-[30px] flex justify-center items-center">
        <h1 className="flex flex-wrap px-5 text-center">Building Your Tech Nest, One Accessory at a Time</h1>
        </div>

        <div className="cardsDiv w-full h-[120rem] flex overflow-x-hidden justify-center max-[883px]:bg-[#222222] max-[883px]:items-center max-[500px]:h[100%] max-[500px]:bg-[#222222] gap-4 flex-wrap mt-3">
                  
          {data.map((element, key) => 
          <Card key={key} data={element} star={star} coeur={coeur} trash={trash} add={add} substract={substract} quantity={data.quantity} 
           addToBag={addToBag} />
          )}
           
        </div>
    

        



























            <InfoBanner />

            {/* Footer section start */}

            <Footer />

     
    </div>
  )
}
