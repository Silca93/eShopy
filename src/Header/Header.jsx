import React from 'react'

export default function Header({logo, chercher, shop, coeur}) {
  return (
    <div className="w-full h-[10rem] flex justify-center items-center mb-5">
        <div className="w-[98%] h-[45%] bg-[#3B3B3B] rounded-2xl flex sticky z-30">
            <div className="left h-full w-1/3 text-white flex flex-row justify-start items-center gap-[5rem] text-[1.5rem] pl-6 relative">
                <a className="hover:underline" href="">Home</a>
                <a className="hover:underline" href="">Products</a>
                <a className="hover:underline" href="">Contact</a>
            </div>
            <div className="mid h-full w-1/3 bg-[#3B3B3B] flex justify-center items-center">
                <img src={logo} alt="" width="300px" />
            </div>
            <div className="right h-full w-1/3 flex justify-end gap-6 items-center pr-5">
                <div className="left h-[55%] rounded-full w-[9rem] flex gap-2 justify-start pl-3 items-center bg-[#737373]">
                    <div className="loupe">
                        <img src={chercher} alt="" width="20px" height="20px"/>
                    </div>
                    <div className="search text-[white] pt-1">Search...</div>
                </div>
                <div className="mid">
                    <img src={coeur} className="" width="25px" height="25px" alt="" />
                </div>
                <div className="right">
                <img src={shop} width="25px" height="25px" alt="" />
                </div>
            </div>
        </div>
    </div>
  )
}
