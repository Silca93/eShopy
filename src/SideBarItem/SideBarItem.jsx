import React from 'react'
import DELETE from '../assets/images/del.png'


export default function SideBarItem({data, items, qty, name, src,price}) {
    // console.log(items);
    // console.log(qty);
    // console.log(name);
    // console.log();
    // console.log(data[0].image);
  return (
    <div className='SideBarItem w-full h-[5rem] bg-white flex rounded-lg'>

        <div className="left w-[25%]  h-full rounded-l-lg">

            {/* image content */}

            <img src={src} alt="" srcset="" className='w-full h-full rounded-l-lg' />

        </div>

        <div className="middle w-[50%]  h-full flex justify-center items-center">

            {/* text content */}

            <p className='text-[0.8rem]'>
                {name + " " + "-" + " "  + "" + price +"€"}
            </p>

        </div>

        <div className="right w-[25%]  h-full rounded-r-lg flex flex-col justify-center items-center bg-red-400">
            
            {/* quantity content */}

            <p className='text-[0.8rem]'>QTY : <p className='text-black'> &nbsp; {qty}</p> </p>

            <button type="button ">{DELETE}</button>

        </div>
      
    </div>
  )
}
