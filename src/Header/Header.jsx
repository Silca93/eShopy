import React from 'react'
import { useEffect, useState } from 'react'
import "../Header/Header.css"
import SideBar from '../SideBar/SideBar'
export default function Header({logo, chercher, shop, coeur, money, budget, count, add}) {

    const [topNavbar, setTopNavbar] = useState(null);
    // useEffect(() => {

    const [sideBar, setSideBar] = useState("none");


    let displaySideBar = () =>{

        document.getElementsByClassName("side_bar")
    }
    //? props.setmonpannier([...props.monpannier, props.marque])
        

    // }, [topNavbar]);
  return (
    <div className="w-full h-[10rem] flex flex-col justify-center items-center gap-3 px-3 relative">
        <div className={`group w-[98%] h-[10%] bg-[#3B3B3B] rounded-b-2xl flex fixed top-0 z-30 ${topNavbar}`}>
            <div className="left h-full w-1/3 text-white flex flex-row justify-start items-center gap-[5rem] text-[1.5rem] pl-6 relative">
                <a className="hover:underline" href="">Home</a>
                <a className="hover:underline" href="">Products</a>
                <a className="hover:underline" href="">Contact</a>
            </div>
            <div className="mid h-full w-1/3 bg-[#3B3B3B] flex justify-center items-center ">
                <img src={logo} alt="" width="300px" />
            </div>
            <div className="right h-full w-1/3 flex justify-end gap-6 items-center pr-5">
                <div className="h-[55%] w-[130px] bg-black rounded-3xl flex justify-center items-center gap-4 overflow-hidden">
                     <div className="h-[30px] w-[30px] bg-white rounded-full flex justify-center items-center">
                         <img src={money} alt="" />
                     </div>
                    <h1 className="text-[1.3rem] text-white pt-1"> € &nbsp;: &nbsp; {budget}</h1>
                </div> 
                <div className="left h-[55%] rounded-full w-[9rem] flex gap-2 justify-start pl-3 items-center bg-[#737373]">
                    <div className="loupe">
                        <img src={chercher} alt="" width="20px" height="20px"/>
                    </div>
                    <div className="search text-[white] pt-1">Search...</div>
                </div>
                <div className="mid">
                    <img src={coeur} className="" width="25px" height="25px" alt="" />
                </div>
                <div className="right" onClick={()=>{displaySideBar()}}>
                <img src={shop} width="25px" height="25px" alt="" id='shop_bag'/>
                <span className="circle_bag">{count}</span>
                </div>
            </div>
        </div>
        <div className="side_bar h-[20rem] w-[15rem] bg-[rgba(217,217,217,0.8)] absolute top-[5.5rem] right-[2.2rem] rounded-[20px] text-center flex flex-col  items-center" >
            <h2 className='text-[2rem] mt-2 absolute top-0'> ITEMS :</h2>

            <div className={`itemsList w-[90%] absolute top-[4rem] bg-black `}>
                test

            </div>
        </div>
    </div> 
  )
}
