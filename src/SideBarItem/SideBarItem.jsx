import React from 'react'


export default function SideBarItem({data, items, qty, name, src}) {
    // console.log(items);
    // console.log(qty);
    console.log(name);
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
                {name + " " + "-" + " "  + "" + "€"}
            </p>

        </div>

        <div className="right w-[25%]  h-full rounded-r-lg flex justify-center items-center ">
            
            {/* quantity content */}

            <p className='text-[0.8rem]'>QTY : </p><p className='text-black'> &nbsp; {qty}</p>

        </div>
      
    </div>
  )
}
