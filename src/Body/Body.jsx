import React, { useState } from 'react'
import Card from '../Card/Card'
import Header from '../Header/Header'
import Banner from '../Banner/Banner'
import Footer from '../Footer/Footer';
import InfoBanner from '../InfoBanner/InfoBanner';

export default function Body({data, star, logo, fond, chercher, shop, coeur, money, budget, add, substract, count}) {

  // original list of products directly from data.json
  let list_product_data = [];
  data.map((items) =>{
    
   list_product_data.push({ "id": items.id,
                      "name": items.name,
                      "stock": items.quantity,
                      
                      "image":items.image,
                      });     
  })
  
  // current bag with usestate 
  const [bagProducts, setbagItems] = useState([]);


  let addToBag = (product) =>{

    setbagItems( [...bagProducts, product])
  }

  // console.log(bagProducts);

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
  
  // console.log(countItem("headset", bagProducts));

 
  let testItems = (tab, tab2) =>{
    let cpt_element = 0;

    //check first array : in this case, it will be original list of products by json file

    tab.map((element) =>{
      console.log("product by json file  : " + element.id); 
      // cpt_element = countItem(element, tab)
      

      //check second array : in this case, it will be current bag 

      tab2.map((element2) =>{
        // console.log( "product by current bag  : " +element2.name);
        cpt_element = countItem(element2, tab2)
        // console.log(`There are ${cpt_element} ${element2} in current bag`);
        if (element.name == element2.name) {



          element2.quantity = cpt_element;
          console.log(`There are ${element2.quantity} ${element2.name} in current bag`);

        }
      })
      
    })

  };



  console.log(bagProducts);


  

  testItems( list_product_data, bagProducts);
  // testItems(bagProducts);
  // console.log list_product_data);

  // const [bagItemsArray, setBagItemsArray] = useState (list_product_data);
  // console.log(bagItemsArray);

  // console.log(bagItemsArray);

  // let updateBagArray =()=>{
  //   setBagItemsArray( [...bagProducts, bagItemsArray])
  // }

  // updateBagArray();



  return (
    <div className="body bg-[#222222] w-full overflow-x-hidden flex flex-col gap-[1rem]">
      
        <Header logo={logo} chercher={chercher} shop={shop} coeur={coeur} money={money} budget={budget} count={count} add={add} data={data} 
          originalListProduct={list_product_data} bagProducts={bagProducts} addToBag={addToBag}/>

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
          <Card key={key} data={element} star={star} coeur={coeur} add={add} substract={substract} 
           addToBag={addToBag} originalListProduct={list_product_data} />
          )}
           
        </div>
    

        



























            <InfoBanner />

            {/* Footer section start */}

            <Footer />

     
    </div>
  )
}
