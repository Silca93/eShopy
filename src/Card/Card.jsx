import React from 'react'

export default function Card({data}) {
  return (
    <div className="card w-[400px] h-[600px] bg-white-500">
      <div className="top w-full h-[10%] bg-blue-500 flex justify-end items-center rounded-t-md">
        <div className="cart w-[50px] h-[50px] bg-green-500 mr-2 text-center">
          Shopping cart
        </div>
      </div>
      <div className="mid w-full h-[50%] bg-gray-300  flex justify-center">
      <img src={data.produits[0].image} alt="" srcset="" />
        
      </div>
      <div className="bot w-full h-[40%] bg-purple-400 rounded-b-md">
        <div className="itemInfo w-full h-full flex flex-col justify-start px-4 gap-3">
          <h1 className="text-[20px] font-[500]">{data.produits[0].name}</h1>
          <h1 className="text-[15px]">{data.produits[0].description}</h1>
          <h1 className="text-[25px]">{data.produits[0].price + " €"}</h1>
          <div className="buy w-[80%] h-[30%] flex justify-center items-center ">
            <button className="hover:bg-white hover:border-black hover:text-black border-solid border-2 w-5/6 h-5/6 rounded-md ml-[60px] bg-black text-white">ADD TO CART</button>
            

          </div>


        </div>

      </div>
        

    </div>
  )
}
