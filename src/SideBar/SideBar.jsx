import React from 'react'
import SideBarItem from '../SideBarItem/SideBarItem'
import { useState } from 'react';


export default function SideBar({data, items, bagItems, trash, toggleSB}) {
  console.log(bagItems);


  // const [quantity, setQuantity] = useState(data.quantity);
  
  // let incrementQty = () => {
  //   setQuantity(quantity + 1)
    
  //   console.log(quantity);
  // }

  return (

  <div className={`side_bar h-[50%]  w-[20%] bg-[rgba(217,217,217,1)] fixed z-50 top-[6.5rem] -right-[50%] rounded-[20px] text-center flex flex-col  items-center overflow-x-hidden  overflow-scroll ${toggleSB && '-translate-x-[105.5dvh]'} duration-[1s]`}>

    <h2 className='text-[2rem] mt-0 absolute top-0 bg-black text-white w-full '> ITEMS :</h2>

    <div className={`itemsList w-[90%] h-[100rem] absolute top-[4rem] flex flex-col gap-3`}>
        
        {/* place to put items  */}

        {/* <SideBarItem data={data} items={items} /> */}
        {bagItems.map((element) =>{
          console.log(element);
          if (element.qty > 0) {
            
            return < SideBarItem key={element.name} name={element.name} qty={element.qty} src={element.image} trash={trash} data={data} />
          }
        })}
        {/* < SideBarItem data={data} items={items} /> */}
    </div>

  </div>
  )
}
