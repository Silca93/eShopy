import React from 'react'


export default function SideBarItem({data, items}) {
    console.log(items)
    // console.log(data[0].image);
  return (
    <div className='SideBarItem w-full h-[3rem] bg-white flex rounded-lg'>

        <div className="left w-[25%]  h-full rounded-l-lg">

            {/* image content */}

            <img src={data[0].image} alt="" srcset="" className='w-full h-full rounded-l-lg' />

        </div>

        <div className="middle w-[50%]  h-full flex justify-center items-end">

            {/* text content */}

            <p className='text-[0.8rem]'>
                {data[0].name + " " + "-" + " " + data[0].price + "" + "€"}
            </p>

        </div>

        <div className="right w-[25%]  h-full rounded-r-lg flex justify-center items-center ">
            
            {/* quantity content */}

            <p className='text-[0.8rem]'>QTY : </p><p className='text-black'> &nbsp; {items}</p>

        </div>
      
    </div>
  )
}
