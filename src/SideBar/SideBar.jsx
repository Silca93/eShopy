import React, { useState } from 'react'
import SideBarItem from '../SideBarItem/SideBarItem'


export default function SideBar({data, items, bagItems, toggleSB,originalListProduct,bagProducts}) {

  /** original with all informations about products */
  // console.log(originalListProduct);


  /** current bag  */
  // console.log(bagProducts);

  const [updatedBag, SetUpdatedBag] = useState([]);

  let addBag = (tab) =>{

    tab.map((element)=>{
      console.log(element);
    })

    // SetUpdatedBag([...updatedBag, ])
  }

  // addBag(bagProducts)

  console.log(updatedBag);

  const uniqueProductIds = new Set(bagProducts.map(product => product.id));


  return (

  <div className={`side_bar h-[50%]  w-[20%] bg-[rgba(217,217,217,1)] fixed z-50 top-[6.5rem] -right-[50%] rounded-[20px] text-center flex flex-col  items-center overflow-x-hidden  overflow-scroll ${toggleSB && '-translate-x-[105.5dvh]'} duration-[1s]`}>

    <h2 className='text-[2rem] mt-0 absolute top-0 bg-black text-white w-full '> ITEMS :</h2>

    <div className={`itemsList w-[90%] h-[100rem] absolute top-[4rem] flex flex-col gap-3`}>
        
        {/* place to put items  */}

        {/* <SideBarItem data={data} items={items} /> */}
        {bagProducts.map((element) =>{
          // console.log(element.name);

          const productIndex = bagProducts.findIndex(item => item.id == element.id);

          console.log(productIndex);
          if (element.quantity > 0 &&  uniqueProductIds.has(element.id)) {
            uniqueProductIds.delete(element.id);
            return < SideBarItem key={element.id} name={element.name} qty={element.quantity} src={element.image}  price={element.price}/>
          }
        })}
        {/* < SideBarItem data={data} items={items} /> */}
    </div>

  </div>
  )
}
