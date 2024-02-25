import React from 'react'
import { useState, useEffect, useRef } from 'react';


export default function SideBarItem({data, items, qty, name, src, trash, increment}) {
    // console.log(items);
    // console.log(qty);
    // console.log(name);
    // console.log();
    // console.log(data[0].image);
    
    const amount = useRef(null);

    const [quantity, setQuantity] = useState(data.quantity);
  
    let removeItem = () => {
      amount.current.className = "hidden"
       
    }
  
  return (
    <div  ref={amount} className='SideBarItem w-full h-[5rem] bg-white flex rounded-lg'>

        <div className="left w-[25%]  h-full rounded-l-lg">

            {/* image content */}

            <img src={src} alt="" srcset="" className='w-full h-full rounded-l-lg' />

        </div>

        <div className="middle w-[40%]  h-full flex justify-center items-center">

            {/* text content */}

            <p className='text-[1rem]'>
                {name + " " + " "  + ""}
            </p>

        </div>

        <div className="right w-[20%]  h-full rounded-r-lg flex justify-center items-center ">
            
            {/* quantity content */}

            <p className='text-[0.8rem]'>QTY : </p><p className='text-black'> &nbsp; {qty}</p>

        </div>

        <div className="right w-[15%]  h-full rounded-r-lg flex flex-col justify-center items-center bg-white">
            
            {/* quantity content */}

            <div  className="w-full h-full flex justify-center items-center">
                 <img onClick={() => removeItem()} src={trash} alt="" width="25px" height="40px" />
            </div>
            

        </div>
      
    </div>
  )
}
