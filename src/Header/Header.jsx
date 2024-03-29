import React from 'react'
import { useEffect, useState, useRef } from 'react'
import "../Header/Header.css"
import SideBar from '../SideBar/SideBar'

import Bag from '../Bag/Bag'
export default function Header({logo, chercher, shop, coeur, money, budget, count, add, data, trash, bagItems}) {
    // console.log(data);
    const [topNavbar, setTopNavbar] = useState(null);
    const clickburger = useRef(null)
    const [burger, setBurger] = useState(false);

    let handleBurger = () => {
        setBurger(!burger);
        console.log("Hello cunt");
        if (!burger) {
            clickburger.current.className = "flex flex-col gap-1 text-[15px] justify-start ml-[-5rem]"

        }
        else {
            clickburger.current.className = "hidden"
        }
        
    }

    const [toggleSB,setToggleSB] = useState(false);

    let handleToggle =() =>{
        setToggleSB(!toggleSB);
    }

    //? props.setmonpannier([...props.monpannier, props.marque])
    console.log(bagItems);

    //drawer code 


    // }, [topNavbar]);
  return (
    <div className="w-full h-[10rem] flex flex-col justify-center items-center gap-3 px-3 relative mb-[-3rem] mt-[-3rem]">
        <div className={`group w-[98%] h-[10%] bg-[#3B3B3B] rounded-3xl px-2 flex fixed top-2 z-30 ${topNavbar}`}>
            
            <div className="left h-full w-1/3 text-white flex flex-row justify-start items-center gap-[5rem] text-[1.5rem] pl-6 relative max-[600px]:w-1/4">
            <div onClick={() => {handleBurger()}} class="menu-toggle cursor-pointer hidden max-[768px]:block">
              <span className="block w-[25px] h-[3px] bg-white mx-3 my-1"></span>
              <span className="block w-[25px] h-[3px] bg-white mx-3 my-1"></span>
              <span className="block w-[25px] h-[3px] bg-white mx-3 my-1"></span>
            </div>  
            <div ref={clickburger} className="flex gap-[5rem] max-[900px]:gap-[3rem] max-[900px]:text-[1.1rem] max-[768px]:hidden">        
                <a className="hover:underline max-[768px]:ml-0" href="">Home</a>
                <a className="hover:underline max-[768px]:ml-0" href="">Products</a>
                <a className="hover:underline max-[768px]:ml-0" href="">Contact</a>
            </div>    
            </div>
            <div className="mid h-full w-1/3 bg-[#3B3B3B] flex justify-center items-center max-[630px]:hidden ">
                <img className="nestech max-[1024px]:w-[200px] max-[1024px]:h-[120px] max-[630px]:hidden" src={logo} alt="" width="300px" height="100%" />
            </div>
            <div className="right h-full w-1/3 flex justify-end gap-6 items-center pr-5 max-[900px]:gap-2 max-[630px]:w-2/3">
                <div className="h-[55%] w-[140px] bg-black rounded-3xl flex justify-center items-center gap-4 overflow-hidden max-[1085px]:w-[200px] max-[890px]:w-[200px] max-[890px]:h-[60%] max-[890px]:gap-1 max-[890px]:flex max-[630px]:w-[80px] ">
                     <div className="h-[30px] w-[30px] bg-white rounded-full flex justify-center items-center max-[890px]:h-[25px] max-[890px]:w-[25px] ">
                         <img className="" src={money} alt="" />
                     </div>
                    <h1 className="text-[1.3rem] max-[1085px]:text-[1rem] text-white pt-1"> € &nbsp;: &nbsp; {budget}</h1>
                </div> 
                <div className="left h-[55%] rounded-full w-[9rem] flex gap-2 justify-start pl-3 items-center bg-[#737373] max-[630px]:w-[60px]">
                    <div className="loupe  max-[900px]:pl-2 max-[630px]:pl-0 max-[600px]:w-[2rem]">
                        <img className="" src={chercher} alt="" width="20px" height="20px"/>
                    </div>
                    <div className="search text-[white] pt-1 flex max-[900px]:hidden">Search...</div>
                </div>
                <div className="mid">
                    <img src={coeur} className="" width="25px" height="25px" alt="" />
                </div>
                <div className="right cursor-pointer" onClick={()=>{handleToggle(), appearBag()}} >

                    {/* bag component place */}

                    <Bag shop={shop} items={count} trash={trash} />
                {/* <img src={shop} width="25px" height="25px" alt="" id='shop_bag'/> */}

                <span className="circle_bag">{count}</span>
                </div>
            </div>

            
        </div>

        <div className="">  



         <SideBar toggleSB={toggleSB} data={data} items={count} bagItems={bagItems} trash={trash} /> 
        </div>
        {/* side bar place */}

    </div> 
  )
}


