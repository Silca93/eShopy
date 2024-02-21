import React from 'react'
import SideBarItem from '../SideBarItem/SideBarItem'


export default function SideBar({data, items}) {
  return (

  <div className="side_bar h-[20rem] w-[15rem] bg-[rgba(217,217,217,1)] fixed z-50 top-[6.5rem] right-[1rem] rounded-[20px] text-center flex flex-col  items-center overflow-hidden" >

    <h2 className='text-[2rem] mt-0 absolute top-0 bg-black text-white w-full '> ITEMS :</h2>

    <div className={`itemsList w-[90%] absolute top-[4rem] `}>
        
        {/* place to put items  */}
        < SideBarItem data={data} items={items} />
    </div>

  </div>
  )
}
